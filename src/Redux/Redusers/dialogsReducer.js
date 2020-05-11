const ADD_MESSAGE = "ADD-MESSAGE",
    UPDATE_MESSAGE = "UPDATE-MESSAGE";

//state = state.dialogsPage
const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = '';
            break;
        case UPDATE_MESSAGE:
            state.newMessageText = action.newText;
            break;
        default:
            console.log('Error in switch/case{dialogsReducer}')
    }
    return state;
}

const addMessageActionCreator = () => ({type: ADD_MESSAGE}),
    updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, newText: text});

export {
    dialogsReducer,
    addMessageActionCreator,
    updateMessageActionCreator
}