import React from "react";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "#201c29",
      borderWidth: 2
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important" // override inline-style
    }
  }
})(TextField);

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
  const { name, defaultValue, type } = props;

  return (
    <FormControl className={classes.root}>
      <ValidationTextField
        className={classes.margin}
        label={name.toUpperCase()}
        required
        variant="outlined"
        id="validation-outlined-input"
        type={type}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
}
