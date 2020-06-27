import { Friends } from './Friends';
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => ({
	friends: state.friendsPage.friends,
})

let FriendsWithRedirect = withAuthRedirect(Friends)

export const FriendsContainer = connect(mapStateToProps, {})(FriendsWithRedirect);
