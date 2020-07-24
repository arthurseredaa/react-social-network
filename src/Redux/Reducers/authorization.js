import * as types from "../Types/authorization";
import { authAPI } from "../../api/api";
import {
  setAuthData,
  setLoading,
  setLogoutData,
  setErrorText,
} from "../Actions/authorization";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  isLoading: false,
  errorText: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case types.SET_LOGIN_DATA:
      return {
        ...state,
        email: action.data.email,
        id: action.userId,
        isAuth: true,
      };
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case types.SET_LOGOUT_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case types.SET_ERROR_TEXT:
      return {
        ...state,
        errorText: action.errorText,
      };
    default:
      return state;
  }
};

export const userAuthorization = () => async (dispatch) => {
  let response = await authAPI.me();

  if (response.resultCode === 0) {
    let { id, login, email } = response.data;
    dispatch(setAuthData(id, email, login));
  } else {
    dispatch(setLogoutData());
  }
};

export const userLogin = (data) => async (dispatch) => {
  dispatch(setLoading(true));

  let response = await authAPI.login(data);

  if (response.data.resultCode === 0) {
    dispatch(userAuthorization());
    dispatch(setLoading(false));
  } else {
    dispatch(setErrorText(response.data.messages[0]));
    dispatch(setLoading(false));
  }
};

export const userLogout = () => async (dispatch) => {
  dispatch(setLoading(true));

  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setLoading(false));
    dispatch(setLogoutData());
  }
};
