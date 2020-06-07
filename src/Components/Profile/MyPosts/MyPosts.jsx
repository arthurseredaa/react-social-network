import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import Button from '@material-ui/core/Button'

const MyPosts = (props) => {
    let newPostRef = React.createRef();

    const addNewPost = () => {
      if(newPostRef.current.value !== "") {
        props.addPost();
      } else {
        newPostRef.current.value = "Перед отправкой поста напишите что-нибудь";
      }
    }

    const onPostChange = () => {
        let text = newPostRef.current.value;
        props.updatePostText(text);
    }

    return (
        <div className={s.postsWrapper}>
            <h3>My posts</h3>
            <div className={s.createPost}>
                <div>
                    <textarea rows="10" ref={newPostRef} value={props.newPostText}  onChange={onPostChange}/>
                </div>
                <Button variant="contained" onClick={addNewPost}>Publicate</Button>
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