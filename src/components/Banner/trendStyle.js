import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  //Banner
  bannerContent: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
    [theme.breakpoints.up("xs")]: {
      height: 700,
      marginTop: 20,
    },
    [theme.breakpoints.up("sm")]: {
      height: 650,
      marginTop: 20,
    },
    [theme.breakpoints.up("md")]: {
      height: 700,
    },
    [theme.breakpoints.up("lg")]: {
      height: 700,
    },
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url(./card.png)",
    borderRadius: 25,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.3)",
    [theme.breakpoints.up("xs")]: {
      height: "100%",
      width: "100%",
      marginTop: 50,
      marginBottom: 50,
    },
    [theme.breakpoints.up("sm")]: {
      height: "100%",
      width: "100%",
      marginTop: 50,
      marginBottom: 50,
    },
    [theme.breakpoints.up("md")]: {
      height: "90%",
      width: "80%",
      marginTop: 50,
      marginBottom: 50,
    },
    [theme.breakpoints.up("lg")]: {
      height: "80%",
      width: "80%",
      marginTop: 40,
      marginBottom: 40,
    },
  },
  tagline: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    [theme.breakpoints.up("xs")]: {
      height: "10%",
    },
    [theme.breakpoints.up("sm")]: {
      height: "10%",
    },
    [theme.breakpoints.up("md")]: {
      height: "20%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "20%",
    },
  },
  trendTitle: {
    fontWeight: "bold",
    marginBottom: 15,
    fontFamily: "Antonio",
    color: "black",
    textTransform: "uppercase",
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.8rem",
      letterSpacing: "0.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.8rem",
      letterSpacing: "0.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
      letterSpacing: "0.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "4.1rem",
      letterSpacing: "0.5rem",
    },
  },
  trendTagline: {
    color: "black",
    fontweight: "light",
    textTransform: "capitalize",
    fontFamily: "Antonio",
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.0rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5rem",
    },
  },
  //Carousel
  carousel: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
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
      height: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      height: "60%",
    },
  },
  carouselItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
      gigight: "1rem",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
      marginRight: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      marginRight: 0,
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      marginRight: 0,
    },
  },
  coinImage: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    [theme.breakpoints.up("xs")]: {
      width: 180,
      height: 180,
    },
    [theme.breakpoints.up("sm")]: {
      width: 250,
      height: 250,
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
      height: "35%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "auto",
      height: "40%",
    },
  },
  coinDetails: {
    display: "flex",
    flexDirection: "column",
    textTransform: "uppercase",
    color: "white",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 70,
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 0,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: 23,
      width: "60%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginTop: 0,
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: 15,
      width: "60%",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginTop: 0,
    },
  },
  coinHighlight: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    width: "100%",
  },
  coinInfo: {
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
    fontWeight: 500,
    fontFamily: "Antonio",
    color: "rgb(169, 170, 169)",
    [theme.breakpoints.up("xs")]: {
      fontSize: 30,
      letterSpacing: "1.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 40,
      letterSpacing: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 55,
      letterSpacing: "1.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 66,
      letterSpacing: "1.5rem",
    },
  },
  coinPrice: {
    fontWeight: 500,
    fontFamily: "Antonio",
    color: "black",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      fontSize: 30,
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      fontSize: 35,
    },
    [theme.breakpoints.up("md")]: {
      width: 250,
      fontSize: 48,
    },
    [theme.breakpoints.up("lg")]: {
      width: 250,
      fontSize: 48,
    },
  },
  coinChange: {
    fontWeight: 500,
    fontFamily: "Antonio",
    [theme.breakpoints.up("xs")]: {
      marginLeft: 25,
      fontSize: 30,
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: 25,
      fontSize: 35,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: 33,
      fontSize: 48,
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: 40,
      fontSize: 48,
    },
  },
  volTitle: {
    display: "flex",
    color: "rgb(169, 170, 169)",
    fontWeight: 500,
    fontFamily: "Antonio",
    [theme.breakpoints.up("xs")]: {
      fontSize: 22,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 25,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 25,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
    },
  },
  coinVol: {
    display: "flex",
    fontWeight: 500,
    fontFamily: "Antonio",
    color: "black",
    [theme.breakpoints.up("xs")]: {
      fontSize: 22,
      marginLeft: 0,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 25,
      marginLeft: 0,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 25,
      marginLeft: 139,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
      marginLeft: 130,
    },
  },
  capitalTitle: {
    display: "flex",
    color: "rgb(169, 170, 169)",
    fontWeight: 500,
    fontFamily: "Antonio",
    [theme.breakpoints.up("xs")]: {
      fontSize: 22,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 25,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 25,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
    },
  },
  capital: {
    display: "flex",
    fontWeight: 500,
    fontFamily: "Antonio",
    color: "black",
    [theme.breakpoints.up("xs")]: {
      fontSize: 22,
      marginLeft: 0,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 25,
      marginLeft: 0,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 25,
      marginLeft: 180,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
      marginLeft: 180,
    },
  },
}));

export { useStyles };
