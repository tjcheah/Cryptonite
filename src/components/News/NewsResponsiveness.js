import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
});

export { useStyles };
