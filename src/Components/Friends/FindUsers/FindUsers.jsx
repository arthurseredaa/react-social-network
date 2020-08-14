import React from "react";
import { Preloader } from "../../Preloader/Preloader";
import { FindUsersHeader } from "./FindUsersHeader/FindUsersHeader";
import Pagination from "@material-ui/lab/Pagination";
import s from "./FindUsers.module.css";

export const FindUsers = React.memo(
  ({
    totalUsersCount,
    usersPerPage,
    pageSize,
    currentPage,
    onPageChanged,
    isLoading,
  }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize),
      pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div className="FindUsers">
        <FindUsersHeader totalUsersCount={totalUsersCount} />
        <div className={s.paginationContainer}>
          <Pagination
            count={pagesCount}
            page={currentPage}
            hideNextButton
            hidePrevButton
            onChange={(e, value) => onPageChanged(value)}
          />
        </div>
        {isLoading ? <Preloader /> : <div>{usersPerPage}</div>}
      </div>
    );
  }
);
