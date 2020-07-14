import { Newsfeed } from "./Newsfeed";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });

export const NewsfeedContainer = compose(
  withAuthRedirect,
  connect(mapStateToProps)
)(Newsfeed);
