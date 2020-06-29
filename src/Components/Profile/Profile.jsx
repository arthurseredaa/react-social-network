import React from 'react';
import s from './Profile.module.css';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { Preloader } from "../Preloader/Preloader";

export const Profile = (props) => {
	if (!props.profile) {
		return <Preloader />
	} else {
		return (
			<div className={s.profileWrapper}>
				<ProfileInfo {...props} />
				<MyPostsContainer />
			</div>
		)
	}
}
