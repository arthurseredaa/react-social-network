import {ADD_POST, UPDATE_POST_TEXT} from "../Types/profile";

//Action creators які повертають об'єкт action
const addPostActionCreator = () => ({type: ADD_POST}),
    updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});

export {
  addPostActionCreator,
  updatePostTextActionCreator
}