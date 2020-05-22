import React from "react";
import s from "../Friends.module.css";
import {NavLink} from "react-router-dom";

const FriendsHeader = () => {
    return (
        <div className={s.friendsHeader}>
            <NavLink to="/friends/my-friends" className={s.myFriends} activeClassName={s.active}>My friends</NavLink>
            <NavLink to="/friends/find-users" className={s.findUsers} activeClassName={s.active}>Find users</NavLink>
        </div>
    )
}

export {
    FriendsHeader
}