import React from "react";
import { nanoid } from 'nanoid';
import { Avatar } from "../../../Avatar/Avatar";
import s from './FindUserItem.module.css';
import Button from "@material-ui/core/Button";
import basicAvatar from '../../../../assets/images/basic-avatar.png';
import { NavLink } from "react-router-dom";

export const FindUserItem = ({ user, follow, unfollow, isFollowingProcessing }) => {
	return (
		<div key={nanoid(5)} className={s.userItem}>
			<div className={s.avatarWrapper}>
				<NavLink to={`/profile/${user.id}`}>
					<Avatar imageUrl={user.photos.small ? user.photos.small : basicAvatar} imageAlt="User avatar not available =(" width="80" />
				</NavLink>
				{
					user.followed
						? <Button color="default" variant="contained" disabled={isFollowingProcessing.some(id => id === user.id)} onClick={() => {
							unfollow(user.id);
						}}>Unfollow</Button>
						: <Button color="default" variant="contained" disabled={isFollowingProcessing.some(id => id === user.id)} onClick={() => {
							follow(user.id);
						}}>Follow</Button>
				}
			</div>
			<div className={s.textInfo}>
				<h4>{user.name}</h4>
				<p>props.description</p>
			</div>
			<div className={s.location}>
				<p>props.location.city</p>
				<p>props.location.street</p>
			</div>
		</div>
	)
}
