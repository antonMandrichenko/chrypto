import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/react-testing";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";

const initialState = {};

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(
      <MockedProvider addTypename={false}>
        <Provider store={store}>{ui}</Provider>
      </MockedProvider>
    ),
    store
  };
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  renderWithRedux(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
