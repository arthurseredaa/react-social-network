import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../Redux/Actions/profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileAPIContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 8526;
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
          this.props.setUserProfile(response.data);
        })
  }

  render() {
    return <Profile  { ...this.props } profile={ this.props.profile } />
  }
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile})

export const ProfileContainer = withRouter(connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer));

