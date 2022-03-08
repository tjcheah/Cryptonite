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
    // backgroundColor: "green",
    padding: "20px 0px 30px 0px",
  },
  stackCont: {
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      width: "90%",
      // backgroundColor: "red",
    },
    [theme.breakpoints.up("md")]: {
      // backgroundColor: "pink",
      width: 600,
    },
  },
  feedbackTitle: {
    // backgroundColor: "yellow",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Antonio",
    fontWeight: 550,
    letterSpacing: 3,
  },
  description: {
    fontStyle: "italic",
    fontFamily: "Antonio",
    color: "#FCE883",
    fontSize: 18,
  },
  feedbackText: {
    // backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Antonio",
    fontSize: 22,
    marginTop: 20,
    padding: "20px 0 20px 0",
  },
  buttonFont: {
    fontFamily: "Antonio",
    fontSize: 20,
  },
  emeraldStone: {
    width: 100,
    [theme.breakpoints.up("xs")]: {
      width: "90%",
    },
  },
  greyStone: {
    width: 100,
    filter: "grayscale(100%)",
    [theme.breakpoints.up("xs")]: {
      width: "90%",
    },
  },
  goldCoin: {
    width: 60,
    marginLeft: "20px",
    [theme.breakpoints.up("xs")]: {
      width: "70%",
    },
  },
  greyCoin: {
    width: 60,
    filter: "grayscale(100%)",
    marginLeft: "20px",
    [theme.breakpoints.up("xs")]: {
      width: "70%",
    },
  },
  thumbs: {
    margin: "20px 50px 20px 50px",
    [theme.breakpoints.up("xs")]: {
      margin: "0px 20px",
      width: "70%",
    },
  },
  textArea: {
    width: 800,
    height: 200,
    fontFamily: "Antonio",
    marginTop: 50,
    padding: 20,
    fontSize: 20,
    borderRadius: 15,
  },
}));

export default function Feedback() {
  const classes = useStyles();
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [like, setLike] = useState("white");
  const [dislike, setDislike] = useState("white");
  const [recommend, setRecommend] = useState();
  const [input, setInput] = useState();

  const dynamicLike = () => {
    if (like === "white" && dislike === "white") {
      setLike("#66ff00");
      setRecommend("yes");
    }
    if (like === "white" && dislike === "red") {
      setLike("#66ff00");
      setDislike("white");
      setRecommend("yes");
    }
    if (like === "#66ff00") {
      setLike("white");
      setRecommend();
    }
  };
  const dynamicDisLike = () => {
    if (dislike === "white" && like === "white") {
      setDislike("red");
      setRecommend("no");
    }
    if (dislike === "white" && like === "#66ff00") {
      setDislike("red");
      setLike("white");
      setRecommend("no");
    }
    if (dislike === "red") {
      setDislike("white");
      setRecommend();
    }
  };
  const onSubmit = (data) => {
    if (
      rating1 > 0 &&
      rating2 > 0 &&
      (like === "#66ff00" || dislike === "red") &&
      input.length > 0
    ) {
      console.log(formdata);
      alert(
        "Thank you for the feedback! We appreciate your feedback and will continue to improve in the future."
      );
      setInput("");
      setRating1(0);
      setRating2(0);
      setLike("white");
      setDislike("white");
    } else {
      alert("Please complete the feedback form before submission!");
    }
  };

  // data output stored in an object
  const formdata = {
    uxRating: rating1,
    uiRating: rating2,
    willRecommend: recommend,
    feedback: input,
  };

  // const averageRating = formdata.uxRating + form
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
        <Typography className={classes.feedbackTitle} variant="h4">
          WE'D LOVE SOME FEEDBACK
        </Typography>
        <Typography className={classes.description}>
          ---------------- <b>XXX</b> users had rated Cryptonite <b>X</b> out of{" "}
          <b>5</b>!
        </Typography>
        <Stack className={classes.stackCont} direction="column" spacing={2}>
          <Typography className={classes.feedbackText} variant="subtitle1">
            How would you rate the overall experience using our website?
          </Typography>
          <Rating
            name="rating1"
            value={rating1}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            precision={1}
            onChange={(_, value) => {
              setRating1(value);
            }}
            icon={<img src={stone} className={classes.emeraldStone} />}
            emptyIcon={<img src={stone} className={classes.greyStone} />}
            className={classes.rating}
          />

          <Typography className={classes.feedbackText} variant="subtitle1">
            How would you rate the overall design of our website?
          </Typography>
          <Rating
            name="rating2"
            value={rating2}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
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
              style={{
                color: like,
                fontSize: 45,
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={dynamicLike}
              className={classes.thumbs}
              value={recommend}
            />
            <ThumbDownOffAltIcon
              style={{
                color: dislike,
                fontSize: 45,
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={dynamicDisLike}
              className={classes.thumbs}
              value={recommend}
            />
          </div>
          <Typography className={classes.feedbackText} variant="subtitle1">
            Private Feedback:
          </Typography>
          <textarea
            type="text"
            className={classes.textArea}
            placeholder="Give us your thoughts on how we can improve our website! The message will be sent to our tech support team directly."
            maxLength="500"
            minLength="20"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
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
            style={{ borderRadius: 50, margin: 20 }}
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
