import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import { makeStyles } from "@material-ui/core";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import AboutUs from "./Pages/AboutUs";
import Market from "./Pages/Forex";
import Topo from "./media/topo.jpg";
import Forex from "./Pages/Forex";
import Help from "./Pages/Help";
import LandingPage from "./Pages/LandingPage";

function App() {
  const useStyles = makeStyles(() => ({
    AppF2: {
      margin: 0,
      padding: 0,
      backgroundColor: "#f2f2f2",
      // backgroundColor: "gold",
      color: "white",
      minHeight: "100%",
    },
    AppLgreen: {
      margin: 0,
      padding: 0,
      backgroundColor: "#c6cec6",
      // backgroundColor: "cyan",
      color: "white",
      minHeight: "100%",
    },
    AppTopo: {
      margin: 0,
      padding: 0,
      backgroundImage: `url(${Topo})`,
      // backgroundColor: "purple",
      color: "white",
      minHeight: "100%",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Router>
        <div className={classes.AppF2}>{/* <NavBar/> */}</div>
        <div className={classes.AppLgreen}>
          <Routes></Routes>
        </div>
        <div className={classes.AppTopo}>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/coins/:id" element={<Coinpage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/help" element={<Help />} />
            <Route path="/forex" element={<Forex />} />
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
          <Footer />
        </div>
        <Alert />
      </Router>
    </>
  );
}

export default App;
