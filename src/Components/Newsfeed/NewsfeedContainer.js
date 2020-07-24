import { Newsfeed } from "./Newsfeed";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

export const NewsfeedContainer = compose(withAuthRedirect)(Newsfeed);
