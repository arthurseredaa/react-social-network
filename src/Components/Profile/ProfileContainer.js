import React from 'react';
import { Profile } from "./Profile";
import { setUserProfile } from "../../Redux/Actions/profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProfile } from '../../Redux/Reducers/profile';
import { Preloader } from '../Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileAPIContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 8526;
		}
		this.props.setProfile(userId)
	}
	render() {
		return this.props.isLoading ? <Preloader /> : <Profile  {...this.props} profile={this.props.profile} />
	}
}


let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isLoading: state.profilePage.profileLoading
})

export const ProfileContainer = compose(withRouter, withAuthRedirect, connect(mapStateToProps, { setUserProfile, setProfile }))(ProfileAPIContainer)



