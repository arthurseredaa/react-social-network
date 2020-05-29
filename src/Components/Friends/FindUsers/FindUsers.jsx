import React from 'react';
import s from './FindUsers.module.css';
import "./FindUsers.module.css";
import {nanoid} from 'nanoid';
import * as axios from "axios";
import basicAvatar from '../../../assets/images/basic-avatar.png';
import Button from "@material-ui/core/Button";
import {Avatar} from "../../Avatar/Avatar";


export class FindUsers extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      //Делаем запрос при первой отрисовке странички(запрос будет сделан аавтоматически при переходе на эту страничку)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
          .then(response => {
            console.log(response)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
          });
    }
  }

  onPageChanged = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
        });
  }

  render() {
    //Расчитываем количество страниц для создания нужного количества кнопок
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize),
        pages = [];
    //Пуш в масив значений
    for(let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
        <>
          <div>
            {/*Мапим масив и создаем на его основе нужное количество кнопок для страниц*/}
            {pages.map(p => {
              return <span onClick={(e) => {this.onPageChanged(p);}}
                           key={nanoid(5)}
                           className={ this.props.currentPage === p && s.selectedPageCounter }> { p } </span>
            })}
          </div>
          <div className={ s.findUsersHeader }>
            <input type="text"/>
            <Button variant="contained" color="secondary">Search</Button>
          </div>
          <div className={ s.findUsersContent }>
            {
              this.props.users.map(user => {
                let btnInfo = {
                  btnText: user.follow ? "Unfollow" : "Follow",
                  btnFunc: user.follow ? this.props.unfollow : this.props.followed
                }
                return (
                    <div key={nanoid(5)}>
                      <div className={'avatarWrapper'}>
                        <Avatar imageUrl={user.photos.small !== null ? user.photos.small : basicAvatar} width={'80'} imageAlt={'user avatar'}/>

                        <Button color="default" variant="contained" onClick={() => btnInfo.btnFunc(user.id)}>{btnInfo.btnText}</Button>
                      </div>
                      <div className="textInfo">
                        <h4>{user.name}</h4>
                        <p>user.email</p>
                      </div>
                      <div className="location">
                        <p>user.address.city</p>
                        <p>user.address.street</p>
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