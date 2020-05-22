import * as types from "../Types/findUser";

export const followActionCreator = (userId) => ({ type: types.FOLLOW, userId }),
    unfollowActionCreator = (userId) => ({ type: types.UNFOLLOW, userId }),
    setUsersActionCreators = (users) => ({type: types.SET_USERS, users});

