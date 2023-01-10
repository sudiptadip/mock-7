import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./Action_Type";

const login_data = {
  userData: {},
  token: "",
  isAuth: false,
  isLooding: false,
  isError: false,
};

export default function Auth_Reducer(state = login_data, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLooding: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLooding: false,
        token: payload.token,
        isAuth: true,
        userData: payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLooding: false,
        isError: true,
      };
    case LOGOUT:
      return {
        userData: {},
        token: "",
        isAuth: false,
        isLooding: false,
        isError: false,
      };
    default:
      return state;
  }
}
