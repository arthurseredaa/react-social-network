import React from "react";
import s from './FriendList.module.css';
import {FriendListItem} from './FriendListItem/FriendListItem';

const FriendList = (props) => {
    let listItem = props.state.map(elem => <FriendListItem state={elem.name} avatarUrl={elem.avatarUrl}/>)
    return (
        <div className={s.friendListWrapper}>
            <h3>Friends</h3>
            <div className={s.friendListWrapperSecond}>
                {listItem}
            </div>
        </div>
    );
}

export {
    FriendList
}