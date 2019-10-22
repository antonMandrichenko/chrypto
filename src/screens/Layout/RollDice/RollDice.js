import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import RollDiceHeader from "./RollDiceHeader"

const useStyles = makeStyles(theme => ({
  root: {
    height: 513,
    backgroundColor: theme.palette.background.default,
    overflow: "hidden"
  },
  rootAbsolute: {
    left: 0,
    right: 0,
    position: "absolute"
  },
  paper: {
    position: "absolute",
    top: 67,
    height: 588,
    left: 0,
    right: 0,
    margin: "auto",
    width: "67%",
    backgroundColor: theme.palette.background.paper,
    border: theme.palette.background.borderPaper,
    padding: theme.spacing(4)
  }
}));

export default function RollDice() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.rootAbsolute}>
        <Paper className={classes.paper}>
          <RollDiceHeader />
        </Paper>
      </div>
    </div>
  );
}
