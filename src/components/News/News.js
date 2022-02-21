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

export default function News() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    // invalid url will trigger an 404 error
    axios
      .get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
      .then((response) => {
        console.log(response.data.Data);
        setPost(response.data.Data.splice(0, 10));
      })
      .catch((error) => {
        setError(error);
      });
    return () => {};
  }, []);

  function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? ">" : "<";
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }

  const sliderSettings = {
    // removes default buttons

    arrows: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    // focusOnSelect: true,
    // centerPadding: "15px",
    pauseOnHover: true,
    infinite: true,
    swipeToSlide: true,
  };

  const styles = {
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
      opacity: 0.5,
    },
    card: {
      position: "relative",
      borderRadius: "5%",
      marginLeft: "8px",
      marginRight: "7px",
    },
    overlay: {
      position: "absolute",
      top: "20px",

      color: "black",
      fontFamily: "Antonio",
      fontSize: "18px",
      fontWeight: "Bold",
    },
  };

  const renderSlides = () =>
    post.map((posts) => (
      <div className="news-content">
        <CardActionArea href={posts.url} target="_blank">
          <Card style={styles.card}>
            <CardMedia image={posts.imageurl} style={styles.media} />
            <div style={styles.overlay}>{posts.title}</div>
          </Card>
          <span></span>
        </CardActionArea>
      </div>
    ));

  return (
    <div className="News">
      <div className="news-text">
        <Typography
          variant="h3"
          style={{
            fontWeight: "bold",
            marginBottom: 15,
            fontFamily: "Antonio",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          Crypto News
        </Typography>

        <Typography
          variant="subtitle2"
          style={{
            color: "darkgrey",
            fontweight: "light",
            textTransform: "capitalize",
            fontFamily: "Antonio",
            textAlign: "start",
            paddingTop: "10px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          Get the latest financial news and updates on cryptocurrency platform
          such as Bitcoin,Ethereum, Dogecoin, NFTs and more. See articles on
          price updates, future trends, mining and blockchain related stories.
        </Typography>
      </div>
      <div className="slider-wrapper"></div>
      <Slider {...sliderSettings}>{renderSlides()}</Slider>
    </div>
  );
}
