import React, { useEffect } from 'react';
import { Profile } from "./Profile";
import { setUserProfile, setStatusText, editStatusText, cancelSetStatus } from "../../Redux/Actions/profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProfile } from '../../Redux/Reducers/profile';
import { Preloader } from '../Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { setStatus, updateStatus } from '../../Redux/Reducers/profile'

const ProfileAPIContainer = (props) => {
	useEffect(() => {
		let userId = props.match.params.userId;
		if (!userId) {
			userId = props.authId;
		}
		props.setProfile(userId);
		props.setStatus(userId);
	}, [props.authId]);

	useEffect(() => {
		props.setProfile(props.match.params.userId);
	}, [props.match.params.userId])

	return (
		props.isLoading ? <Preloader /> : <Profile clickedUserId={props.match.params.userId}  {...props} />
	)
}


let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isLoading: state.profilePage.profileLoading,
	statusText: state.profilePage.profileInfo.statusText,
	newStatusText: state.profilePage.profileInfo.newStatusText,
	authId: state.auth.id
})

export const ProfileContainer = compose(withRouter, withAuthRedirect, connect(mapStateToProps,
	{ setUserProfile, setProfile, setStatusText, editStatusText, cancelSetStatus, setStatus, updateStatus }))(ProfileAPIContainer)



