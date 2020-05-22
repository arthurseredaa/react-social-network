import React from 'react';
import s from './Post.module.css';
import {LikeButton} from "./LikeButton/LikeButton";

const Post = (props) => {
  return(
    <div className={s.postsItem}>
      <img src="https://igorzuevich.com/wp-content/uploads/2017/12/avatarka-v-telegram.png" alt=""/>
      <div className={s.postsItemInfo}>
        {`${props.postText}`}
      </div>
      <div className={s.likesWrapper}>
        <LikeButton />
        <span className={s.likeCount}>{`${props.likesCount} likes`}</span>
      </div>
    </div>
  );
}

export {
    Post
};