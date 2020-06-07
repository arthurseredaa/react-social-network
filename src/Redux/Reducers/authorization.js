import {SET_AUTH_USER_DATA} from "../Types/authorization";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  isLodaing: false
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
}