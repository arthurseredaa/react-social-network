import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/Reducers/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let dialogsPageState = store.getState().dialogsPage;

                const onMessageChange = (text) => {
                    store.dispatch(updateMessageActionCreator(text));
                }

                const addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }
                return (
                    <Dialogs  messageInputChange={onMessageChange}
                              createMessage={addMessage}
                              messages={dialogsPageState.messages}
                              dialogs={dialogsPageState.dialogs}/>
                )
            }
        }
        </StoreContext.Consumer>
);
}

export {
    DialogsContainer
};