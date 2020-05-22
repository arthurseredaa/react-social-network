import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {addMessageCreator, updateMessageCreator} from "../../Redux/Actions/dialogs";


let mapStateToProps = (state) => ({messages: state.dialogsPage.messages,
                                    dialogs: state.dialogsPage.dialogs});
let mapDispatchToProps = (dispatch) => ({messageInputChange: (text) => dispatch(updateMessageCreator(text)),
                                      createMessage: () => dispatch(addMessageCreator())});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export {
    DialogsContainer
};