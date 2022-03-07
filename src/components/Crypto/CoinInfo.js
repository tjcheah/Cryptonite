import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import "chart.js/auto";
import { CryptoState } from "../../CryptoContext";

const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [flag, setflag] = useState(false);
  const { currency, symbol } = CryptoState();
  const useStyles = makeStyles((theme) => ({
    container: {
      marginBottom: 30,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      [theme.breakpoints.down("sm")]: {
        padding: 0,
      },
    },
  }));

  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  function EpochToDate(epoch) {
    if (epoch < 10000000000) epoch *= 1000; // convert to milliseconds (Epoch is usually expressed in seconds, but Javascript uses Milliseconds)
    var epoch = epoch + new Date().getTimezoneOffset() * -1;
    var date = new Date(epoch); //for timeZone
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    var time = hours + ":" + minutes + ":" + seconds;
    return time;
  }
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  var date = today.getDate();
  var day = today.getDay();

  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  if (date < 10) {
    date = "0" + date;
  }
  const monthOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var formatDate =
    dayOfWeek[day] + " " + date + " " + monthOfYear[month] + " " + year;

  const [price, setPrice] = useState([]);
  const [tick, setTick] = useState([]);

  var lineChart = {
    labels: tick,
    datasets: [
      {
        data: price,
        label: ``,
        borderColor: "#174f1a",
      },
    ],
  };
  var chartOptions = {
    responsive: true,
    showLine: true,
    showtooltip: true,
    animation: {
      duration: "speed * 1.5",
      easing: "linear",
    },
    layout: { padding: 20 },
    elements: {
      line: {
        tension: 0.5,
      },
      point: {
        pointStyle: "circular",
        radius: 5,
        pointHoverRadius: 10,
      },
    },
    interaction: {
      mode: "nearest",
      intersect: false,
    },
    scale: {
      x: {
        min: tick[tick.length - 11],
        max: tick[tick.length - 1],
      },
      y: {
        afterDataLimits(scale) {
          // add 5% to both ends of range
          var range = scale.max - scale.min;
          var grace = range * 0.05;
          scale.max += grace;
          scale.min -= grace;
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          title: function (context) {
            return `${formatDate}, ${context[0].label}`;
          },
          label: function (context) {
            return `Price: $${context.parsed.y}`;
          },
        },
      },
    },
  };
  var api_call = "wss://ws.binaryws.com/websockets/v3?app_id=1089";

  useEffect(() => {
    var ws = new WebSocket(api_call);

    ws.onopen = (evt) => {
      ws.send(
        JSON.stringify({
          ticks_history: "cryBTCUSD",
          adjust_start_time: 1,
          count: 10,
          end: "latest",
          start: 1,
          style: "ticks",
        })
      );
      ws.send(JSON.stringify({ ticks: "cryBTCUSD" }));
    };

    ws.onmessage = function (evt) {
      var data = JSON.parse(evt.data);
      if (data.history != null) {
        var tickHist = data.history;
        setHistoricData(tickHist);
        for (let i = 0; i < 10; i++) {
          setTick((currentTick) => [
            ...currentTick,
            EpochToDate(tickHist.times[i]),
          ]);
        }
        console.log("ticks: %o", tick);
        setPrice(tickHist.prices);
        setflag(true);
      }
      if (data.tick != null) {
        var tickInfo = data.tick;
        console.log(tickInfo);
        if (tickInfo.quote != null && tickInfo.epoch != null) {
          setTick((currentTick) => [
            ...currentTick,
            EpochToDate(tickInfo.epoch),
          ]);
          setPrice((currentPrice) => [...currentPrice, tickInfo.quote]);
        }
      }
    };

    return () => ws.close();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!historicData | (flag === false) ? (
          <CircularProgress
            style={{ color: "#c6cec6" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line data={lineChart} options={chartOptions}></Line>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;
