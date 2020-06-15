import { connect } from "react-redux";
import {
	follow,
	setCurrentPage,
	setLoading,
	setTotalUsersCount,
	setUsers,
	unfollow
} from "../../../Redux/Actions/findUser";
import React from "react";
import * as axios from "axios";
import { nanoid } from "nanoid";
import { FindUsersHeader } from "./FindUsersHeader/FindUsersHeader";
import { Pagination } from "./Pagination/Pagination";
import { Preloader } from "../../Preloader/Preloader";
import s from "./FindUserItem/FindUserItem.module.css";
import { NavLink } from "react-router-dom";
import { Avatar } from "../../Avatar/Avatar";
import basicAvatar from "../../../assets/images/basic-avatar.png";
import Button from "@material-ui/core/Button";

class FindUsersAPIContainer extends React.Component {

	componentDidMount() {
		if (this.props.users.length === 0) {
			//Делаем запрос при первой отрисовке странички(запрос будет сделан аавтоматически при переходе на эту страничку)
			this.props.setLoading(true)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
				withCredentials: true,
				headers: {
					"API-KEY": "07fe285a-0fda-4026-afda-163cf1cdc216"
				}
			})
				.then(response => {
					this.props.setLoading(false);
					this.props.setUsers(response.data.items);
					this.props.setTotalUsersCount(response.data.totalCount);
				});
		}
	}

	onPageChanged = (pageNum) => {
		this.props.setCurrentPage(pageNum);
		this.props.setLoading(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`, {
			withCredentials: true,
			headers: {
				"API-KEY": "07fe285a-0fda-4026-afda-163cf1cdc216"
			}
		})
			.then(response => {
				console.log(response)
				this.props.setLoading(false)
				this.props.setUsers(response.data.items);
			});
	}

	render() {

		let usersPerPage = this.props.users.map(user => {
			return <div key={nanoid(5)} className={s.userItem}>
				<div className={s.avatarWrapper}>
					<NavLink to={`/profile/${user.id}`}>
						<Avatar imageUrl={user.photos.small ? user.photos.small : basicAvatar} imageAlt="User avatar not available =(" width="80" />
					</NavLink>
					{/*Да, я знаю что в коде ниже черт ногу поломает, но из-за того что у меня не получалось по нормальному реализовать подписку, я повторил за Димычем*/}
					{
						user.followed
							? <Button color="default" variant="contained" onClick={() => {
								axios.delete(`https://social-network.samuraijs.com/api/1.0/unfollow/${user.id}`, {
									withCredentials: true,
									headers: {
										"API-KEY": "07fe285a-0fda-4026-afda-163cf1cdc216"
									}
								}).then(response => {
									console.log(response)
									if (response.data.resultCode === 0) {
										console.log('unfollow', response);
										this.props.unfollow(user.id)
									}
								})
							}}>Unfollow</Button>
							: <Button color="default" variant="contained" onClick={() => {
								axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
									withCredentials: true,
									headers: {
										"API-KEY": "07fe285a-0fda-4026-afda-163cf1cdc216"
									}
								}).then(response => {
									if (response.data.resultCode === 0) {
										console.log('follow', response);
										this.props.follow(user.id)
									}
								})
							}}>Follow</Button>
					}
				</div>
				<div className={s.textInfo}>
					<h4>{user.name}</h4>
					<p>props.description</p>
				</div>
				<div className={s.location}>
					<p>props.location.city</p>
					<p>props.location.street</p>
				</div>
			</div>
		});

		return (
			<>
				<FindUsersHeader />
				{this.props.isLoading ? <Preloader /> : null}
				{!this.props.isLoading ? <div>{usersPerPage}</div> : null}
				<Pagination totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged.bind(this)} />
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
});

export const FindUsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setLoading })(FindUsersAPIContainer);
