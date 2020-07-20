import {
  userLogin,
  userAuthorization,
} from "./../../Redux/Reducers/authorization";
import { Login } from "./Login";
import { connect } from "react-redux";

export const LoginContainer = connect(null, {
  userLogin,
  userAuthorization,
})(Login);
