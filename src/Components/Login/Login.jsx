import React from "react";
import s from "./Login.module.css";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { Preloader } from "./../Preloader/Preloader";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  userLogin,
  userAuthorization,
} from "../../Redux/Reducers/authorization";

export const Login = () => {
  useEffect(() => {
    dispatch(userAuthorization());
  });

  let { register, handleSubmit, errors } = useForm(),
    dispatch = useDispatch();

  let userId = useSelector((state) => state.auth.id),
    isLoading = useSelector((state) => state.auth.isLoading),
    isAuth = useSelector((state) => state.auth.isAuth),
    errorText = useSelector((state) => state.auth.errorText);

  const onSubmit = (data) => dispatch(userLogin(data));

  if (isAuth) {
    return <Redirect to={`/profile/${userId}`} />;
  }

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={s.loginPage}>
      <h1 className={s.loginPageTitle}>
        Sign <span>in</span>
      </h1>
      {errorText && <p className={s.warningText}>{errorText}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className={s.loginForm}>
        {errors.email && (
          <p className={s.warningText}>This field is required</p>
        )}
        <input
          className={s.loginInput}
          type="email"
          name="email"
          placeholder="Email"
          ref={register({ required: true })}
        />

        {errors.password && (
          <p className={s.warningText}>This field is required</p>
        )}
        <input
          className={s.loginInput}
          type="password"
          name="password"
          placeholder="Password"
          ref={register({ required: true })}
        />
        <label className={s.rememberMeLabel}>
          <input
            type="checkbox"
            name="rememberMe"
            className={s.rememberMe}
            ref={register()}
          />
          <span>Remember me</span>
        </label>
        <button className={s.button}>
          <span className={s.button__mask}></span>
          <span className={s.button__text}>Submit</span>
          <span className={`${s.button__text} ${s.button__text__bis}`}>
            Submit
          </span>
        </button>
      </form>
    </div>
  );
};
