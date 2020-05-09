import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Messageitem/MessageItem";

const Dialogs = (props) => {
    let dialogItems = props.dialogsPage.dialogsPage.dialogs
            .map(d => <DialogItem id = {d.id} name={d.name} active={s.active}/>),
        messageItems = props.dialogsPage.dialogsPage.messages
            .map(m => <MessageItem message={m.message}/>);

    let newMessageElem = React.createRef();

    const onMessageChange = () => {
        let text = newMessageElem.current.value;
        props.dispatch({
            type: "UPDATE-MESSAGE",
            newText: text
        })
        // props.updateMessage(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messageItems}
                <div className={s.userCreateMessage}>
                    <textarea ref={newMessageElem} onChange={onMessageChange}/>
                    <button onClick={props.dispatch({type: "ADD-MESSAGE"})}>Send</button>
                </div>
            </div>
        </div>
    );
}

export {
    Dialogs
};