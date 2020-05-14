import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/Reducers/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({posts: state.profilePage.posts,
                                   newPostText: state.profilePage.newPostText});

let mapDispatchToProps = (dispatch) => ({addPost: () => dispatch(addPostActionCreator()),
                                      updateNewPostText: (text) => dispatch(updatePostTextActionCreator(text))});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export {
    MyPostsContainer
};