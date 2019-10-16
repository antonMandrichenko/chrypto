import { fetchConstants } from "../constants/fetch.constants";

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

const noFetch = () => dispatch => {
  dispatch({ type: fetchConstants.NO_FETCH });
};

export const fetchActions = {
  fetchBegin,
  fetchSuccess,
  fetchFailure,
  noResponse,
  noFetch
};
