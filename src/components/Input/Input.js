import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2)
    }
  },
  input: {
    background: "#100e17",
    borderRadius: 4,
    border: "1px solid #201c29",
    color: theme.palette.text.inputText,
    fontSize: "0.95rem",
    position: "relative",
    padding: "10px 12px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      color: theme.palette.text.inputTextTyping,
      border: "2px solid #436afe"
    },
    "&:hover": {
      color: theme.palette.text.inputTextTyping
    }
  }
}))(InputBase);

const useStyles = makeStyles(() => ({
  error: {
    border: "2px solid #e3395d",
    borderRadius: 4
  }
}));

export default function AppInput(props) {
  const {
    name,
    type,
    handleChange,
    layout,
    isLoading,
    withError,
    onFocus
  } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <InputLabel htmlFor={`${name}-${layout}`}>
        {name.toUpperCase()}
      </InputLabel>
      <BootstrapInput
        id={`${name}-${layout}`}
        onChange={handleChange(`${name}-${layout}`)}
        disabled={isLoading}
        type={type}
        fullWidth
        className={withError ? classes.error : null}
        onFocus={onFocus}
      />
    </React.Fragment>
  );
}
