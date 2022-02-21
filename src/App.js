import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import { makeStyles } from "@material-ui/core";
import Footer from "./components/Footer";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Router>
        <div className={classes.App}>
          {/* <NavBar/> */}
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/coins/:id" element={<Coinpage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
