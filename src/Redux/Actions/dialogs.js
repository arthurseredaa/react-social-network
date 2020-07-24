import { ADD_MESSAGE, UPDATE_MESSAGE } from "../Types/dialogs";
import { nanoid } from "nanoid";

const addMessage = () => ({ type: ADD_MESSAGE }),
  updateMessage = (text) => ({
    type: UPDATE_MESSAGE,
    newText: text,
    id: nanoid(10),
  });
// updateMessage = (text) => ({ type: UPDATE_MESSAGE, newText: text, id: 5 });

export { addMessage, updateMessage };
