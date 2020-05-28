import React from 'react';
import s from './Friends.module.css';
import {FriendsHeader} from "./FriendsHeader/FriendsHeader";
import {Route} from "react-router-dom";
import {MyFriends} from "./MyFriends/MyFriends";
import {FindUsersContainer} from "./FindUsers/FindUsersContainer";

const Friends = (props) => {
    // let friendsItems = props.friends.map(friend => <FriendsItem friend={friend}/>)
    return (
        <div className={s.friendsWrapper}>
            <FriendsHeader />
            <div className={s.friendsContentWrapper}>
                <Route path="/friends/my-friends" render={() => <MyFriends friends={props.friends}/>}/>
                <Route path="/friends/find-users" render={() => <FindUsersContainer />} />
            </div>
        </div>
    )
}

export {
    Friends
}