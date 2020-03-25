import React from 'react';
import ReactHtmlParser from 'react-html-parser'
import './Assignment.css'

const Assignment = (props) => {
    return (
        Object.keys(props.assignment).map((key, ind) => (
            <div key={key} className={"assignments card"} id={key.replace(/[^\w\d]/g, "").toLowerCase()}>
                <div className={"title"}>
                    <i className={"material-icons-outlined i-marg-right"}>subdirectory_arrow_right</i>
                    <h2>{key}</h2>
                </div>
                <hr className={"cardhr"}/>
                {ReactHtmlParser(props.assignment[key])}
            </div>
        ))
    );
};

export default Assignment;