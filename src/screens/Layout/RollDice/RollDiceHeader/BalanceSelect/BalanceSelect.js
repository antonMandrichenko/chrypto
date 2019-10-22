import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import coin from "../../../../../static/icons/coin.svg";
import SelectCategory from "./SelectCategory";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  image: {
      height: 30
  },
  item: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3} className={classes.item}>
          <img src={coin} alt="Bitcoin" className={classes.image}/>
        </Grid>
        <Grid item xs={9}>
          <SelectCategory />
        </Grid>
      </Grid>
    </div>
  );
}
