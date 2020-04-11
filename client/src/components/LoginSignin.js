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
}));

function LoginSignin() {
  const classes = useStyle();

  const [btnName, setbtnName] = useState("");
  const [btncheck, setbtncheck] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setbtnName(e.target.name);
  };
  console.log(btnName);

  if (btnName === "signIn") {
    setbtncheck(true);
  }

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
            <button className="btn" name="logIn" onClick={handleClick}>
              Log In
            </button>
            <button className="btn" name="signIn" onClick={handleClick}>
              Sign In
            </button>
          </Paper>
          <Paper className={classes.paper}>
            {btncheck ? (
              <div>
                <SignIn />
              </div>
            ) : (
              <div>
                <LogIn />
              </div>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginSignin;
