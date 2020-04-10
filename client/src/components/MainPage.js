import React from "react";
import AboutUs from "./AboutUs";
import NavBar from "./NavBar";
import { Container, makeStyles, Paper, Grid } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  containerStyle: {
    backgroundColor: "lightblue",
  },
}));

function Mainpage() {
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
            <AboutUs />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );

  // return (
  //   <Container className={classes.containerStyle} maxWidth="lg">
  //     {" "}
  //     <NavBar />
  //     <AboutUs />
  //   </Container>
  // );
}

export default Mainpage;
