import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LoadCircularProgress from "../CircularProgress";

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles({
  root: {
    background: "linear-gradient(131deg, #da1b60 0%, #ff8a00 100%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    width: "100%",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

const useStyles = makeStyles(() => ({
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
}));

export default function AppButton(props) {
  const classes = useStyles();
  const { isLoading } = props;
  return (
    <StyledButton type="submit" disabled={isLoading}>
      {isLoading ? (
        <LoadCircularProgress className={classes.buttonProgress} size={24} />
      ) : (
        props.children.toUpperCase()
      )}
    </StyledButton>
  );
}
