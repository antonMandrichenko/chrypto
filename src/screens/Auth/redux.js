import { userActions } from "../../store/actions/auth.actions";
import { fetchActions } from "../../store/actions/fetch.actions";

export const mapStateToProps = state => {
  return {
    isLoading: state.fetch.isLoading,
    errorLoading: state.fetch.error
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginSuccess: data =>
      dispatch(userActions.loginSuccess(ownProps, dispatch, data)),
    loginFailure: data =>
      dispatch(userActions.loginFailure(ownProps, dispatch, data)),
    registrationSuccess: data =>
      dispatch(userActions.registrationSuccess(ownProps, data)),
    registrationFailure: err => dispatch(userActions.registrationFailure(err)),
    fetchBegin: () => dispatch(fetchActions.fetchBegin()),
    fetchSuccess: () => dispatch(fetchActions.fetchSuccess()),
    fetchFailure: err => dispatch(fetchActions.fetchFailure(err)),
    noResponse: () => dispatch(fetchActions.noResponse()),
    noFetch: () => dispatch(fetchActions.noFetch())
  };
};
