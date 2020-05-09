import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Messageitem/MessageItem";

const Dialogs = (props) => {
    let dialogItems = props.dialogsPage.dialogsPage.dialogs
            .map(d => <DialogItem id = {d.id} name={d.name} active={s.active}/>),
        messageItems = props.dialogsPage.dialogsPage.messages
            .map(m => <MessageItem message={m.message}/>);

    let messageInputRef = React.createRef();

    const onMessageChange = () => {
        let text = messageInputRef.current.value;
        props.dispatch({
            type: "UPDATE-MESSAGE",
            newText: text
        })
    }

    const addMessage = () => {
        if(messageInputRef.current.value !== "") {
            props.dispatch({type: "ADD-MESSAGE"});
            messageInputRef.current.value = "";
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messageItems}
                <div className={s.userCreateMessage}>
                    <textarea ref={messageInputRef} onChange={onMessageChange}/>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export {
    Dialogs
};