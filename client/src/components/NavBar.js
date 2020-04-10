import React from "react";
import { Typography, makeStyles, Link } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

function NavBar() {
  const classes = useStyle();
  const preventDefault = (event) => {
    event.preventDefault();
    console.log("I'm a button.");
  };

  return (
    <Typography className={classes.root}>
      <Link component="button" variant="h5" onClick={preventDefault}>
        Home
      </Link>
      <br />
      <br />
      <Link component="button" variant="h5" onClick={preventDefault}>
        Log in
      </Link>
      <br />
      <br />
      <Link component="button" variant="h5" onClick={preventDefault}>
        Kids
      </Link>
      <br />
      <br />
      <Link component="button" variant="h5" onClick={preventDefault}>
        Curriculum
      </Link>
      <br />
      <br />
    </Typography>
  );
}

export default NavBar;
