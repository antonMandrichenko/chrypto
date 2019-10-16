import { userConstants } from "../constants/auth.constants";

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        token: action.data.data.signUp.token,
        affiliateCode: action.data.data.signUp.user.affiliateCode,
        id: action.data.data.signUp.user.id,
        username: action.data.data.signUp.user.username
      };
    default:
      return state;
  }
}
