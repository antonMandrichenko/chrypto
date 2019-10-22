import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import LoadCircularProgress from "../CircularProgress";

const StyledButton = withStyles({
  root: {
    background: "#f5a523",
    borderRadius: 6,
    color: "white",
    height: 46,
    width: 130,
    fontSize: "1.3rem",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    "&:hover": {
      background: "#aa6e0c"
    }
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

export default function DepositButton(props) {
  const classes = useStyles();
  const { isLoading } = props;
  return (
    <StyledButton type="submit" disabled={isLoading}>
      {/* {isLoading ? ( */}
      {/* // <LoadCircularProgress className={classes.buttonProgress} size={24} /> */}
      {/* //   ) : ( */}
      Deposit
      {/* )} */}
    </StyledButton>
  );
}
