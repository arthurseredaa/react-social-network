export const getUsersSelector = (state) => state.findUsersPage.users;

export const getPageSizeSelector = (state) => state.findUsersPage.pageSize;

export const getTotalUsersCountSelector = (state) =>
  state.findUsersPage.totalUsersCount;

export const getCurrentPageSelector = (state) =>
  state.findUsersPage.currentPage;

export const getIsLoadingSelector = (state) => state.findUsersPage.isLoading;

export const getIsFollowingProcessingSelector = (state) =>
  state.findUsersPage.isFollowingProcessing;
