import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80ch",
    },
  },
  btnRoot: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function SchoolTasks() {
  const classes = useStyles();
  return (
    <div>
      <p>school tasks will go here</p>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" variant="outlined" />
        <div className={classes.btnRoot}>
          <Button variant="contained">Add</Button>
          <Button variant="contained">Delete</Button>
          <Button variant="contained">Get Reward</Button>
        </div>

        <TextField id="outlined-basic" variant="outlined" />
        <div className={classes.btnRoot}>
          <Button variant="contained">Add</Button>
          <Button variant="contained">Delete</Button>
          <Button variant="contained">Get Reward</Button>
        </div>
        <TextField id="outlined-basic" variant="outlined" />
        <div className={classes.btnRoot}>
          <Button variant="contained">Add</Button>
          <Button variant="contained">Delete</Button>
          <Button variant="contained">Get Reward</Button>
        </div>
        <TextField id="outlined-basic" variant="outlined" />
        <div className={classes.btnRoot}>
          <Button variant="contained">Add</Button>
          <Button variant="contained">Delete</Button>
          <Button variant="contained">Get Reward</Button>
        </div>
        <TextField id="outlined-basic" variant="outlined" />
        <div className={classes.btnRoot}>
          <Button variant="contained">Add</Button>
          <Button variant="contained">Delete</Button>
          <Button variant="contained">Get Reward</Button>
        </div>
      </form>
    </div>
  );
}

export default SchoolTasks;