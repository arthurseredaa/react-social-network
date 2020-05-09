import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.profileWrapper}>
            <ProfileInfo friends={props.profilePage.friends}/>
            <MyPosts posts={props.profilePage.profilePage.posts}
                     newPostText={props.profilePage.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    );
}

export {
    Profile
};