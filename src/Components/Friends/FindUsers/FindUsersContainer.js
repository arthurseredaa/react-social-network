import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  followProcessing,
} from "../../../Redux/Actions/findUser";
import React, { useEffect } from "react";
import { FindUsersHeader } from "./FindUsersHeader/FindUsersHeader";
import { Pagination } from "./Pagination/Pagination";
import { Preloader } from "../../Preloader/Preloader";
import {
  getUsers,
  followUser,
  unfollowUser,
} from "../../../Redux/Reducers/findUsers";
import { FindUserItem } from "./FindUserItem/FindUserItem";
import {
  getUsersSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getCurrentPageSelector,
  getIsLoadingSelector,
  getIsFollowingProcessingSelector,
} from "../../../Redux/Selectors/findUsersSelectors";

export const FindUsersAPIContainer = ({
  users,
  currentPage,
  pageSize,
  totalUsersCount,
  isFollowingProcessing,
  isLoading,
  followUser,
  unfollowUser,
  getUsers,
  setCurrentPage,
}) => {
  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const onPageChanged = (pageNum) => {
    setCurrentPage(pageNum);
    getUsers(pageNum, pageSize);
  };

  let usersPerPage = users.map((user) => (
    <FindUserItem
      key={user.id}
      user={user}
      follow={followUser}
      unfollow={unfollowUser}
      isFollowingProcessing={isFollowingProcessing}
    />
  ));

  return (
    <>
      {/* <FindUsersHeader /> */}
      {isLoading ? <Preloader /> : <div>{usersPerPage}</div>}
      <Pagination
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
    </>
  );
};

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
