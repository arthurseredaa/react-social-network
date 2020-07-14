import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { setAuthData } from "../../Redux/Actions/authorization";
import {
  userAuthorization,
  userLogout,
} from "../../Redux/Reducers/authorization";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

export const HeaderAPIContainer = (props) => {
  return <Header {...props} />;
};

// let mapStateToProps = (state) => ({
//   isAuth: state.auth.isAuth,
//   login: state.auth.login,
// });

export const HeaderContainer = compose(
  withRouter,
  withAuthRedirect,
  connect(null, { setAuthData, userAuthorization, userLogout })
)(HeaderAPIContainer);
