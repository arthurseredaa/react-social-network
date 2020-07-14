import React from "react";
import s from "./Login.module.css";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { Preloader } from "./../Preloader/Preloader";

export const Login = ({ userLogin, userId, isLoading, userAuthorization }) => {
  let { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => userLogin(data);

  if (userId) {
    userAuthorization();
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
      <form onSubmit={handleSubmit(onSubmit)} className={s.loginForm}>
        {errors.login && (
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
        <label>
          <input type="checkbox" name="rememberMe" ref={register()} />
          <span>Remember me</span>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
