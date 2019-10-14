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
    login: (userName, password) =>
      dispatch(userActions.login(ownProps, dispatch, userName, password))
    // logout: userActions.logout
    // signInSubmit: (data) =>
    //   dispatch(signIn(ownProps, dispatch, data)),
    // getCurrentUser: (users, id) =>
    //   dispatch(getCurrentUser(users, id))
  };
};
