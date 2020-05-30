import {connect} from "react-redux";
import {
  followActionCreator,
  setCurrentPageActionCreator, setLoading, setTotalUsersCount,
  setUsersActionCreators,
  unfollowActionCreator
} from "../../../Redux/Actions/findUser";
import React from "react";
import * as axios from "axios";
import {nanoid} from "nanoid";
import s from "./FindUsers.module.css";
import {FindUsersHeader} from "./FindUsersHeader/FindUsersHeader";
import {FindUserItem} from "./FindUserItem/FindUserItem";
import {Pagination} from "./Pagination/Pagination";
import {Preloader} from "../../Preloader/Preloader";

class FindUsersAPIContainer extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      //Делаем запрос при первой отрисовке странички(запрос будет сделан аавтоматически при переходе на эту страничку)
      this.props.setLoadingStatus(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
          .then(response => {
            this.props.setLoadingStatus(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
          });
    }
  }

  onPageChanged = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    this.props.setLoadingStatus(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setLoadingStatus(false)
          this.props.setUsers(response.data.items);
        });
  }

  render() {

    let usersPerPage = this.props.users.map(user => {
      let btnInfo = {
        btnText: user.follow ? "Unfollow" : "Follow",
        btnFunc: user.follow ? this.props.unfollow : this.props.followed
      }
      return <FindUserItem buttonInfo={btnInfo} key={nanoid(5)} user={user}/>
    });

    return (
        <>
          <FindUsersHeader/>
          {this.props.isLoading ? <Preloader /> : null}
          <Pagination totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged.bind(this)}/>
          {!this.props.isLoading ? <div>{usersPerPage}</div> : null}
        </>
    )
  }
}

let mapStateToProps = (state) => ({
      users: state.findUsersPage.users,
      pageSize: state.findUsersPage.pageSize,
      totalUsersCount: state.findUsersPage.totalUsersCount,
      currentPage: state.findUsersPage.currentPage,
      isLoading: state.findUsersPage.isLoading
    }),
    mapDispatchToProps = (dispatch) => ({
      followed: (userId) => dispatch(followActionCreator(userId)),
      unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
      setUsers: (users) => dispatch(setUsersActionCreators(users)),
      setCurrentPage: (page) => dispatch(setCurrentPageActionCreator(page)),
      setTotalUsersCount: (count) => dispatch(setTotalUsersCount(count)),
      setLoadingStatus: (isLoading) => dispatch(setLoading(isLoading))
    });

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersAPIContainer);
