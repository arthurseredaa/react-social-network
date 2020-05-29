import * as types from "../Types/findUser";

export const followActionCreator = (userId) => ({ type: types.FOLLOW, userId }),
    unfollowActionCreator = (userId) => ({ type: types.UNFOLLOW, userId }),
    setUsersActionCreators = (users) => ({type: types.SET_USERS, users}),
    setCurrentPageActionCreator = (page) => ({type: types.SET_CURRENT_PAGE, currentPage: page}),
    setTotalUsersCount = (totalUsersCount) => ({type: types.SET_TOTAL_USERS_COUNT, totalUsersCount})

