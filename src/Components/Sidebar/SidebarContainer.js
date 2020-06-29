import { Sidebar } from "./Sidebar";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	links: state.sidebar.links,
	profileId: state.auth.id
})

export const SidebarContainer = connect(mapStateToProps)(Sidebar);

