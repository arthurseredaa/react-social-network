import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

const MyPosts = (props) => {
    let newPostRef = React.createRef();

    const addNewPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        let text = newPostRef.current.value;
        props.updateNewPostText(text);
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
                {/*Створюємо пости на основі пропсів*/}
                {props.posts.map(p => <Post key={p.id} postText={p.postText} likesCount={p.likesCount}/>)}
            </div>
        </div>
    );
}

export {
    MyPosts
};