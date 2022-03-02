import { makeStyles } from "@material-ui/core";
import WhiteCard from "../../media/card.png";

const useStyles = makeStyles((theme) => ({
  //Banner
  bannerContent: {
    // margin: 0,
    // padding: 0,
    // backgroundColor: "green",
    // backgroundColor: "#f2f2f2",
    display: "flex",
    flexDirection: "column",
    paddingTop: 40,
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      // backgroundColor: "red",
      height: 800,
      paddingTop: 40,
    },
    [theme.breakpoints.up("sm")]: {
      // backgroundColor: "blue",
      height: 800,
      paddingTop: 40,
    },
    [theme.breakpoints.up("md")]: {
      // backgroundColor: "yellow",
      height: 570,
    },
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${WhiteCard})`,
    // backgroundColor: "red",
    borderRadius: 30,
    // boxShadow: "0px 4px 4px 2px #aaa",
    marginTop: 40,
    marginBottom: 40,
    [theme.breakpoints.up("xs")]: {
      backgroundColor: "brown",
      height: "75%",
      width: "90%",
    },
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "pink",
      height: "75%",
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: "green",
      height: "65%",
      width: "80%",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "cyan",
      height: "90%",
      width: "80%",
    },
  },
  tagline: {
    marginTop: 5,
    // backgroundColor: "pink",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("xs")]: {
      // marginTop: 10,
      width: "90%",
      // height: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      // marginTop: 10,
      width: "90%",
      // height: "17%",
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
      // height: "17%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
      // height: "15%",
    },
  },
  trendTitle: {
    // backgroundColor: "gray",
    fontWeight: "bold",
    fontFamily: "Antonio",
    color: "white",
    textTransform: "uppercase",
    fontSize: 45,
    letterSpacing: 5,
    lineHeight: 1,
  },
  trendTagline: {
    // backgroundColor: "purple",
    paddingTop: 15,
    color: "white",
    fontweight: "light",
    // textTransform: "capitalize",
    fontFamily: "garamond",
    lineHeight: 1,
    textAlign: "justify",
    [theme.breakpoints.up("xs")]: {
      fontSize: 18,
      paddingBottom: 5,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 18,
    },
  },
  //Carousel
  carousel: {
    // backgroundColor: "gray",
    display: "flex",
    alignItems: "center",

    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {
      width: "95%",
      height: "100%",
      marginTop: 20,
      marginBottom: 20,
    },
    [theme.breakpoints.up("sm")]: {
      width: "95%",
      height: "100%",
      marginTop: 20,
      marginBottom: 20,
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      height: "90%",
    },
  },
  carouselItem: {
    // backgroundColor: "pink",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",

    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
      marginLeft: "0.5rem",
      marginRight: "0.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
  coinImage: {
    // backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    color: "white",
    alignItems: "center",
    justifyContent: "flex-start",

    [theme.breakpoints.up("xs")]: {
      // backgroundColor: "red",
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.up("sm")]: {
      // backgroundColor: "green",
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.up("md")]: {
      // backgroundColor: "orange",
      marginRight: 40,
      width: "auto",
      height: "35%",
    },
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: "gray",
      marginRight: 40,
      width: "auto",
      height: "40%",
    },
  },
  coinDetails: {
    // backgroundColor: "orange",
    display: "flex",
    flexDirection: "column",
    textTransform: "uppercase",
    color: "white",
    // paddingTop: 5,

    [theme.breakpoints.up("xs")]: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: 23,
      width: "60%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: 15,
      width: "60%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  },
  coinHighlight: {
    // backgroundColor: "yellow",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
    width: "100%",
  },
  coinInfo: {
    // backgroundColor: "green",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
    },
    [theme.breakpoints.up("lg")]: {
      justifyContent: "flex-start",
    },
  },
  //Carousel Texts
  coinTitle: {
    // backgroundColor: "cyan",
    margin: 10,
    fontWeight: 600,
    fontFamily: "Antonio",
    color: "#a9aaa9",
    letterSpacing: "0.5rem",

    [theme.breakpoints.up("xs")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 40,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 55,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 66,
    },
  },
  coinPrice: {
    // backgroundColor: "white",
    fontWeight: 500,
    fontFamily: "Antonio",
    color: "black",
    marginLeft: 5,

    [theme.breakpoints.up("xs")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 35,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 45,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 55,
    },
  },
  coinChange: {
    // backgroundColor: "gray",
    fontWeight: 600,
    fontFamily: "Antonio",
    marginRight: 5,

    [theme.breakpoints.up("xs")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 35,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 45,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 55,
    },
  },
  volTitle: {
    // backgroundColor: "indigo",
    width: "40%",
    marginLeft: 5,
    display: "flex",
    color: "#a9aaa9",
    fontFamily: "Antonio",

    [theme.breakpoints.up("xs")]: {
      // backgroundColor: "gray",
      fontSize: 24,
    },
    [theme.breakpoints.up("sm")]: {
      // backgroundColor: "yellow",
      fontSize: 24,
    },
    [theme.breakpoints.up("md")]: {
      // backgroundColor: "green",
      fontSize: 24,
    },
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: "cyan",
      fontSize: 30,
    },
  },
  coinVol: {
    // backgroundColor: "gray",
    width: "60%",
    marginRight: 5,
    display: "flex",
    fontFamily: "Antonio",
    color: "black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",

    [theme.breakpoints.up("xs")]: {
      // backgroundColor: "gray",
      fontSize: 24,
    },
    [theme.breakpoints.up("sm")]: {
      // backgroundColor: "yellow",
      fontSize: 24,
    },
    [theme.breakpoints.up("md")]: {
      // backgroundColor: "green",
      fontSize: 24,
    },
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: "cyan",
      fontSize: 30,
    },
  },
  capitalTitle: {
    // backgroundColor: "yellow",
    width: "40%",
    marginLeft: 5,
    display: "flex",
    color: "#a9aaa9",
    fontFamily: "Antonio",

    [theme.breakpoints.up("xs")]: {
      // backgroundColor: "gray",
      fontSize: 24,
    },
    [theme.breakpoints.up("sm")]: {
      // backgroundColor: "yellow",
      fontSize: 24,
    },
    [theme.breakpoints.up("md")]: {
      // backgroundColor: "green",
      fontSize: 24,
    },
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: "cyan",
      fontSize: 30,
    },
  },
  capital: {
    // backgroundColor: "pink",
    width: "60%",
    marginRight: 5,
    display: "flex",
    fontFamily: "Antonio",
    color: "black",

    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",

    [theme.breakpoints.up("xs")]: {
      // backgroundColor: "gray",
      fontSize: 24,
    },
    [theme.breakpoints.up("sm")]: {
      // backgroundColor: "yellow",
      fontSize: 24,
    },
    [theme.breakpoints.up("md")]: {
      // backgroundColor: "green",
      fontSize: 24,
    },
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: "cyan",
      fontSize: 30,
    },
  },
}));

export { useStyles };
