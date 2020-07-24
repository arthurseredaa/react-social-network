import { connect } from "react-redux";
import { MyPosts } from "./MyPosts";
import { addPost, updatePostText } from "./../../../Redux/Actions/profile";
import React from "react";

let mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

export const MyPostsAPIContainer = (props) => {
  return <MyPosts {...props} />;
};

export const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updatePostText,
})(MyPostsAPIContainer);
