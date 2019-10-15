import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: theme.spacing(4),
    color: "#fff"
  }
}));

export default function AppInput(props) {
  const classes = useStyles();
  const { name, defaultValue, type, handleChange, layout } = props;

  return (
    <FormControl className={classes.root}>
      <TextField
        className={classes.margin}
        label={name.toUpperCase()}
        required
        id="validation-outlined-input"
        type={type}
        defaultValue={defaultValue}
        onChange={handleChange(`${name}-${layout}`)}
      />
    </FormControl>
  );
}
