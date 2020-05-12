import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/Reducers/dialogsReducer";
import {Dialogs} from "./Dialogs";

const DialogsContainer = (props) => {

    const onMessageChange = (text) => {
        props.store.dispatch(updateMessageActionCreator(text));
    }

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    return (<Dialogs  messageInputChange={onMessageChange}
                      createMessage={addMessage}
                      messages={props.store.getState().dialogsPage.messages}
                      dialogs={props.store.getState().dialogsPage.dialogs}/>);
}

export {
    DialogsContainer
};