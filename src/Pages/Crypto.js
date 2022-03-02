import React from "react";
import CryptoPage from "../components/Crypto/CryptoPageTable";
import NewsSlider from "../components/News/NewsSlider";
import CryptoExchange from "../components/Crypto/CryptoExchanges";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  topContainer: {
    height: 120,
    backgroundColor: "#c6cec6",
    marginTop: -120,
  },
  newsBar: {
    width: "100%",
    height: 260,
    backgroundColor: "#f2f2f2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

}));

const Crypto = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.topContainer}></div>
      <div className={classes.newsBar}>
        <div className="newsContainer">
          <NewsSlider />
        </div>
      </div>
      <CryptoExchange />
      <CryptoPage />
    </div>
  );
};

export default Crypto;
