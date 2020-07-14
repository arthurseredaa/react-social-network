import { Sidebar } from "./Sidebar";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
  links: state.sidebar.links,
  profileId: state.auth.id,
});

export const SidebarContainer = withRouter(connect(mapStateToProps)(Sidebar));
