import { fetchConstants } from "../constants/fetch.constants";

export const fetchActions = {
  fetchBegin,
  fetchSuccess,
  fetchFailure,
  noResponse
};

const fetchBegin = () => dispatch => {
  dispatch({ type: fetchConstants.FETCH_BEGIN });
};

const fetchSuccess = () => dispatch => {
  dispatch({ type: fetchConstants.FETCH_SUCCESS });
};

const fetchFailure = error => dispatch => {
  dispatch({ type: fetchConstants.FETCH_FAILURE, error });
};

const noResponse = () => dispatch => {
    dispatch({ type: fetchConstants.NO_RESPONSE });
  };

