import * as types from "../Types/profile";

export const addPost = () => ({ type: types.ADD_POST }),
  updatePostText = (text) => ({ type: types.UPDATE_POST_TEXT, newText: text }),
  setUserProfile = (profile) => ({ type: types.SET_USER_PROFILE, profile }),
  setProfileLoading = (isLoading) => ({
    type: types.PROFILE_LOADING,
    isLoading,
  }),
  setStatusText = () => ({ type: types.SET_STATUS_TEXT }),
  editStatusText = (text) => ({ type: types.EDIT_STATUS_TEXT, text }),
  cancelSetStatus = () => ({ type: types.CANCEL_SET_STATUS }),
  setStatusFromServer = (status) => ({
    type: types.SET_STATUS_FROM_SERVER,
    status,
  });
