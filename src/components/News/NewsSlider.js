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

const NewsSlider = () => {
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

  const sliderSettings = {
    // removes default buttons
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    infinite: true,
    swipeToSlide: true,
  };
  const styles = {
    media: {
      height: 0,
      paddingTop: "50%", // 16:9
      opacity: 0.3,
    },
    card: {
      backgroundColor: "black",
      position: "relative",
      borderRadius: 20,
      marginLeft: "5px",
      marginRight: "5px",
    },
  };

  const renderSlides = () =>
    post.map((posts, i) => (
      <div style={{ backgroundColor: "blue" }} key={i}>
        <CardActionArea href={posts.url} target="_blank">
          <Card style={styles.card}>
            <CardMedia image={posts.imageurl} style={styles.media} />

            <div>
              <div className="overlay">{posts.title}</div>
            </div>
          </Card>
          <span></span>
        </CardActionArea>
      </div>
    ));
  return (
    <div className="sliderContainer">
      <Slider className="sliderWrapper" {...sliderSettings}>
        {renderSlides()}
      </Slider>
    </div>
  );
};

export default NewsSlider;
