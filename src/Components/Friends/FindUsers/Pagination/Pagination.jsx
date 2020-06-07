import React from "react";
import {nanoid} from "nanoid";
import s from "../FindUsers.module.css";
import "./Pagination.module.css"

export const Pagination = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize),
      pages = [];

  for (let i = 1; i <= pagesCount; i++) { pages.push(i)}

  {/*Мапим масив и создаем на его основе нужное количество кнопок для страниц*/}
  let pagesButtons = pages.map(p => {
    return <span onClick={(e) => {props.onPageChanged(p);}}
                 key={nanoid(5)}
                 className={props.currentPage === p && s.selectedPageCounter}> {p} </span>
  })

  return pagesButtons

}