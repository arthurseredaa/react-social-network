import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    let sidebarLinks = props.links.map(el => {
        return (<div className={s.item} key={el.sidebarLink.toLowerCase()}>
            <NavLink to={`/${el.url}`} activeClassName={s.active}>{el.sidebarLink}</NavLink>
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