import React from "react";

const Sidebar = props => {
    return (
        Object.keys(props.assignment).map(key => (
            <li key={key}>
                <i className={"material-icons"}>arrow_right</i>
                <a href={"#" + key.replace(/[^\w\d]/g, '').toLowerCase()}>{key}</a>
            </li>
        ))
    )
};

export default Sidebar;