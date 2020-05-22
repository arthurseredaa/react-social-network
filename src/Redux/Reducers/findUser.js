import {nanoid} from 'nanoid';
import * as types from "../Types/findUser";

let initialState = {
  users: [
    {id: nanoid(5),follow: false, name: "Arthur Sereda", description: "React Developer. Other links in descriptions", location: {city: "Chortkiv", country: "Ukraine"}},
    {id: nanoid(5), follow: false, name: "Vasya Petya", description: "Lalalalalla", location: {city: "Minsk", country: "Belarus"}},
    {id: nanoid(5), follow: false, name: "Petro Chornui", description: "Professional cygan, really like to steal horse", location: {city: "New York", country: "USA"}},
    {id: nanoid(5), follow:false, name: "Arthurian Seredovuch", description: "I am the clone of Arthur =)", location: {city: "Chortkiv", country: "Ukraine"}},
  ]
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