import { userActions } from "../../store/actions/auth.actions";

export const mapStateToProps = state => {
  return {
    // error: state.auth.authError,
    // auth: state.firebase.auth,
    // users: state.firestore.ordered.users
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginSuccess: data => dispatch(userActions.loginSuccess(ownProps, dispatch, data)),
    loginFailure: data => dispatch(userActions.loginFailure(ownProps, dispatch, data)),
    registrationSuccess: data =>
      dispatch(userActions.registrationSuccess(ownProps, data)),
    registrationFailure: err => dispatch(userActions.registrationFailure(err))
  };
};
