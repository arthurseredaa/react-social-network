import React from 'react';
import s from './FindUsers.module.css';
import {nanoid} from 'nanoid';
import * as axios from "axios";
import basicAvatar from '../../../assets/images/basic-avatar.png';
import Button from "@material-ui/core/Button";
import {Avatar} from "../../Avatar/Avatar";


export class FindUsers extends React.Component {
  constructor(props) {
    super(props);
    // alert('NEW'); — можна использовать этот алерт чтобы увидеть момент создания экземпляра класа, после этого реакт берет JSX
    //Делаем запрос при первой отрисовке странички(запрос будет сделан аавтоматически при переходе на эту страничку)
    if (this.props.users.length === 0) {
      axios.get("http://jsonplaceholder.typicode.com/users")
          .then(response => {
            console.log(response.data);
            this.props.setUsers(response.data);
          });
    }
  }

  render() {
    return (
        <>
          <div className={s.findUsersHeader}>
            <input type="text"/>
            <Button variant="contained" color="secondary">Search</Button>
          </div>
          <div className={s.findUsersContent}>
            {
              this.props.users.map(user => {
                let btnInfo = {
                  btnText: user.follow ? "Unfollow" : "Follow",
                  btnFunc: user.follow ? this.props.unfollow : this.props.followed
                }
                return (
                    <div key={nanoid(5)}>
                      <div className={'avatarWrapper'}>
                        <Avatar imageUrl={user.photos ? user.photos.small : basicAvatar} width={'80'} imageAlt={'user avatar'}/>

                        <Button color="default" variant="contained" onClick={() => btnInfo.btnFunc(user.id)}>{btnInfo.btnText}</Button>
                      </div>
                      <div className="textInfo">
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                      </div>
                      <div className="location">
                        <p>{user.address.city}</p>
                        <p>{user.address.street}</p>
                      </div>
                    </div>
                )
              })
            }
          </div>
        </>
    )
  }
}