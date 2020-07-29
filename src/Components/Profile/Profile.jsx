import React from "react";
import s from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { Preloader } from "../Preloader/Preloader";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

export const Profile = React.memo((props) => {
  if (!props.profile) {
    return (
      <div className={s.profileWrapper}>
        <Preloader />
      </div>
    );
  } else {
    return (
      <div className={s.profileWrapper}>
        <ProfileInfo {...props} />
        <MyPostsContainer />
      </div>
    );
  }
});
