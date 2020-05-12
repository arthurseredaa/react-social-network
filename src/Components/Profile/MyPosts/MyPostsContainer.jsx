import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/Reducers/profileReducer";
import {MyPosts} from "./MyPosts";

const MyPostsContainer = (props) => {
    // debugger;

    let state = props.store.getState();

    const addNewPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text));
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addNewPost} posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>);
}

export {
    MyPostsContainer
};