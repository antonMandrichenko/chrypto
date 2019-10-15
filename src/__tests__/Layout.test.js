import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Layout from "../screens/Layout";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../store/reducers";
import { MockedProvider } from "@apollo/react-testing";
import { MemoryRouter } from "react-router-dom";

const initialState = {};

function renderWithReduxApollo(
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

it("loads and displays Layout", async () => {
  const { asFragment } = renderWithReduxApollo(
    <MemoryRouter>
      <Layout name="Buck" />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});