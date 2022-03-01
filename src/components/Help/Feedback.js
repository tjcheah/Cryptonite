import React from "react";

import Box from "@mui/material/Box";
import "./Help.css";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
import Stack from "@mui/material/Stack";

import Rating from "@mui/material/Rating";

const useStyles = makeStyles((theme) => ({
  feedbackText: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Contactus() {
  const [value, setValue] = React.useState(2);

  const classes = useStyles();

  return (
    <div className="Help">
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
        <Typography className={classes.feedbackText} variant="h4">
          WE'D LOVE SOME FEEDBACK
        </Typography>
        <Typography className={classes.feedbackText} variant="subtitle1">
          How likely will you comeback?
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Rating name="no-value" value={null} precision={1} />
        </Stack>
        <Typography className={classes.feedbackText} variant="subtitle1">
          How would you rate our website?
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Rating name="no-value" value={null} precision={1} />
        </Stack>
        <Typography className={classes.feedbackText} variant="subtitle1">
          Would you recommend us to your friends?
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Rating name="no-value" value={null} precision={1} />
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
            className={classes.feedbackButton}
            variant="contained"
            color="success"
            size="medium"
            fullWidth="false"
          >
            Submit Feedback
          </Button>
        </Box>
      </Box>
    </div>
  );
}
