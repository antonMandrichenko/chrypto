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
        isLoading: false,
        error: ""
      };
    case fetchConstants.FETCH_FAILURE:
      return {
        isLoading: false,
        error: action.error
      };
    case fetchConstants.NO_RESPONSE:
      return {
        isLoading: false,
        error: "No response from server"
      };
      case fetchConstants.NO_FETCH:
        return {
          isLoading: false,
          error: ""
        }
    default:
      return state;
  }
};
