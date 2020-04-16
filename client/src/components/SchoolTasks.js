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
  useEffect(() => {
    console.log("this is school task page", props.kidName, kidId);
    API.getKidSchoolTask(kidId).then((res) => {
      // console.log(res.data[0].task);
      setKidSWArray(res.data);
    });
  }, []);
  console.log("this is useState", kidSWArray[0].task);
  const classes = useStyles();
  let i = 1;
  return (
    <div>
      <h4>School Work</h4>
      <div>
        <form>
          <TextField
            className={classes.root}
            id="outlined-basic"
            variant="outlined"
          />
          <Button>Add your school work</Button>
        </form>
        <br />
        <ul>
          {kidSWArray.map((swArray) => (
            <li key={(i = i + 1)}>{swArray.task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SchoolTasks;
