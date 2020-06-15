import * as types from "../Types/findUser";

let initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isLoading: false
}

const findUsers = (state = initialState, action) => {
	switch (action.type) {
		case types.FOLLOW:
			return {
				...state,
				users: state.users.map(user => user.id === action.userId ? { ...user, followed: true } : user)
			}
		case types.UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => user.id === action.userId ? { ...user, followed: false } : user)
			}
		case types.SET_USERS:
			return {
				...state,
				users: action.users
			}
		case types.SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
		case types.SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalUsersCount
			}
		case types.SET_LOADING:
			return {
				...state,
				isLoading: action.isLoading
			}
		default:
			return state;
	}
}

export {
	findUsers
}