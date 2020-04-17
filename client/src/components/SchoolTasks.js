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

function SchoolTasks(props) {
  let kidId = props.kidId;
  const [kidSWArray, setKidSWArray] = useState([{}]);
  const [values, setValues] = useState({});
  const [newValue, setnewValue] = useState("");
  const [schoolWorkId, setschoolWorkId] = useState("");
  const classes = useStyles();
  let i = 1;

  useEffect(() => {
    console.log("this is school task page", props.kidName, kidId);
    API.getKidSchoolTask(kidId).then((res) => {
      setKidSWArray(res.data);
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
    });
  };

  const doneHandleCkick = (event) => {
    event.preventDefault();
    const taskId = event.target.id;
  };

  const deleteHandleCkick = (event) => {
    event.preventDefault();
    const taskId = event.target.id;
  };

  const rewardHandleCkick = (event) => {
    event.preventDefault();
    const kidId = event.target.id;
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
        <ul>
          {kidSWArray.map((swArray) => (
            <div>
              <li key={(i = i + 1)} value={swArray._id}>
                {swArray.task}
              </li>
              <button
                className="button taskBtn"
                id={swArray._id}
                onClick={doneHandleCkick}
              >
                Done
              </button>
              <button
                className="button taskBtn"
                id={swArray._id}
                onClick={deleteHandleCkick}
              >
                Delete
              </button>
              <button
                className="button taskBtn"
                id={kidId}
                onClick={rewardHandleCkick}
              >
                Reward
              </button>
              <hr />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SchoolTasks;
