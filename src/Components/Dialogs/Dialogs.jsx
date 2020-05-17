import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Messageitem/MessageItem";

const Dialogs = (props) =>{
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
    const addMessageKeyPress = (e) => {
        if(e.key === "Enter" && messageInputRef.current.value !== "") {
            e.preventDefault();
            props.createMessage();
            messageInputRef.current.value = "";
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h1 className={s.dialogsTitle}>Your dialogs:</h1>
                {/*Створюємо діалог на основі пропсів*/}
                {props.dialogs.map(d => <DialogItem key={d.id} id = {d.id}
                                                    name={d.name} active={s.active}/>)}
            </div>
            <div className={s.messages}>
                <div className={s.messagesWrapper}>
                    {/*Створюємо повідомлення на основі пропсів*/}
                    {props.messages.map(m => <MessageItem key={m.id}
                                                          message={m.message}/>)}
                </div>
                <div className={s.userCreateMessage}>
                    <textarea ref={messageInputRef} onChange={onMessageChange} onKeyPress={(e) => addMessageKeyPress(e)}/>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export {
    Dialogs
};