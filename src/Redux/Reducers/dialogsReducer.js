import {nanoid} from 'nanoid';

const ADD_MESSAGE = "ADD-MESSAGE",
    UPDATE_MESSAGE = "UPDATE-MESSAGE";

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

//state = state.dialogsPage
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: nanoid(10),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = '';
            break;
        case UPDATE_MESSAGE:
            state.newMessageText = action.newText;
            break;
        default:
            return state;
    }
    return state;
}

const addMessageActionCreator = () => ({type: ADD_MESSAGE}),
    updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, newText: text, id: nanoid(10)});

export {
    dialogsReducer,
    addMessageActionCreator,
    updateMessageActionCreator
}