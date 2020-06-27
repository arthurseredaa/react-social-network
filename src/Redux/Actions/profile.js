import * as types from "../Types/profile";

//Action creators які повертають об'єкт action
export const addPost = () => ({ type: types.ADD_POST }),
	updatePostText = (text) => ({ type: types.UPDATE_POST_TEXT, newText: text }),
	setUserProfile = (profile) => ({ type: types.SET_USER_PROFILE, profile }),
	setProfileLoading = (isLoading) => ({ type: types.PROFILE_LOADING, isLoading })
