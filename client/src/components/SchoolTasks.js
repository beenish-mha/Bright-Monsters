import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import API from "../utils/Api";
const useStyles = makeStyles((theme) => ({
  root1: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
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

function SchoolTasks(props) {
  let kidId = props.kidId;
  const [kidSWArray, setKidSWArray] = useState([{}]);
  const [values, setValues] = useState({});
  const [newValue, setnewValue] = useState("");
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    console.log("this is school task page", props.kidName, kidId);
    API.getKidSchoolTask(kidId).then((res) => {
      setKidSWArray(res.data.reverse());
    });
  }, []);

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setnewValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API.saveSchoolWork({
      task: newValue,
      kidId: kidId,
    }).then((response) => {
      console.log("school Task saved  ", response.data);
      API.getKidSchoolTask(kidId).then((res) => {
        setKidSWArray(res.data.reverse());
      });
    });
  };

  const deleteHandleClick = (event) => {
    event.preventDefault();
    const taskId = event.target.id;
    API.deleteSchoolWork(taskId).then((response) => {
      console.log("school Task remove ", response.data);
      API.getKidSchoolTask(kidId).then((res) => {
        setKidSWArray(res.data.reverse());
      });
    });
  };

  return (
    <div>
      <h4>School Work</h4>
      <div>
        <form
          onSubmit={handleSubmit}
          className="form"
          noValidate
          autoComplete="off"
        >
          <TextField
            className={classes.root}
            id="outlined-basic"
            variant="outlined"
            value={values.name}
            name="schoolWork"
            onChange={handleChange}
          />
          <button className="btn">Add your school work</button>
        </form>
        <br />

        <List className={classes.root1}>
          {kidSWArray.map((swArray) => {
            const labelId = `checkbox-list-label-${swArray._id}`;

            return (
              <ListItem
                key={swArray._id}
                role={undefined}
                dense
                button
                onClick={handleToggle(swArray._id)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(swArray._id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={swArray.task} />
                <ListItemSecondaryAction>
                  <button id={swArray._id} onClick={deleteHandleClick}>
                    {/* <IconButton aria-label="delete"> */}
                    <DeleteIcon />
                    {/* </IconButton> */}
                  </button>
                  <IconButton edge="end" aria-label="comments"></IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}

export default SchoolTasks;
