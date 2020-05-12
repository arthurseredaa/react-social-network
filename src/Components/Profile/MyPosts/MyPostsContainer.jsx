import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/Reducers/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();

                const addNewPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                const onPostChange = (text) => {
                    store.dispatch(updatePostTextActionCreator(text));
                }
                return(
                    <MyPosts updateNewPostText={onPostChange}
                                 addPost={addNewPost}
                                 posts={state.profilePage.posts}
                                 newPostText={state.profilePage.newPostText}/>
                                 );
            }
        }
        </StoreContext.Consumer>
                     );
}

export {
    MyPostsContainer
};