import React from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import "./Help.css";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import stone from "./stone.png";
import coin from "./Cryptonite Logo (Gold).png";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const useStyles = makeStyles((theme) => ({
  feedbackForm: {
    padding: "20px 0px 30px 0px",
  },
  feedbackTitle: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Antonio",
    fontWeight: 550,
    letterSpacing: 3,
  },
  feedbackText: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Antonio",
    fontSize: 18,
    marginTop: 20,
  },
  buttonFont: {
    fontFamily: "Antonio",
  },
  emeraldStone: {
    width: 100,
  },
  greyStone: {
    width: 100,
    filter: "grayscale(100%)",
  },
  goldCoin: {
    width: 60,
    margin: "20px",
  },
  greyCoin: {
    width: 60,
    filter: "grayscale(100%)",
    margin: "20px",
  },
  thumbs: {
    margin: "20px 50px 20px 50px",
  },
}));

export default function Feedback() {
  const classes = useStyles();
  // const { register, handleSubmit } = useForm();
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [like, setLike] = useState("white");
  const [dislike, setDislike] = useState("white");
  const [submit, setSubmit] = useState();

  const dynamicLike = () => {
    if (like === "white" && dislike === "white") {
      setLike("#66ff00");
    }
    if (like === "white" && dislike === "red") {
      setLike("#66ff00");
      setDislike("white");
    }
    if (like === "#66ff00") {
      setLike("white");
    }
  };

  const dynamicDisLike = () => {
    if (dislike === "white" && like === "white") {
      setDislike("red");
    }
    if (dislike === "white" && like === "#66ff00") {
      setDislike("red");
      setLike("white");
    }
    if (dislike === "red") {
      setDislike("white");
    }
  };

  const dynamicSubmit = () => {
    if (
      rating1 === 0 &&
      rating2 === 0 &&
      like === "white" &&
      dislike === "white"
    ) {
      alert("Please complete the feedback form before submission!");
    } else {
      alert(
        "Thank you for the feedback! We appreciate your feedback and will continue to improve in the future."
      );
      setRating1(0);
      setRating2(0);
      setLike("white");
      setDislike("white");
    }
  };
  return (
    <form className={classes.feedbackForm} onSubmit={handleSubmit(onSubmit)}>
      <Box
        className="feedback-form"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",

          alignItems: "center",
          paddingTop: "30px",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        {" "}
        <Typography className={classes.feedbackTitle} variant="h4">
          WE'D LOVE SOME FEEDBACK
        </Typography>
        <Stack
          direction="column"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Typography className={classes.feedbackText} variant="subtitle1">
            How likely will you comeback?
          </Typography>

          <Rating
            name="rating1"
            value={rating1}
            precision={1}
            onChange={(_, value) => {
              setRating1(value);
            }}
            icon={<img src={stone} className={classes.emeraldStone} />}
            emptyIcon={<img src={stone} className={classes.greyStone} />}
            className={classes.rating}
          />
          <Typography className={classes.feedbackText} variant="subtitle1">
            How would you rate our website?
          </Typography>
          <Rating
            name="rating2"
            value={rating2}
            precision={1}
            onChange={(_, value) => {
              setRating2(value);
            }}
            icon={<img src={coin} className={classes.goldCoin} />}
            emptyIcon={<img src={coin} className={classes.greyCoin} />}
            className={classes.rating}
          />
          <Typography className={classes.feedbackText} variant="subtitle1">
            Would you recommend us to your friends?
          </Typography>
          <div>
            <ThumbUpOffAltIcon
              style={{ color: like, fontSize: 45 }}
              onClick={dynamicLike}
              className={classes.thumbs}
            />

            <ThumbDownOffAltIcon
              style={{ color: dislike, fontSize: 45 }}
              onClick={dynamicDisLike}
              className={classes.thumbs}
            />
          </div>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            "& > :not(style)": {
              width: "200px",
              m: 1,
            },
          }}
        >
          <Button
            disabled={!formState.isValid}
            type="submit"
            className={classes.feedbackButton}
            variant="contained"
            color="success"
            style={{ borderRadius: 50 }}
            onClick={dynamicSubmit}
          >
            <Typography className={classes.buttonFont}>
              Submit Feedback
            </Typography>
          </Button>
        </Box>
      </Box>
    </form>
  );
}
