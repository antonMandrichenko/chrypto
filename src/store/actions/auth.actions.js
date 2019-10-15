import { userConstants } from "../constants/auth.constants";

export const userActions = {
  loginSuccess,
  loginFailure,
  registrationSuccess,
  registrationFailure
};

function loginSuccess(props, dispatch, data) {
  localStorage.setItem("loginData", JSON.stringify(data));
  return () => {
    dispatch({ type: userConstants.LOGIN_SUCCESS, data });
    props.history.push("/");
  };
}

function loginFailure(err) {
  return dispatch => {
    dispatch({ type: userConstants.LOGIN_FAILURE, err });
  };
}

function registrationSuccess(props, data) {
  return dispatch => {
    localStorage.setItem("cryptoToken", JSON.stringify(data.data.signUp.token));
    localStorage.setItem("cryptoAffiliateCode", JSON.stringify(data.data.signUp.user.affiliateCode));
    localStorage.setItem("cryptoId", JSON.stringify(data.data.signUp.user.id));
    localStorage.setItem("cryptoUsername", JSON.stringify(data.data.signUp.user.username));
    dispatch({ type: userConstants.REGISTER_SUCCESS, data });
    props.history.push("/");
  };
}

function registrationFailure(err) {
  return dispatch => {
    dispatch({ type: userConstants.REGISTER_FAILURE, err });
  };
}
