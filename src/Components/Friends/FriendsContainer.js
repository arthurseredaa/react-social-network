import {Friends} from './Friends';
import {connect} from "react-redux";

let mapStateToProps = (state) => ({friends: state.friendsPage.friends})

export const FriendsContainer = connect(mapStateToProps, {})(Friends);
