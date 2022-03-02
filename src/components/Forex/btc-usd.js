import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import "chart.js/auto";
import { Typography } from "@material-ui/core";

const BtcUsd = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [flag, setflag] = useState(false);

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "40px 40px 40px 0px",
      marginTop: 25,
      padding: 20,
      [theme.breakpoints.down("md")]: {
        width: "90%",
        margin: 0,
        // padding: 20,
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
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
  const [price, setPrice] = useState([]);
  const [tick, setTick] = useState([]);

  var lineChart = {
    labels: tick,
    datasets: [
      {
        data: price,
        label: `Tick Stream for BTC/USD`,
        borderColor: "aquamarine",
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
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: function (context) {
            return `Price: ${context.parsed.y}`;
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

    return () =>
      (ws.onclose = function (evt) {
        console.log("connection close");
      });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        <Typography variant="h3">Tick Stream for BTC/USD</Typography>
        {!historicData | (flag === false) ? (
          <CircularProgress style={{ color: "red" }} size={250} thickness={1} />
        ) : (
          <>
            <Line data={lineChart} options={chartOptions}></Line>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default BtcUsd;
