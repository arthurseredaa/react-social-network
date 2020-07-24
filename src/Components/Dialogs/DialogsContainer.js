import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { addMessage, updateMessage } from "../../Redux/Actions/dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

export const DialogsContainer = compose(
  withAuthRedirect,
  connect(null, { addMessage, updateMessage })
)(Dialogs);
