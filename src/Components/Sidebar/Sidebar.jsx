import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    debugger;
  return(
    <nav className={s.nav}>
      <div className={`${s.item}`}>
        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/newsfeed" activeClassName={s.active}>Newsfeed</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
      </div>
        <div className={s.friendsOnline}>Friends online: {props.usersOnline} <div className={s.onlineDot}></div></div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
      </div>
    </nav>
  );
}

export {
    Sidebar
};