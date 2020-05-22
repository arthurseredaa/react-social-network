import React from "react";
import {FriendsItem} from "../FriendsItem/FriendsItem";
import {nanoid} from 'nanoid';

const MyFriends = (props) => {
    let friendsItems = props.friends.map(friend => <FriendsItem key={nanoid(5)} friend={friend}/> )
    return (
        <div>
            {friendsItems}
        </div>
    )
}

export {
    MyFriends,
}