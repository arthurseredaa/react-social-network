import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {addMessage, updateMessage} from "../../Redux/Actions/dialogs";


let mapStateToProps = (state) => ({messages: state.dialogsPage.messages,
                                    dialogs: state.dialogsPage.dialogs});

export const DialogsContainer = connect(mapStateToProps, {addMessage, updateMessage})(Dialogs);

