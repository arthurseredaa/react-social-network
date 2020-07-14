import {
  userLogin,
  userAuthorization,
} from "./../../Redux/Reducers/authorization";
import { Login } from "./Login";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userId: state.auth.id,
  isLoading: state.auth.isLoading,
});

export const LoginContainer = connect(mapStateToProps, {
  userLogin,
  userAuthorization,
})(Login);
