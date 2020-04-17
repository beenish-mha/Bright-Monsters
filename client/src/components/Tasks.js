import React, { useState } from "react";
import SchoolTasks from "./SchoolTasks";
import Chores from "./Chores";

import NavBar from "./NavBar";
import { makeStyles, Paper, Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
  btn: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

function Tasks(props) {
  const child = props.location.aboutProps;
  const userEmail = child.email;
  const kidId = child.kidId;
  const classes = useStyle();
  const [btnName, setbtnName] = useState("default");

  //console.log(child.name, kidId);

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
            <h5> {child.name}!</h5>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>
                  <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem
                      button
                      variant="contained"
                      className={classes.btn}
                      name="schoolWork"
                      onClick={() => setbtnName("schoolWork")}
                    >
                      <ListItemText primary="School Work" />
                    </ListItem>
                  </List>

                  <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem
                      button
                      variant="contained"
                      className={classes.btn}
                      name="chores"
                      onClick={() => setbtnName("chores")}
                    >
                      <ListItemText primary="Chores" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={9}>
                <Paper className={classes.paper}>
                  {btnName === "schoolWork" && (
                    <SchoolTasks kidName={child.name} kidId={kidId} />
                  )}
                  {btnName === "chores" && (
                    <Chores
                      kidName={child.name}
                      kidId={kidId}
                      email={userEmail}
                      history={props.history}
                    />
                  )}

                  {btnName === "default" && (
                    <SchoolTasks kidName={child.name} kidId={kidId} />
                  )}
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
