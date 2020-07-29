import React from "react";
import { nanoid } from "nanoid";
import s from "./Pagination.module.css";
import "./Pagination.module.css";

export const Pagination = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize),
    pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let pagesButtons = pages.map((p) => {
    return (
      <span
        onClick={(e) => {
          onPageChanged(p);
        }}
        key={nanoid(5)}
        className={
          currentPage === p ? s.selectedPageCounter : s.paginationButton
        }
      >
        {" "}
        {p}{" "}
      </span>
    );
  });

  return pagesButtons;
};
