import * as types from "../Types/authorization";

export const setAuthData = (id, email, login) => ({
    type: types.SET_AUTH_USER_DATA,
    data: { id, email, login },
  }),
  setLoginData = (data, userId) => ({
    type: types.SET_LOGIN_DATA,
    data,
    userId,
  }),
  setLoading = (isLoading) => ({ type: types.SET_LOADING, isLoading }),
  setLogoutData = () => ({ type: types.SET_LOGOUT_DATA });
