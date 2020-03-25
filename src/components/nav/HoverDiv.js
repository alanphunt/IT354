import React from "react";

const HoverDiv = (props) =>{
    let classname = "hoverdiv";
    classname += (props.hovered || props.isActive ? " hoverdivactive" : "");
    return (
        <div className={classname}>
            <div className="arrow-up"/>
        </div>
    )
};

export default HoverDiv;