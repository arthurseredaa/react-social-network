import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import profileIcon from "../../assets/icons/sidebar/user.svg";
import newsIcon from "../../assets/icons/sidebar/dashboard.svg";
import messagesIcon from "../../assets/icons/sidebar/email.svg";
import friendsIcon from "../../assets/icons/sidebar/team.svg";
import musicIcon from "../../assets/icons/sidebar/play-button.svg";
import settingsIcon from "../../assets/icons/sidebar/settings.svg";

const Sidebar = (props) => {
    let sidebarLinks = props.links.map(el => {
      let linkIcon;
      switch(el.sidebarLink) {
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
        return (<div className={s.item} key={el.sidebarLink.toLowerCase()}>
            <NavLink to={`/${el.url}`} activeClassName={s.active}><img src={linkIcon} alt="" width="23"/>{el.sidebarLink}</NavLink>
        </div>)
    });
  return(
    <nav className={s.nav}>
        {sidebarLinks}
    </nav>
  );
}

export {
    Sidebar
};