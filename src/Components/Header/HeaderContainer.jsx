import React from "react"
import { Header } from "./Header";
import { connect } from "react-redux";
import { setAuthData } from "../../Redux/Actions/authorization";
import { authAPI } from "../../api/api";

export class HeaderAPIContainer extends React.Component {

	componentDidMount() {
		authAPI.me()
			.then(data => {
				if (data.resultCode === 0) {
					let { id, login, email } = data.data;
					this.props.setAuthData(id, email, login);
				}
			})
	}

	render() {
		return <Header {...this.props} />
	}
}

let mapStateToProps = (state) => ({ isAuth: state.auth.isAuth, login: state.auth.login })

export const HeaderContainer = connect(mapStateToProps, { setAuthData })(HeaderAPIContainer);



