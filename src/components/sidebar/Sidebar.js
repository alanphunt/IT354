import React from "react";
import {SidebarScript} from "../../SidebarScript";

class Sidebar extends React.Component{
    componentDidMount() {
        SidebarScript();
    }

    render() {
        return (
            Object.keys(this.props.assignment).map(key => (
                <li key={key}>
                    <i className={"material-icons"}>arrow_right</i>
                    <a href={"#" + key.replace(/[^\w\d]/g, '').toLowerCase()}>{key}</a>
                </li>
            ))
        )
    }
}

export default Sidebar;