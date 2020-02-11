import React, {useState} from 'react';
import ReactHtmlParser from 'react-html-parser'
import styles from './Assignment.css'
import hoisting from "../../images/hoisting.jpg";

function Assignment(c){

    const subcategories = (assignment)=> {
        return Object.keys(assignment).map((key, i) =>{
            return(
                <div key={key} id={key.replace(/[^\w\d]/g, "").toLowerCase()}>
                    <div className={"title"}>
                        <i className={"material-icons-outlined i-marg-right"}>subdirectory_arrow_right</i>
                        <h2>{key}</h2>
                    </div>
                    {ReactHtmlParser(assignment[key])}
                    {i !== Object.keys(assignment).length-1 ? <hr className='cardhr'/> : null}
                </div>
            );
        });
    };

    return (
        Object.keys(c.assignment).map((e, ind) => (
            <div key={e} className={"assignments card"} id={e.replace(/[^\w\d]/g, "").toLowerCase()}>
                {subcategories(c.assignment[e])}
            </div>
        ))
    );
}

export default Assignment;