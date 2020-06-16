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
import { usersAPI } from "../../../api/api.js";

class FindUsersAPIContainer extends React.Component {

	componentDidMount() {
		if (this.props.users.length === 0) {
			//Делаем запрос при первой отрисовке странички(запрос будет сделан аавтоматически при переходе на эту страничку)
			this.props.setLoading(true)
			usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
				.then(response => {
					this.props.setLoading(false);
					this.props.setUsers(response.items);
					this.props.setTotalUsersCount(response.totalCount);
				})
		}
	}

	onPageChanged = (pageNum) => {
		this.props.setCurrentPage(pageNum);
		this.props.setLoading(true)

		usersAPI.getUsers().then(data => {
			this.props.setLoading(false);
			this.props.setUsers(data.items);
		})
	}

	render() {

		let usersPerPage = this.props.users.map(user => {
			return <div key={nanoid(5)} className={s.userItem}>
				<div className={s.avatarWrapper}>
					<NavLink to={`/profile/${user.id}`}>
						<Avatar imageUrl={user.photos.small ? user.photos.small : basicAvatar} imageAlt="User avatar not available =(" width="80" />
					</NavLink>

					{
						user.followed
							? <Button color="default" variant="contained" onClick={() => {
								// НЕ РАБОТАЕТ. ПРИЧИНА: КРИВОЕ API
								usersAPI.deleteUser(user.id)
									.then(response => {
										if (response.resultCode === 0) {
											this.props.unfollow(user.id);
										}
									})
							}}>Unfollow</Button>
							: <Button color="default" variant="contained" onClick={() => {
								// РАБОТАЕТ
								axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
									withCredentials: true,
									headers: {
										"API-KEY": "fd89dee9-23c2-4f06-afb8-1c5e88912d81"
									}
								}).then(response => {
									if (response.data.resultCode === 0) {
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
