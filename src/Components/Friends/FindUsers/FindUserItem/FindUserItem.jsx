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
        <Avatar imageUrl="https://workmacro.com/wp-content/uploads/2018/02/1-by-1-1024x1024.png" imageAlt="Alt" width="80"/>
        {/*<button onClick={onFollowClick}>{props.buttonInfo.btnText}</button>*/}
        <Button color="default" variant="contained" onClick={onFollowClick}>{props.buttonInfo.btnText}</Button>
      </div>
      <div className={s.textInfo}>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
      </div>
      <div>
        <p>{`${props.location.city}, ${props.location.country}`}</p>
      </div>
    </div>
  )
}

export {
  FindUserItem
}