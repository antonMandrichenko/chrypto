import { fetchConstants } from "../constants/fetch.constants";

const initialState = {
  isLoading: false,
  error: ""
};

export const fetch = (state = initialState, action) => {
  switch (action.type) {
    case fetchConstants.FETCH_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case fetchConstants.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: ""
      };
    case fetchConstants.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case fetchConstants.NO_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: "No response from server"
      };
    default:
      return state;
  }
};
