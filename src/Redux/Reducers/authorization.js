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

export const userAuthorization = () => (dispatch) => {
  authAPI
    .me()
    .then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthData(id, email, login));
      } else {
        dispatch(setLogoutData());
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export const userLogin = (data) => (dispatch) => {
  dispatch(setLoading(true));
  authAPI.login(data).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(userAuthorization());
      dispatch(setLoading(false));
    } else if (response.data.resultCode === 1) {
      dispatch(setErrorText(response.data.messages[0]));
      dispatch(setLoading(false));
    }
  });
};

export const userLogout = () => (dispatch) => {
  dispatch(setLoading(true));
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setLoading(false));
      dispatch(setLogoutData());
    }
  });
};
