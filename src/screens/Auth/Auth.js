import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppButton from "../../components/Button";
import AppInput from "../../components/Input";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const propTypes = {};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box pt={3} pb={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.background.default
  },
  paper: {
    width: "40vw",
    height: "auto",
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: "50vw"
    },
    [theme.breakpoints.down('xs')]: {
      width: "80vw"
    },
    [theme.breakpoints.up('lg')]: {
      width: "30vw"
    },
  },
  tabs: {
    backgroundColor: theme.palette.background.paper,
    width: "100%"
  }
}));

function Auth(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Paper className={classes.paper}>
        <div className={classes.tabs}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            variant="fullWidth"
          >
            <Tab label="LOGIN" {...a11yProps(0)} />
            <Tab label="REGISTER" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <form noValidate>
              <AppInput
                name="email"
                type="email"
                defaultValue="test@test.gmail"
              />
              <AppInput
                name="password"
                type="password"
                defaultValue="1234567"
              />
              <AppButton>Sign in</AppButton>
            </form>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <form noValidate>
              <AppInput
                name="email"
                type="email"
                defaultValue="test@test.gmail"
              />
              <AppInput name="phone no" type="phone" defaultValue="123-456-7" />
              <AppInput
                name="password"
                type="password"
                defaultValue="1234567"
              />
              <AppInput
                name="confirm password"
                type="password"
                defaultValue="1234567"
              />
              <AppButton>Register</AppButton>
            </form>
          </TabPanel>
        </div>
      </Paper>
    </Grid>
  );
}

Auth.propTypes = propTypes;

export default Auth;
