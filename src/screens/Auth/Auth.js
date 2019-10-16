import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppButton from "../../components/Button";
import AppInput from "../../components/Input";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./redux";
import { SIGN_UP, LOGIN } from "./graphql";
import { useMutation } from "@apollo/react-hooks";

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
      <Box pt={3} pb={3}>
        {children}
      </Box>
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
    padding: theme.spacing(4),
    borderRadius: 10,
    border: "1px solid #2b3044",
    [theme.breakpoints.down("sm")]: {
      width: "50vw"
    },
    [theme.breakpoints.down("xs")]: {
      width: "80vw"
    },
    [theme.breakpoints.up("lg")]: {
      width: "30vw"
    }
  },
  colorSecondary: {
    background: "linear-gradient(131deg, #da1b60 0%, #ff8a00 100%)"
  },
  tabs: {
    backgroundColor: theme.palette.background.paper,
    width: "100%"
  },
  "Mui-selected": {
    color: "#fff !important"
  }
}));

function Auth(props) {
  const {
    loginSuccess,
    registrationSuccess,
    registrationFailure,
    loginFailure,
    fetchBegin,
    fetchSuccess,
    fetchFailure,
    noResponse,
    isLoading,
    errorLoading
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [inputValues, setInputValues] = React.useState({
    "email-login": "",
    "password-login": "",
    "email-register": "",
    "phone-register": "",
    "password-register": "",
    "confirm password-register": ""
  });

  const [signUp] = useMutation(SIGN_UP);
  const [login] = useMutation(LOGIN);

  const handleChange = name => event => {
    console.log(name, event.target.value);
    setInputValues({ ...inputValues, [name]: event.target.value });
  };

  const handleChangeValue = (event, newValue) => {
    setValue(newValue);
  };

  const signIn = async e => {
    e.preventDefault();
    fetchBegin();
    const loginData = await login({
      variables: {
        username: inputValues["email-login"],
        password: inputValues["password-login"].toString()
      }
    });
    if (!loginData) {
      noResponse();
    } else {
      if (loginData.errors) {
        fetchFailure(loginData.errors[0].massage);
      } else {
        fetchSuccess();
        loginSuccess(loginData);
      }
    }
  };

  const register = async e => {
    e.preventDefault();
    console.log(inputValues);
    const registerData = await signUp({
      variables: {
        username: inputValues["email-register"],
        password: inputValues["password-register"]
      }
    });
    if (registerData.errors) {
      registrationFailure(registerData.errors[0].massage);
    } else {
      registrationSuccess(registerData);
    }
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Paper className={classes.paper}>
        <h6
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 15
          }}
        >
          SETTINGS
        </h6>
        <div className={classes.tabs}>
          <Tabs
            value={value}
            onChange={handleChangeValue}
            textColor="secondary"
            variant="fullWidth"
            
          >
            <Tab
              label="LOGIN"
              {...a11yProps(0)}
              className={classes["Mui-selected"]}
              disabled={isLoading}
            />
            <Tab
              label="REGISTER"
              {...a11yProps(1)}
              className={classes["Mui-selected"]}
              disabled={isLoading}
            />
          </Tabs>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <form noValidate onSubmit={signIn}>
              <AppInput
                name="email"
                type="email"
                handleChange={handleChange}
                layout="login"
                isLoading={isLoading}
              />
              <AppInput
                name="password"
                type="password"
                handleChange={handleChange}
                layout="login"
                isLoading={isLoading}
              />
              <AppButton isLoading={isLoading}>Sign in</AppButton>
            </form>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <form noValidate onSubmit={register}>
              <AppInput
                name="email"
                type="email"
                handleChange={handleChange}
                layout="register"
                isLoading={isLoading}
              />
              <AppInput
                name="phone no"
                type="phone"
                handleChange={handleChange}
                layout="register"
                isLoading={isLoading}
              />
              <AppInput
                name="password"
                type="password"
                handleChange={handleChange}
                layout="register"
                isLoading={isLoading}
              />
              <AppInput
                name="confirm password"
                type="password"
                handleChange={handleChange}
                layout="register"
                isLoading={isLoading}
              />
              <AppButton isLoading={isLoading}>Register</AppButton>
            </form>
          </TabPanel>
          <h6
            className="text-center"
            style={{
              textAlign: "center",
              color: "#737375",
              fontSize: 14,
              fontFamily: "FuturaPTDemi",
              marginTop: 18,
              marginBottom: 0
            }}
          >
            Forgot Password
          </h6>
        </div>
      </Paper>
    </Grid>
  );
}

Auth.propTypes = propTypes;

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Auth);
