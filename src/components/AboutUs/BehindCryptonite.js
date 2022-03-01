import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  behindContainer: {
    width: "85%",
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  behindContent: {
    width: "95%",
    padding: "25px 25px 25px 200px",
    marginTop: 50,
    marginRight: 15,
    marginBottom: 50,
    [theme.breakpoints.down("sm")]: {
      padding: 50,
      margin: 0,
    },
  },
  behindTitle: {
    fontWeight: 550,
    fontSize: 30,
    fontFamily: "Antonio",
    color: "#000",
    letterSpacing: 2,
    width: "100%",
  },
  behindText: {
    fontSize: 15,
    fontFamily: "Antonio",
    color: "#000",
    paddingTop: 20,
    width: "100%",
  },
  firstPotrait: {
    width: "100%",
    display: "flex",
    margin: "25px 0px 25px 0px",
    padding: 0,
    color: "#000",
  },
  potrait1: {
    // display: "block",
    width: "30%",
    margin: 0,
  },
  potrait2: {
    // display: "block",
    width: "100%",
    margin: 0,
  },
  otherPotraits: {
    display: "inline-flex",
    width: "100%",
    margin: "25px 0px 25px 0px",
    padding: 0,
    justifyContent: "space-between",
  },
  otherPotrait: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    margin: 0,
    marginRight: 5,
  },
  member1: {
    color: "#174f1a",
    margin: 0,
    fontSize: 25,
    fontFamily: "Antonio",
    fontWeight: 550,
    letterSpacing: 2,
  },
  member1Text: {
    marginLeft: 50,
    padding: 0,
  },
  otherMember: {
    color: "#5c5c5c",
    margin: 0,
    fontSize: 15,
    fontFamily: "Antonio",
  },
  decorativeLine: {
    width: "100%",
    backgroundColor: "#000",
    opacity: "25%",
    height: 1.5,
  },
}));

const BehindCryptonite = () => {
  const classes = useStyles();
  const memberPic =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mona_Lisa-restored.jpg/1200px-Mona_Lisa-restored.jpg";
  return (
    <div className={classes.behindContainer}>
      <div className={classes.behindContent}>
        <Typography className={classes.behindTitle}>
          BEHIND CRYPTONITE
        </Typography>
        <Typography className={classes.behindText}>
          Meet the team behind Cryptonite. Launching and maintaining a website
          is not easy - especially only with five developers - they call
          themselves team OnlyFive!
        </Typography>
        <div className={classes.firstPotrait}>
          <img src={memberPic} alt="member" className={classes.potrait1} />
          <div className={classes.member1Text}>
            <Typography className={classes.member1}>Thisyahlen Nair</Typography>
            <Typography className={classes.otherMember}>
              Team Representative
            </Typography>
          </div>
        </div>
        <div className={classes.decorativeLine}></div>
        <div className={classes.otherPotraits}>
          <div className={classes.otherPotrait}>
            <img src={memberPic} alt="member" className={classes.potrait2} />
            <Typography className={classes.otherMember}>Zawir</Typography>
          </div>
          <div className={classes.otherPotrait}>
            <img src={memberPic} alt="member" className={classes.potrait2} />
            <Typography className={classes.otherMember}>
              Tatianna Cheah
            </Typography>
          </div>
          <div className={classes.otherPotrait}>
            <img src={memberPic} alt="member" className={classes.potrait2} />
            <Typography className={classes.otherMember}>
              Amirul Hazwan
            </Typography>
          </div>
          <div className={classes.otherPotrait}>
            <img src={memberPic} alt="member" className={classes.potrait2} />
            <Typography className={classes.otherMember}>Haley Gan</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehindCryptonite;
