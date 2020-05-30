import React from "react";
import {nanoid} from 'nanoid';
import {Avatar} from "../../../Avatar/Avatar";
import s from './FindUserItem.module.css';
import Button from "@material-ui/core/Button";
import basicAvatar from '../../../../assets/images/basic-avatar.png';

const FindUserItem = (props) => {

  return (
    <div key={nanoid(5)} className={s.userItem}>
      <div className={s.avatarWrapper}>
        <Avatar imageUrl={props.user.photos.small ? props.user.photos.small : basicAvatar} imageAlt="User avatar not available =(" width="80"/>
        <Button color="default" variant="contained" onClick={() => props.buttonInfo.btnFunc(props.user.id)}>{props.buttonInfo.btnText}</Button>
      </div>
      <div className={s.textInfo}>
        <h4>{props.user.name}</h4>
        <p>props.description</p>
      </div>
      <div className={s.location}>
        <p>props.location.city</p>
        <p>props.location.street</p>
      </div>
    </div>
  )
}

export {
  FindUserItem
}