import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles({
  root: {
    background: "linear-gradient(131deg, #da1b60 0%, #ff8a00 100%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    width: "100%",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

export default function AppButton(props) {
  return (
    <StyledButton type="submit">{props.children.toUpperCase()}</StyledButton>
  );
}
