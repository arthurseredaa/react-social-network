import {FindUsers} from "./FindUsers";
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreators, unfollowActionCreator} from "../../../Redux/Actions/findUser";

let mapStateToProps = (state) => ({users: state.findUsersPage.users}),
    mapDispatchToProps = (dispatch) => ({ followed: (userId) => dispatch(followActionCreator(userId)),
                                        unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
                                        setUsers: (users) => dispatch(setUsersActionCreators(users))});

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);
