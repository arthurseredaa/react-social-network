import {nanoid} from 'nanoid';
import {ADD_MESSAGE, UPDATE_MESSAGE} from "../Types/dialogs";

let initialState ={
    dialogs: [
        {id: 1, name: "Arthur"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "CJ"},
        {id: 4, name: "Victor"},
    ],
    messages: [
        {id: 1, message: "Hello my friend! How's life?"},
    ],
    newMessageText: "",
};

const dialogs = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: nanoid(10),
                message: state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ""
            }
        }
        case UPDATE_MESSAGE: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state;
    }
}

export {
    dialogs
}