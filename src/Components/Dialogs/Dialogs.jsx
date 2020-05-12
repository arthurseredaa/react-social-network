import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Messageitem/MessageItem";

const Dialogs = (props) => {
    let dialogItems = props.dialogs.map(d => <DialogItem id = {d.id} name={d.name} active={s.active}/>),
        messageItems = props.messages.map(m => <MessageItem message={m.message}/>);

    let messageInputRef = React.createRef();

    const onMessageChange = () => {
        let text = messageInputRef.current.value;
        props.messageInputChange(text);
    }

    const addMessage = () => {
        if(messageInputRef.current.value !== "") {
            props.createMessage();
            messageInputRef.current.value = "";
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h1 className={s.dialogsTitle}>Your dialogs:</h1>
                {dialogItems}
            </div>
            <div className={s.messages}>
                <div className={s.messagesWrapper}>
                    {messageItems}
                </div>
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