import React from "react";
import {nanoid} from 'nanoid';
import {Avatar} from "../../../Avatar/Avatar";
import s from './FindUserItem.module.css';
import Button from "@material-ui/core/Button";

const FindUserItem = (props) => {
  const onFollowClick = () => {
    props.buttonInfo.btnFunc(props.userId);
  }

  return (
    <div key={nanoid(5)} className={s.userItem}>
      <div className={s.avatarWrapper}>
        <Avatar imageUrl={props.imageUrl} imageAlt="Alt" width="80"/>
        {/*<button onClick={onFollowClick}>{props.buttonInfo.btnText}</button>*/}
        <Button color="default" variant="contained" onClick={onFollowClick}>{props.buttonInfo.btnText}</Button>
      </div>
      <div className={s.textInfo}>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
      </div>
      <div className={s.location}>
        <p>{`${props.location.city},`}</p>
        <p>{`${props.location.street}`}</p>
      </div>
    </div>
  )
}

export {
  FindUserItem
}