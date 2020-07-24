import React from "react";
import s from "./Header.module.css";
import { NavLink, useLocation, Redirect } from "react-router-dom";
import { OnlineDot } from "./OnlineDot/OnlineDot.jsx";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../Redux/Reducers/authorization";

export const Header = React.memo(() => {
  const isAuth = useSelector((state) => state.auth.isAuth),
    login = useSelector((state) => state.auth.login),
    location = useLocation(),
    dispatch = useDispatch();

  if (location === "/login") return null;

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

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
        <div onClick={() => dispatch(userLogout())} className={s.logoutButton}>
          <NavLink to="/login">Log out</NavLink>
        </div>
      )}
    </header>
  );
});
