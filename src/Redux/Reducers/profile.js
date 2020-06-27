import { nanoid } from 'nanoid';
import * as types from "../Types/profile";
import { setUserProfile, setProfileLoading } from '../Actions/profile';
import { profileAPI } from '../../api/api';



let initialState = {
	profile: null,
	profileLoading: false,
	posts: [
		{ id: 1, postText: "Hello, world!", likesCount: 2 },
	],
	newPostText: "",
	friends: [
		{ id: 1, name: "Arthur", avatarUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png", online: true },
		{ id: 2, name: "Hrustya", avatarUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png", online: true },
		{ id: 3, name: "Yura", avatarUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png", online: true },
		{ id: 4, name: "Nazar", avatarUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png", online: true },
		{ id: 5, name: "ZayaBeats", avatarUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png", online: true },
		{ id: 6, name: "Maksimilian", avatarUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png", online: false },
		{ id: 7, name: "Pitro", avatarUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png", online: false },
		{ id: 8, name: "Olko", avatarUrl: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-png-1.png", online: true },
	],
};

//state = state.profilePage
export const profile = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_POST:
			let newPost = {
				id: nanoid(10),
				postText: state.newPostText,
				likesCount: 0
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: "",
			}
		case types.UPDATE_POST_TEXT:
			return {
				...state,
				newPostText: action.newText,
			}
		case types.SET_USER_PROFILE:
			return {
				...state,
				profile: { ...action.profile }
			}
		case types.PROFILE_LOADING:
			return {
				...state,
				profileLoading: action.isLoading
			}
		default:
			return state
	}
}

export const setProfile = (userId) => (dispatch) => {
	dispatch(setProfileLoading(true));
	profileAPI.getProfile(userId)
		.then(response => {
			dispatch(setUserProfile(response.data));
			dispatch(setProfileLoading(false));
		})
}