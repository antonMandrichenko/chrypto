import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 18,
    color: "#fff"
  }
}));

export default function AppInput(props) {
  const classes = useStyles();
  const { name, type, handleChange, layout, isLoading } = props;

  return (
    <div className="form-group">
      <label htmlFor={`${name}-${layout}`} className="mylabel">
        {name.toUpperCase()}
      </label>
      <input
        type={type}
        className="form-control form-control-lg myinputclass"
        id={`${name}-${layout}`}
        onChange={handleChange(`${name}-${layout}`)}
        disabled={isLoading}
      />
    </div>
  );
}
