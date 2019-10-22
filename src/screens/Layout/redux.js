// import { userActions } from "../../store/actions/auth.actions";

export const mapStateToProps = state => {
  return {
    id: state.registration.id || state.authentication.id,
  };
};
