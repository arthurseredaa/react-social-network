import React from 'react';
import s from './FindUsers.module.css';
import {FindUserItem} from "./FindUserItem/FindUserItem";
import {nanoid} from 'nanoid';
import * as axios from "axios";
import basicAvatar from '../../../assets/images/basic-avatar.png';

const FindUsers = (props) => {


  if (props.users.length === 0) {
    axios.get("http://jsonplaceholder.typicode.com/users")
        .then(response => {
          console.log(response.data);
          props.setUsers(response.data);
        });
  }
  let btnInfo;
  return (
      <>
        <div className={s.findUsersHeader}>
          <input type="text"/>
          <button>Search</button>
        </div>
        <div className={s.findUsersContent}>
          {
            props.users.map(user => {
              user.follow ? btnInfo = {btnText: "Unfollow", btnFunc: props.unfollow} :
                  btnInfo = {btnText: "Follow", btnFunc: props.followed};
              return <FindUserItem imageUrl={user.photos !== undefined ? user.photos.small : basicAvatar}
                                   key={nanoid(5)} name={user.name} description={user.email}
                                   location={user.address} userId={user.id} buttonInfo={btnInfo}/>
            })
          }
        </div>
      </>
  )
}

export {
  FindUsers
}