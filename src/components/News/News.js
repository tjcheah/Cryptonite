import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Slider from "react-slick";
import "./News.css";
import { Container, makeStyles, Typography } from "@material-ui/core";
import NewsSlider from "./NewsSlider";

const useStyles = makeStyles((theme) => ({
  newsTitle: {
    width: "100%",
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
    fontFamily: "Antonio",
    textTransform: "uppercase",
    fontSize: 45,
    letterSpacing: 5,
    lineHeight: 0.9,
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
}));

// [theme.breakpoints.down("xs")]: {
//                   fontSize: 30,
//                 },

export default function News() {
  const classes = useStyles();
  return (
    <div className="newsContContainer">
      <div className="newsContainer">
        <div className="News">
          {/* News title and foreword */}
          <div className="news-text">
            {" "}
            <Typography className={classes.newsTitle} variant="h3">
              Crypto News
            </Typography>
            <Typography
              // variant="subtitle2"
              style={{
                // backgroundColor: "pink",
                fontweight: "light",
                fontFamily: "garamond",
                color: "black",
                fontSize: 18,
                textAlign: "justify",
                lineHeight: 1,
                paddingTop: 5,
                paddingBottom: 20,
                justifyContent: "center",
                letterSpacing: 1,
              }}
            >
              Get the latest financial news and updates on cryptocurrency
              platform such as Bitcoin,Ethereum, Dogecoin, NFTs and more. See
              articles on price updates, future trends, mining and blockchain
              related stories.
            </Typography>
          </div>
        </div>
        <NewsSlider />
      </div>
    </div>
  );
}
