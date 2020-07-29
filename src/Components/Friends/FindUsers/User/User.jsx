import React from "react";
import { Avatar } from "../../../Avatar/Avatar";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import s from "./User.module.css";
import basicAvatar from "../../../../assets/images/basic-avatar.png";

export const User = React.memo(
  ({ user, isFollowingProcessing, follow, unfollow }) => {
    return (
      <div className={s.userItem}>
        <div className={s.avatarWrapper}>
          <NavLink to={`/profile/${user.id}`}>
            <Avatar
              imageUrl={user.photos.small ? user.photos.small : basicAvatar}
              imageAlt="User avatar not available =("
              width="80"
            />
          </NavLink>
          {user.followed ? (
            <Button
              color="default"
              variant="contained"
              disabled={isFollowingProcessing.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </Button>
          ) : (
            <Button
              color="default"
              variant="contained"
              disabled={isFollowingProcessing.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </Button>
          )}
        </div>
        <div className={s.textInfo}>
          <h4>{user.name}</h4>
          <p>description</p>
        </div>
        <div className={s.location}>
          <p>location.city</p>
          <p>location.street</p>
        </div>
      </div>
    );
  }
);
