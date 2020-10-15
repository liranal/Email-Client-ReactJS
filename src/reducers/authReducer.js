import {
  SIGN_IN,
  SIGN_OUT,
} from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: false,
  userId: null,
  userDetails: null,
  token: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.LoginResponse.userId,
        token: action.payload.LoginResponse.token,
        userDetails: {...action.payload.UserInfoResponse}
      };
    case SIGN_OUT:
      return {
        ...state,
        ...action.payload,
        token: null,
        userDetails: null,
      };
    default:
      return state;
  }
};
