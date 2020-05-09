import React from "react";
import s from './FriendListItem.module.css';

const FriendListItem = (props) => {
    return (
        <div className={s.itemWrapper}>
            <img width="40" src={props.avatarUrl}/>
            <a href="#">{props.state}</a>
        </div>
    );
}

export {
    FriendListItem
}

