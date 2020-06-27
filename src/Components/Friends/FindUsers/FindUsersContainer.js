import { connect } from "react-redux";
import {
	follow,
	unfollow,
	setCurrentPage,
	followProcessing
} from "../../../Redux/Actions/findUser";
import React from "react";
import { FindUsersHeader } from "./FindUsersHeader/FindUsersHeader";
import { Pagination } from "./Pagination/Pagination";
import { Preloader } from "../../Preloader/Preloader";
import { getUsers, followUser, unfollowUser } from '../../../Redux/Reducers/findUsers' //Санка яка обробляє запити на сервер за юзерами
import { FindUserItem } from "./FindUserItem/FindUserItem";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";


class FindUsersAPIContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNum) => {
		this.props.setCurrentPage(pageNum);
		this.props.getUsers(pageNum, this.props.pageSize);
	}

	render() {
		let usersPerPage = this.props.users.map(user => <FindUserItem key={user.id} user={user} follow={this.props.followUser}
			unfollow={this.props.unfollowUser} isFollowingProcessing={this.props.isFollowingProcessing} />)

		return (
			<>
				<FindUsersHeader />
				{this.props.isLoading ? <Preloader /> : <div>{usersPerPage}</div>}
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
	isLoading: state.findUsersPage.isLoading,
	isFollowingProcessing: state.findUsersPage.isFollowingProcessing,
});

export const FindUsersContainer = connect(mapStateToProps, {
	follow, unfollow, setCurrentPage, followProcessing,
	getUsers, followUser, unfollowUser
})(FindUsersAPIContainer);
