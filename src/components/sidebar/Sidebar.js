import React from "react";

const Sidebar = c => {
    let keys = [];

    for(let i = 0; i < Object.keys(c.assignment).length; i++){
        let arr = Object.keys(Object.entries(c.assignment)[i][1]);
        for(let j = 0; j < Object.keys(arr).length; j++){
            keys.push(arr[j]);
        }
    }

    return (
       keys.map((v, i) => (
            <li key={v}>
                <i className={"material-icons"}>arrow_right</i>
                <a href={"#" + v.replace(/[^\w\d]/g, '').toLowerCase()}>{v}</a>
            </li>
        )))
};

export default Sidebar;