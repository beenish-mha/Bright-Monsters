import React from "react";

import NavBar from "./NavBar";
import { makeStyles, Paper, Grid, Button, TextField } from "@material-ui/core";

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
            <Button variant="contained">Log In</Button>
            <Button variant="contained">Sign In</Button>
          </Paper>
          <Paper className={classes.paper}>
            <h6>Sign In</h6>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  required
                  id="standard-required"
                  label="E-Mail"
                  defaultValue=""
                />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginSignin;
