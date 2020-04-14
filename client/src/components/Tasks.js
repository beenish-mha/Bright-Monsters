import React, { useState } from "react";
import SchoolTasks from "./SchoolTasks";
import Chores from "./Chores";
import Rewards from "./Rewards";
import NavBar from "./NavBar";
import { makeStyles, Paper, Grid, Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    //backgroundImage: "url(${client/public/assets/h2backgtound.jfif})",
  },
}));

function Tasks(props) {
  const child = props.location.aboutProps;
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
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <NavBar />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={10}>
          <Paper className={classes.paper}>
            <h5>{child.name}</h5>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>
                  <ul>
                    <li>
                      <Button
                        variant="contained"
                        className="btn"
                        name="schoolWork"
                        onClick={() => setbtnName("schoolWork")}
                      >
                        School Work
                      </Button>
                      <br />
                    </li>
                    <li>
                      <Button
                        variant="contained"
                        className="btn"
                        name="schoresk"
                        onClick={() => setbtnName("chores")}
                      >
                        Chores
                      </Button>
                      <br />
                    </li>
                    <li>
                      <Button
                        variant="contained"
                        className="btn"
                        name="rewards"
                        onClick={() => setbtnName("rewards")}
                      >
                        Rewards
                      </Button>
                    </li>
                  </ul>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={9}>
                <Paper className={classes.paper}>
                  {btnName === "schoolWork" && <SchoolTasks />}
                  {btnName === "chores" && <Chores />}
                  {btnName === "rewards" && <Rewards />}
                  {btnName === "default" && <SchoolTasks />}
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Tasks;
