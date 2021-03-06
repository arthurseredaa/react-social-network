import { connect } from "react-redux";
import {
  setCurrentPage,
  followProcessing,
} from "../../../Redux/Actions/findUser";
import React, { useEffect } from "react";
import {
  getUsers,
  followUser,
  unfollowUser,
} from "../../../Redux/Reducers/findUsers";
import {
  getUsersSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getCurrentPageSelector,
  getIsLoadingSelector,
  getIsFollowingProcessingSelector,
} from "../../../Redux/Selectors/findUsersSelectors";
import { FindUsers } from "./FindUsers";
import { User } from "./User/User";

export const FindUsersAPIContainer = React.memo((props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
  }, [props.currentPage, props.pageSize]);

  const onPageChanged = (pageNum) => {
    props.setCurrentPage(pageNum);
    props.getUsers(pageNum, props.pageSize);
  };

  let usersPerPage = props.users.map((user) => (
    <User
      key={user.id}
      user={user}
      follow={props.followUser}
      unfollow={props.unfollowUser}
      isFollowingProcessing={props.isFollowingProcessing}
      id={user.id}
    />
  ));

  return (
    <FindUsers
      totalUsersCount={props.totalUsersCount}
      pageSize={props.pageSize}
      currentPage={props.currentPage}
      onPageChanged={onPageChanged}
      usersPerPage={usersPerPage}
      isLoading={props.isLoading}
    />
  );
});

let mapStateToProps = (state) => ({
  users: getUsersSelector(state),
  pageSize: getPageSizeSelector(state),
  totalUsersCount: getTotalUsersCountSelector(state),
  currentPage: getCurrentPageSelector(state),
  isLoading: getIsLoadingSelector(state),
  isFollowingProcessing: getIsFollowingProcessingSelector(state),
});

export const FindUsersContainer = connect(mapStateToProps, {
  setCurrentPage,
  followProcessing,
  getUsers,
  followUser,
  unfollowUser,
})(FindUsersAPIContainer);
