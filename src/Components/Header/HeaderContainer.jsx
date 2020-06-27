import React from "react"
import { Header } from "./Header";
import { connect } from "react-redux";
import { setAuthData } from "../../Redux/Actions/authorization";
import { userAuthorization } from "../../Redux/Reducers/authorization";

export class HeaderAPIContainer extends React.Component {

	componentDidMount() {
		this.props.userAuthorization();
	}

	render() {
		return <Header {...this.props} />
	}
}

let mapStateToProps = (state) => ({ isAuth: state.auth.isAuth, login: state.auth.login })

export const HeaderContainer = connect(mapStateToProps, { setAuthData, userAuthorization })(HeaderAPIContainer);



