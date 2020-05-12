import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    debugger;
    return (
        <div className={s.profileWrapper}>
            <ProfileInfo friends={props.profilePage.profilePage.friends}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export {
    Profile
};