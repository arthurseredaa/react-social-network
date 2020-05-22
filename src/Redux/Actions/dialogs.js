import {ADD_MESSAGE, UPDATE_MESSAGE} from "../Types/dialogs";
import {nanoid} from "nanoid";

const addMessageCreator = () => ({type: ADD_MESSAGE}),
    updateMessageCreator = (text) => ({type: UPDATE_MESSAGE, newText: text, id: nanoid(10)});

export {
  addMessageCreator,
  updateMessageCreator
}