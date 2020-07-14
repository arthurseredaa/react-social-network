import React from "react";
import s from "./Friends.module.css";
import { FriendsHeader } from "./FriendsHeader/FriendsHeader";
import { Route } from "react-router-dom";
import { MyFriends } from "./MyFriends/MyFriends";
import { FindUsersContainer } from "./FindUsers/FindUsersContainer";
import { useSelector } from "react-redux";

export const Friends = () => {
  let friends = useSelector((state) => state.friendsPage.friends);

  return (
    <div className={s.friendsWrapper}>
      <FriendsHeader />
      <div className={s.friendsContentWrapper}>
        <Route
          path="/friends/my-friends"
          render={() => <MyFriends friends={friends} />}
        />
        <Route
          path="/friends/find-users"
          render={() => <FindUsersContainer />}
        />
      </div>
    </div>
  );
};
