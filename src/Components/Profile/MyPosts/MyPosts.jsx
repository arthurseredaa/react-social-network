import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/Redusers/profileReducer";

const MyPosts = (props) => {
    let userPosts = props.posts.map(p => <Post postText={p.postText} likesCount={p.likesCount}/>),
        newPostRef = React.createRef();

    const addNewPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = () => {
        let text = newPostRef.current.value;
        props.dispatch(updatePostTextActionCreator(text));
    }

    return (
        <div className={s.postsWrapper}>
            <h3>My posts</h3>
            <div className={s.createPost}>
                <div>
                    <textarea rows="10" ref={newPostRef} value={props.newPostText}  onChange={onPostChange}/>
                </div>
                <button onClick={addNewPost}>Publicate</button>
            </div>
            <div className={s.posts}>
                {userPosts}
            </div>
        </div>
    );
}

export {
    MyPosts
};