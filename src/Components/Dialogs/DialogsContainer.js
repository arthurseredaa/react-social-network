import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { addMessage, updateMessage } from "../../Redux/Actions/dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => ({
  messages: state.dialogsPage.messages,
  dialogs: state.dialogsPage.dialogs,
});

export const DialogsContainer = compose(
  withAuthRedirect,
  connect(mapStateToProps, { addMessage, updateMessage })
)(Dialogs);
