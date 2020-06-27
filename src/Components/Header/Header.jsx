import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import { OnlineDot } from './OnlineDot/OnlineDot.jsx';

export const Header = ({ isAuth, login }) => {
	return (
		<header className={s.header}>
			<h1 className={s.headerTitle}>React<span><NavLink to={'/profile'}>DEV</NavLink></span></h1>
			<div className={s.loginData}>
				{isAuth ? <div className={s.authorized}><h4 className={s.userName}>{login}</h4> <OnlineDot /> </div> : <NavLink to={'/login'}>Log in</NavLink>}
			</div>
		</header>
	);
}

