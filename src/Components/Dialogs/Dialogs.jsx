import React from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { MessageItem } from "./Messageitem/MessageItem";
import { TextField } from "@material-ui/core";
import { useSelector } from "react-redux";

export const Dialogs = ({ addMessage, updateMessage }) => {
  let messages = useSelector((state) => state.dialogsPage.messages),
    dialogs = useSelector((state) => state.dialogsPage.dialogs);

  let messageInputRef = React.createRef();

  const onMessageChange = (e) => {
    updateMessage(e.target.value);
  };

  const onAddMessage = () => {
    if (messageInputRef.current.value !== "") {
      addMessage();
      messageInputRef.current.value = "";
    }
  };
  const addMessageKeyPress = (e) => {
    if (e.key === "Enter" && messageInputRef.current.value !== "") {
      e.preventDefault();
      addMessage();
      messageInputRef.current.value = "";
    }
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <h1 className={s.dialogsTitle}>Your dialogs:</h1>
        {/*Створюємо діалог на основі пропсів*/}
        {dialogs.map((d) => (
          <DialogItem key={d.id} id={d.id} name={d.name} active={s.active} />
        ))}
      </div>
      <div className={s.messages}>
        <div className={s.messagesWrapper}>
          {/*Створюємо повідомлення на основі пропсів*/}
          {messages.map((m) => (
            <MessageItem key={m.id} message={m.message} />
          ))}
        </div>
        <div className={s.userCreateMessage}>
          <TextField
            ref={messageInputRef}
            onChange={(e) => onMessageChange(e)}
            onKeyPress={(e) => addMessageKeyPress(e)}
            fullWidth
            id="standard-full-width"
            label="Type a message"
            variant="filled"
          />
          {/* <textarea ref={messageInputRef} onChange={onMessageChange} onKeyPress={(e) => addMessageKeyPress(e)} /> */}
          <button onClick={onAddMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};
