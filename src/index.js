import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers";
import reduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

const client = new ApolloClient({
  uri: "https://justogaming-backend.herokuapp.com/graphql"
});

const AppStore = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter basename={"/"}>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
);

ReactDOM.render(<AppStore />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
