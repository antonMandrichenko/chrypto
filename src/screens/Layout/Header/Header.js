import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  photo: {
    marginRight: theme.spacing(26)
  },
  appBar: {
    minHeight: theme.spacing(10),
    backgroundColor: theme.palette.background.paper
  },
  title: {
    flexGrow: 1
  },
  button: {
    fontSize: "1.27rem",
    marginRight: theme.spacing(1)
  }
}));

const menuItems = ["Fairness", "Community", "Withdraw", "Faucet", "More"];

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <Typography variant="h6" className={classes.photo}>
            Photo
          </Typography>
          {menuItems.map((item, idx) => (
            <React.Fragment key={item}>
              <Button color="inherit" className={classes.button}>
                {item}
              </Button>
              {idx === 1 && <div className={classes.title} />}
            </React.Fragment>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
