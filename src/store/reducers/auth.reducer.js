import { userConstants } from "../constants/auth.constants";

const initialState = {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.data.data.login.token,
        affiliateCode: action.data.data.login.user.affiliateCode,
        id: action.data.data.login.user.id,
        username: action.data.data.login.user.username
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
