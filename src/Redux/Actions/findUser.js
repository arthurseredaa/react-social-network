import * as types from "../Types/findUser";

export const follow = (userId) => ({ type: types.FOLLOW, userId }),
	unfollow = (userId) => ({ type: types.UNFOLLOW, userId }),
	setUsers = (users) => ({ type: types.SET_USERS, users }),
	setCurrentPage = (page) => ({ type: types.SET_CURRENT_PAGE, currentPage: page }),
	setTotalUsersCount = (totalUsersCount) => ({ type: types.SET_TOTAL_USERS_COUNT, totalUsersCount }),
	setLoading = (isLoad) => ({ type: types.SET_LOADING, isLoading: isLoad }),
	followProcessing = (isLoading, userId) => ({ type: types.FOLLOWING_PROCESSING, isLoading, userId })

