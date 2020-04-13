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
      <div>
        <form>
          <TextField
            className={classes.root}
            id="outlined-basic"
            variant="outlined"
          />
          <div className={classes.btnRoot}>
            <Button variant="contained">Add</Button>
            <Button variant="contained">Delete</Button>
            <Button variant="contained">Get Reward</Button>
          </div>
        </form>

        <form>
          <TextField
            className={classes.root}
            id="outlined-basic"
            variant="outlined"
          />
          <div className={classes.btnRoot}>
            <Button variant="contained">Add</Button>
            <Button variant="contained">Delete</Button>
            <Button variant="contained">Get Reward</Button>
          </div>
        </form>
        <form>
          <TextField
            className={classes.root}
            id="outlined-basic"
            variant="outlined"
          />
          <div className={classes.btnRoot}>
            <Button variant="contained">Add</Button>
            <Button variant="contained">Delete</Button>
            <Button variant="contained">Get Reward</Button>
          </div>
        </form>
        <form>
          <TextField
            className={classes.root}
            id="outlined-basic"
            variant="outlined"
          />
          <div className={classes.btnRoot}>
            <Button variant="contained">Add</Button>
            <Button variant="contained">Delete</Button>
            <Button variant="contained">Get Reward</Button>
          </div>
        </form>
        <form>
          <TextField
            className={classes.root}
            id="outlined-basic"
            variant="outlined"
          />
          <div className={classes.btnRoot}>
            <Button variant="contained">Add</Button>
            <Button variant="contained">Delete</Button>
            <Button variant="contained">Get Reward</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SchoolTasks;
