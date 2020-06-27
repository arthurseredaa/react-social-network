import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { addMessage, updateMessage } from "../../Redux/Actions/dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


let mapStateToProps = state => ({
	messages: state.dialogsPage.messages,
	dialogs: state.dialogsPage.dialogs
});

let DialogsWithRedirect = withAuthRedirect(Dialogs);

export const DialogsContainer = connect(mapStateToProps, { addMessage, updateMessage })(DialogsWithRedirect);

