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
        //console.log(response.data.Data);
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
    post.map((posts, index) => (
      <div key={index} style={{ backgroundColor: "blue" }}>
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
    <div className="newsContContainer">
      <div className="newsContainer">
        <div className="News">
          {/* News title and foreword */}
          <div className="news-text">
            {" "}
            <Typography
              variant="h3"
              style={{
                // backgroundColor: "green",
                width: "100%",
                fontWeight: "bold",
                marginBottom: 10,
                color: "black",
                fontFamily: "Antonio",
                textTransform: "uppercase",
                fontSize: 45,
                letterSpacing: 5,
                lineHeight: 0.9,
              }}
            >
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
              }}
            >
              Get the latest financial news and updates on cryptocurrency
              platform such as Bitcoin,Ethereum, Dogecoin, NFTs and more. See
              articles on price updates, future trends, mining and blockchain
              related stories.
            </Typography>
          </div>
        </div>
        {/* News slider */}
        <div className="sliderContainer">
          <Slider className="sliderWrapper" {...sliderSettings}>
            {renderSlides()}
          </Slider>
        </div>
      </div>
    </div>
  );
}
