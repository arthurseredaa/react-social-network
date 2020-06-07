import React from "react";
import {nanoid} from 'nanoid';
import {Avatar} from "../../../Avatar/Avatar";
import s from './FindUserItem.module.css';
import Button from "@material-ui/core/Button";
import basicAvatar from '../../../../assets/images/basic-avatar.png';
import {NavLink} from "react-router-dom";
import axios from "axios";

const FindUserItem = (props) => {

  return (
    <div key={nanoid(5)} className={s.userItem}>
      <div className={s.avatarWrapper}>
        <NavLink to={`/profile/${props.user.id}`}>
          <Avatar imageUrl={props.user.photos.small ? props.user.photos.small : basicAvatar} imageAlt="User avatar not available =(" width="80"/>
        </NavLink>
        {
          props.user.follow
              ? <Button color="default" variant="contained" onClick={() => {
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "07fe285a-0fda-4026-afda-163cf1cdc216"
                  }
                }).then(response => {
                  console.log(response);
                  return response.data.resultCode === 0 ? props.unfollow(props.user.id) : null
                })
              }}>Unfollow</Button>
              : <Button color="default" variant="contained" onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,{}, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "07fe285a-0fda-4026-afda-163cf1cdc216"
                  }
                }).then(response => {
                  console.log(response);
                  return response.data.resultCode === 0 ? props.follow(props.user.id) : null
                })
              }}>Follow</Button>
        }
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