import React from 'react';
import ReactHtmlParser from 'react-html-parser'
import './Assignment.css'

/*function Assignment(props){

    const subcategories = (assignment) => {
        console.log(assignment[Object.keys(assignment)[0]]);
        return Object.keys(assignment).map((key, i) => {
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
            <div className={"assignments card"}>
                {subcategories(props.assignment)}
            </div>
    );
}*/

/*function Assignment(props){
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
}*/

function Assignment(props){
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
}

export default Assignment;