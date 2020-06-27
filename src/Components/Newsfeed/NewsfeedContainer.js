import { Newsfeed } from "./Newsfeed";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => ({ isAuth: state.auth.isAuth })

let NewsfeedWithRedirect = withAuthRedirect(Newsfeed);

export let NewsfeedContainer = connect(mapStateToProps, {})(NewsfeedWithRedirect)

