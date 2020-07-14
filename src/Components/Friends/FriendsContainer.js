import { Friends } from "./Friends";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => ({
  friends: state.friendsPage.friends,
});

export const FriendsContainer = compose(
  withAuthRedirect,
  connect(mapStateToProps)
)(Friends);
