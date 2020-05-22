import React from 'react';
import {NavLink} from "react-router-dom";
import s from './FriendsItem.module.css';
import {Avatar} from "../../Avatar/Avatar";
import {nanoid} from 'nanoid';

const FriendsItem = (props) => {
    return (
        <NavLink to={`/${props.friend.name.toLowerCase()}`} className={s.friendsItem} key={nanoid(5)}>
            <Avatar imageUrl={props.friend.avatarUrl} imageAlt="friendAvatart" width="60"/>
            <h1>{props.friend.name}</h1>
            <p>{props.friend.location}</p>
        </NavLink>
    )
}

export {
    FriendsItem
}