import React from 'react';
import s from './Profile.module.css';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { Preloader } from "../Preloader/Preloader";

export const Profile = ({ profile, statusText, setStatusText, editStatusText, newStatusText, cancelSetStatus, updateStatus }) => {
	if (!profile) {
		return <Preloader />
	} else {
		return (
			<div className={s.profileWrapper}>
				<ProfileInfo profile={profile} statusText={statusText}
					setStatusText={setStatusText} editStatusText={editStatusText}
					newStatusText={newStatusText} cancelSetStatus={cancelSetStatus}
					updateStatus={updateStatus} />
				<MyPostsContainer />
			</div>
		)
	}
}
