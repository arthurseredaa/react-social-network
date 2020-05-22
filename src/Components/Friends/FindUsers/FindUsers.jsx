import React from 'react';
import s from './FindUsers.module.css';
import {FindUserItem} from "./FindUserItem/FindUserItem";
import {nanoid} from 'nanoid';

const FindUsers = (props) => {
  let btnInfo;
    return (
        <>
            <div className={ s.findUsersHeader }>
                <input type="text"/>
                <button>Search</button>
            </div>
            <div className={ s.findUsersContent }>
              {
                props.users.map(user => {
                  user.follow ? btnInfo = { btnText: "Unfollow", btnFunc: props.unfollow } :
                                btnInfo = { btnText: "Follow", btnFunc: props.followed };
                  return <FindUserItem key={nanoid(5)} name={user.name} description={user.description} location={user.location} userId={user.id} buttonInfo={btnInfo}/>
                })
              }
            </div>
        </>
    )
}

export {
    FindUsers
}