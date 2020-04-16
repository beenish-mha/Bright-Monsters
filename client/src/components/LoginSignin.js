import React, { useState } from "react";

import NavBar from "./NavBar";
import { makeStyles, Paper, Grid, Button, TextField } from "@material-ui/core";
import SignIn from "./SignIn";
import LogIn from "./LogIn";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    //backgroundImage: "url(${client/public/assets/h2backgtound.jfif})",
  },
  btn: {
    margin: theme.spacing(1),
  },
}));

function LoginSignin(props) {
  const classes = useStyle();

  const [btnName, setbtnName] = useState("default");

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2>Bright Monsters!</h2>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <NavBar />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={9}>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              className={classes.btn}
              name="logIn"
              onClick={() => setbtnName("logIn")}
            >
              Log In
            </Button>
            <Button
              variant="contained"
              className={classes.btn}
              name="signIn"
              onClick={() => setbtnName("signIn")}
            >
              Sign In
            </Button>
          </Paper>
          <Paper className={classes.paper}>
            {btnName === "signIn" && <SignIn history={props.history} />}
            {btnName === "logIn" && <LogIn history={props.history} />}
            {btnName === "default" && <LogIn history={props.history} />}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginSignin;
