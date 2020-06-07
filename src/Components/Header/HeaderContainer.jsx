import React from "react"
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthData} from "../../Redux/Actions/authorization";

export class HeaderAPIContainer extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    })
        .then(response => {
          if(response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            this.props.setAuthData(id, email, login);
          }
        });
  }

  render() {
    return <Header { ...this.props } />
  }
}

let mapStateToProps = (state) => ({isAuth: state.auth.isAuth, login: state.auth.login})

export const HeaderContainer = connect(mapStateToProps, {setAuthData})(HeaderAPIContainer);



