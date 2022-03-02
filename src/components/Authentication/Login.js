import React from "react";
import { useState } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { CryptoState } from "../../CryptoContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Classnames } from "react-alice-carousel";

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAlert } = CryptoState();
  const handleSubmit = async () => {
    if (!email || !password) {
      setAlert({
        open: true,
        message: "Please fill in all the fields",
        type: "error",
      });
      return;
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setAlert({
        open: true,
        message: `Login Successful. Welcome ${result.user.email}`,
        type: "success",
      });
      handleClose();
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      return;
    }
  };
  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        // color: "black",
        // backgroundColor: "yellow",
      }}
    >
      {/* Email text field */}
      <TextField
        variant="filled"
        type="email"
        label="Enter Email"
        value={email}
        style={{ fontFamily: "antonio" }}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        InputLabelProps={{
          style: {
            color: "black",
            fontFamily: "antonio",
            // backgroundColor: "beige",
            padding: "0px 20px",
          },
        }}
        style={{
          fontFamily: "antonio",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 4px 2px #aaa",
          borderRadius: 40,
          padding: "0px 25px",
        }}
        InputProps={{
          style: {
            color: "black",
            fontFamily: "antonio",
          },
        }}
      ></TextField>
      {/* Password text field */}
      <TextField
        className="classes.textField"
        variant="filled"
        type="password"
        label="Enter Your Password"
        value={password}
        color="primary"
        // borderRadius="30"
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        InputLabelProps={{
          style: {
            color: "black",
            fontFamily: "antonio",
            // backgroundColor: "beige",
            padding: "0px 20px",
          },
        }}
        style={{
          fontFamily: "antonio",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 4px 2px #aaa",
          borderRadius: 40,
          padding: "0px 25px",
        }}
        InputProps={{
          style: {
            color: "black",
            fontFamily: "antonio",
          },
        }}
      ></TextField>
      {/*  Login button */}
      <Button
        variant="contained"
        size="large"
        style={{
          backgroundColor: "#174f1a",
          color: "white",
          fontSize: 20,
          fontWeight: 600,
          fontFamily: "antonio",
          borderRadius: 30,
          boxShadow: "0px 4px 4px 2px #aaa",
        }}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
