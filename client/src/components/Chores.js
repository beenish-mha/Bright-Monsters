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

function Chores(props) {
  let kidId = props.kidId;

  const [kidCArray, setKidCArray] = useState([{}]);
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
    console.log("this is chores page", props.kidName, kidId);
    API.getKidChore(kidId).then((res) => {
      setKidCArray(res.data.reverse());
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
    API.saveChore({
      chore: newValue,
      kidId: kidId,
    }).then((response) => {
      console.log("Chore saved  ", response.data);
      API.getKidChore(kidId).then((res) => {
        console.log('I am the res data:" ', res.data);
        setKidCArray(res.data.reverse());
        setnewValue("");
      });
    });
  };

  const deleteHandleClick = (event) => {
    event.preventDefault();
    const choreId = event.target.id;
    API.deleteChore(choreId).then((response) => {
      API.getKidChore(kidId).then((res) => {
        console.log('I am the res data:" ', res.data);
        setKidCArray(res.data.reverse());
        setnewValue("");
      });
      console.log("chore remove ", response.data);
    });
  };

  return (
    <div>
      <h4>Chores</h4>
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
            name="chore"
            onChange={handleChange}
          />
          <button className="btn">Add Chores</button>
        </form>
        <br />
        <List className={classes.root1}>
          {kidCArray.map((cArray) => {
            const labelId = `checkbox-list-label-${cArray._id}`;
            return (
              <ListItem
                key={cArray._id}
                role={undefined}
                dense
                button
                onClick={handleToggle(cArray._id)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(cArray._id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={cArray.chore} />
                <ListItemSecondaryAction>
                  <button id={cArray._id} onClick={deleteHandleClick}>
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

export default Chores;
