import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <header className={s.header}>
          <h1 className={s.headerTitle}>React<span><NavLink to={'/profile'}>DEV</NavLink></span></h1>
          <div className={s.loginData}>
            {props.isAuth ? <h4 className={s.userName}>{props.login}</h4> : <NavLink to={'/login'}>Log in</NavLink>}
          </div>
        </header>
    );
}

