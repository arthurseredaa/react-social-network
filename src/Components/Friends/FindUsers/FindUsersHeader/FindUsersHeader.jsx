import React from "react";
import s from "../FindUsers.module.css";
import Button from "@material-ui/core/Button";

export const FindUsersHeader = (props) => {
  return (
    <div className={s.findUsersHeader}>
      <div className={s.search}>
        <input type="text" />
        <Button variant="contained" color="secondary">
          Search
        </Button>
      </div>
      <div>Total count of users: {props.totalUsersCount}</div>
    </div>
  );
};
