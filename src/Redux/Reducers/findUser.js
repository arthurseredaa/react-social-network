import {nanoid} from 'nanoid';
import * as types from "../Types/findUser";

let initialState = {
  users: []
}

const findUser = (state = initialState, action) => {
  switch(action.type) {
    case types.FOLLOW:
      return {
        ...state,
        users: state.users.map(user => user.id === action.userId ? {...user, follow: true} : user)
      }
    case types.UNFOLLOW:
      console.log('test')
      return {
        ...state,
        users: state.users.map(user => user.id === action.userId ? {...user, follow: false} : user)
      }
    case types.SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state;
  }
}

export {
  findUser
}