import React from "react";
import { Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import routes from "./routes";
import { theme } from "./theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        {routes.map(({ path, component, exact }) => (
          <Route key={path} path={path} component={component} exact={exact} />
        ))}
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;
