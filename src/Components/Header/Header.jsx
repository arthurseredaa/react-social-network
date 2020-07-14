import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { OnlineDot } from "./OnlineDot/OnlineDot.jsx";
import { useSelector } from "react-redux";

export const Header = ({ location, userLogout }) => {
  const isAuth = useSelector((state) => state.auth.isAuth),
    login = useSelector((state) => state.auth.login);

  if (location === "/login") return null;

  return (
    <header className={s.header}>
      <h1 className={s.headerTitle}>
        React
        <span>DEV</span>
      </h1>
      <div className={s.loginData}>
        {isAuth ? (
          <div className={s.authorized}>
            <h4 className={s.userName}>{login}</h4> <OnlineDot />{" "}
          </div>
        ) : (
          <NavLink to={"/login"}>Log in</NavLink>
        )}
      </div>
      {isAuth && (
        <div onClick={() => userLogout()}>
          <NavLink to="/login">Log out</NavLink>
        </div>
      )}
    </header>
  );
};
