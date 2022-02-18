import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.css";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Slider from "react-slick";
import { useStyles } from "./NewsResponsiveness";

export default function News() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    // invalid url will trigger an 404 error
    axios
      .get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
      .then((response) => {
        console.log(response.data.Data);
        setPost(response.data.Data.splice(0, 9));
      })
      .catch((error) => {
        setError(error);
      });
    return () => {};
  }, []);

  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "red" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "green" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const sliderSettings = {
    // removes default buttons

    arrows: true,

    slidesToShow: 3,
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
      <div>
        <CardActionArea href={posts.url}>
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
      <div className="slider-wrapper">
        <div className="news-text">
          <h1 className="crypto-news">Crypto News</h1>
          <p className="crypto-newsDesc">
            Get the latest financial news and updates on cryptocurrency platform
            such as Bitcoin,Ethereum, Dogecoin, NFTs and more. See articles on
            price updates, future trends, mining and blockchain related stories.
          </p>
        </div>
        <Slider {...sliderSettings}>{renderSlides()}</Slider>
      </div>
    </div>
  );
}
