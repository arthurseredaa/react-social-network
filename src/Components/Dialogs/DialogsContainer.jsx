import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/Reducers/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({messages: state.dialogsPage.messages,
                                    dialogs: state.dialogsPage.dialogs});
let mapDispatchToProps = (dispatch) => ({messageInputChange: (text) => dispatch(updateMessageActionCreator(text)),
                                      createMessage: () => dispatch(addMessageActionCreator())});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export {
    DialogsContainer
};