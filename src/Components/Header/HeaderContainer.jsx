import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { userLogout } from "../../Redux/Reducers/authorization";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

export const HeaderAPIContainer = (props) => {
  return <Header {...props} />;
};

export const HeaderContainer = compose(
  withRouter,
  withAuthRedirect,
  connect(null, { userLogout })
)(HeaderAPIContainer);
