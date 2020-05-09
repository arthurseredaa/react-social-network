import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return(
    <div className={s.postsItem}>
      <img src="https://igorzuevich.com/wp-content/uploads/2017/12/avatarka-v-telegram.png" alt=""/>
      <div className={s.postsItemInfo}>
        {`${props.postText}`}
      </div>
      <span className={s.like}>{`${props.likesCount} likes`}</span>
    </div>
  );
}

export {
    Post
};