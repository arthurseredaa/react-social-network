import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

const MyPosts = (props) => {
    let userPosts = props.posts.map(p => <Post postText={p.postText} likesCount={p.likesCount}/>),
        newPostElem = React.createRef();

    const addNewPost = () => {
        // let text = newPostElem.current.value;
        // props.addPost(text);
        props.dispatch({
            type: "ADD-POST"
        });
    }

    const onPostChange = () => {
        let text = newPostElem.current.value;
        props.dispatch({
            type: "UPDATE-NEW-POST-TEXT",
            newText: text
        });
        // props.updateTextarea(text);
    }

    return (
        <div className={s.postsWrapper}>
            <h3>My posts</h3>
            <div className={s.createPost}>
                <div>
                    <textarea rows="10" ref={newPostElem} value={props.newPostText}  onChange={onPostChange}/>
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