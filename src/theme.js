import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    common: {
      black: "#100e17",
      white: "#fff"
    },
    background: {
      paper: "#17141d",
      default: "#030304"
    },
    primary: {
      light: "#79CBA0",
      main: "#030304",
      dark: "#e3395d",
      contrastText: "#fff"
    },
    secondary: {
      light: "#57CC8F",
      main: "#e3395d",
      dark: "#366438",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#e57373",
      contrastText: "#fff"
    },
    text: {
      primary: "#fff",
      secondary: "rgb(162, 161, 164)",
      disabled: "rgb(162, 161, 164)",
      hint: "rgb(162, 161, 164)",
      inputText: "rgba(255, 255, 255, 0.6)",
      inputTextTyping: "rgba(255, 255, 255, 1)",
      inputTextDisabled: "rgba(255, 255, 255, 0.4)",
    }
  },
  overrides: {
    MuiFormLabel: {
      root: {
        marginBottom: 0,
        fontSize: "0.8rem"
      }
    },
    Mui: {
      "root": {
        "&$disabled": {
          "opacity": 0.4
        }
      }
    }
  }
});
