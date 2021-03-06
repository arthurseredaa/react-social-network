/* eslint-disable default-case */
import React from "react";
import s from "./Sidebar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import profileIcon from "../../assets/icons/sidebar/user.svg";
import newsIcon from "../../assets/icons/sidebar/dashboard.svg";
import messagesIcon from "../../assets/icons/sidebar/email.svg";
import friendsIcon from "../../assets/icons/sidebar/team.svg";
import musicIcon from "../../assets/icons/sidebar/play-button.svg";
import settingsIcon from "../../assets/icons/sidebar/settings.svg";
import { useSelector } from "react-redux";

const Sidebar = () => {
  let links = useSelector((state) => state.sidebar.links),
    profileId = useSelector((state) => state.auth.id),
    location = useLocation();

  if (location.pathname.match("/login")) {
    return null;
  }

  let sidebarLinks = links.map((el) => {
    let linkIcon;
    switch (el.sidebarLink) {
      case "Profile":
        linkIcon = profileIcon;
        break;
      case "Newsfeed":
        linkIcon = newsIcon;
        break;
      case "Dialogs":
        linkIcon = messagesIcon;
        break;
      case "Friends":
        linkIcon = friendsIcon;
        break;
      case "Music":
        linkIcon = musicIcon;
        break;
      case "Settings":
        linkIcon = settingsIcon;
        break;
    }
    if (el.sidebarLink === "Profile") {
      return (
        <div className={s.item} key={el.sidebarLink.toLowerCase()}>
          <NavLink to={`/${el.url}/${profileId}`} activeClassName={s.active}>
            <img src={linkIcon} alt="" width="23" />
            {el.sidebarLink}
          </NavLink>
        </div>
      );
    }

    return (
      <div className={s.item} key={el.sidebarLink.toLowerCase()}>
        <NavLink to={`/${el.url}`} activeClassName={s.active}>
          <img src={linkIcon} alt="" width="23" />
          {el.sidebarLink}
        </NavLink>
      </div>
    );
  });
  return <nav className={s.nav}>{sidebarLinks}</nav>;
};

export { Sidebar };
