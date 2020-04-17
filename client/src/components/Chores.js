import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import API from "../utils/Api";
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

function Chores(props) {
  let kidId = props.kidId;
  const [kidCArray, setKidCArray] = useState([{}]);
  const [values, setValues] = useState({});
  const [newValue, setnewValue] = useState("");
  const [choreId, setchoreId] = useState("");
  const classes = useStyles();
  let i = 1;

  useEffect(() => {
    console.log("this is chores page", props.kidName, kidId);
    API.getKidChore(kidId).then((res) => {
      setKidCArray(res.data);
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
    });
  };

  const doneHandleClick = (event) => {
    event.preventDefault();
    const choreId = event.target.id;
  };

  const deleteHandleClick = (event) => {
    event.preventDefault();
    const choreId = event.target.id;
    API.deleteChore(choreId).then((response) => {
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
        <ul>
          {kidCArray.map((cArray) => (
            <div key={(i = i + 1)}>
              <li value={cArray._id}>{cArray.chore}</li>
              <button
                className="button taskBtn"
                id={cArray._id}
                onClick={doneHandleClick}
              >
                Done
              </button>
              <button
                className="button taskBtn"
                id={cArray._id}
                onClick={deleteHandleClick}
              >
                Delete
              </button>
              <hr />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Chores;
