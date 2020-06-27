import React from 'react';
import { Profile } from "./Profile";
import { setUserProfile } from "../../Redux/Actions/profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProfile } from '../../Redux/Reducers/profile';
import { Preloader } from '../Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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

let ProfileContainerWithRedirect = withAuthRedirect(ProfileAPIContainer)

export const ProfileContainer = withRouter(connect(mapStateToProps, { setUserProfile, setProfile })(ProfileContainerWithRedirect));

