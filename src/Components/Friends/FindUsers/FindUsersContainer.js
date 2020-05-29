import {FindUsers} from "./FindUsers";
import {connect} from "react-redux";
import {
  followActionCreator,
  setCurrentPageActionCreator, setTotalUsersCount,
  setUsersActionCreators,
  unfollowActionCreator
} from "../../../Redux/Actions/findUser";

let mapStateToProps = (state) => ({
      users: state.findUsersPage.users,
      pageSize: state.findUsersPage.pageSize,
      totalUsersCount: state.findUsersPage.totalUsersCount,
      currentPage: state.findUsersPage.currentPage
    }),
    mapDispatchToProps = (dispatch) => ({
      followed: (userId) => dispatch(followActionCreator(userId)),
      unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
      setUsers: (users) => dispatch(setUsersActionCreators(users)),
      setCurrentPage: (page) => dispatch(setCurrentPageActionCreator(page)),
      setTotalUsersCount: (count) => dispatch(setTotalUsersCount(count))
    });

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);
