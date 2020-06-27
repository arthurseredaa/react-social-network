import * as types from "../Types/findUser";
import { usersAPI } from "../../api/api";
import { setLoading, setUsers, setTotalUsersCount, followProcessing, follow, unfollow } from "../Actions/findUser";

let initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isLoading: false,
	isFollowingProcessing: []
}

export const findUsers = (state = initialState, action) => {
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
		case types.FOLLOWING_PROCESSING:
			return {
				...state,
				// Подписка и отписка от пользователя
				// Если isLoading === true, то копируем старый массив и добавляем вконце новый юзер айди, иначе возвращаем копию старого маива без id из action(filter возвращает копию)
				isFollowingProcessing: action.isLoading ? [...state.isFollowingProcessing, action.userId] : [state.isFollowingProcessing.filter(id => id !== action.userId)]
			}
		default:
			return state;
	}
}

export const getUsers = (currentPage, pageSize) => (dispatch) => {
	dispatch(setLoading(true));
	usersAPI.getUsers(currentPage, pageSize)
		.then(response => {
			dispatch(setLoading(false));
			dispatch(setUsers(response.items));
			dispatch(setTotalUsersCount(response.totalCount));
		})
}

export const followUser = (userId) => (dispatch) => {
	dispatch(followProcessing(true, userId))
	usersAPI.followUser(userId)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(follow(userId));
				dispatch(followProcessing(false, userId));
			}
		})
}

export const unfollowUser = (userId) => (dispatch) => {
	dispatch(followProcessing(true, userId))
	usersAPI.unfollowUser(userId)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(unfollow(userId));
				dispatch(followProcessing(false, userId));
			}
		})
}