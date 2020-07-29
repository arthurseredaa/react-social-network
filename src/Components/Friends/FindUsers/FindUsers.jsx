import React from "react";
import { Preloader } from "../../Preloader/Preloader";
import { FindUsersHeader } from "./FindUsersHeader/FindUsersHeader";
import { Pagination } from "../../Pagination/Pagination";

export const FindUsers = React.memo(
  ({
    totalUsersCount,
    usersPerPage,
    pageSize,
    currentPage,
    onPageChanged,
    isLoading,
  }) => {
    return (
      <div className="FindUsers">
        <FindUsersHeader totalUsersCount={totalUsersCount} />
        {isLoading ? <Preloader /> : <div>{usersPerPage}</div>}
        <Pagination
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChanged={onPageChanged}
        />
      </div>
    );
  }
);
