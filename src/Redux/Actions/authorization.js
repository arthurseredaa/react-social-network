import {SET_AUTH_USER_DATA} from "../Types/authorization";

export const setAuthData = (id, email, login) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}})