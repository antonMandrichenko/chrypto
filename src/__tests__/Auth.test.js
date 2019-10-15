import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Auth from "../screens/Auth";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../store/reducers";
import { MockedProvider } from "@apollo/react-testing";
import { MemoryRouter } from "react-router-dom";
import { SIGN_UP } from "../screens/Auth/graphql";

const initialState = {};

const mocks = [
  {
    request: {
      query: SIGN_UP,
      variables: {
        name: "Buck"
      }
    },
    result: {
      data: {
        dog: { id: "1", name: "Buck", breed: "bulldog" }
      }
    }
  }
];

function renderWithReduxApollo(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>{ui}</Provider>
      </MockedProvider>
    ),
    store
  };
}

it("loads and displays auth form", async () => {
  const { asFragment } = renderWithReduxApollo(
    <MemoryRouter>
      <Auth name="Buck" />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
