import {Sidebar} from "./Sidebar";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({links: state.sidebar.links})

const SidebarContainer = connect(mapStateToProps, {})(Sidebar);

export {
    SidebarContainer
};