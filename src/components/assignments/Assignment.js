import React, {useState} from 'react';
import ReactHtmlParser from 'react-html-parser'
import styles from './Assignment.css'
import hoisting from "../../images/hoisting.jpg";

function Assignment(){
    let x = 1;
    const [state] = useState([
        {no: `Assignment ${x++}`}
        ]);

    const assignments = {
        "Hoisting" : "Hoisting is a term relative to an execution context and refers to when declared variables and" +
            " functions are 'moved' to the top of the code (aka stored in memory) to be referenced and used before they're " +
            "actually declared. See the below example from <a href='https://developer.mozilla.org/en-US/docs/Glossary/Hoisting' target='_blank'>MDN</a>" +
            " for more details.<BR>" +
            //"<img src='"+{hoisting}+"'>",
            `<img src='${hoisting}'>`,
        "Unary Operators" : "<span><b>Unary operators</b> are operations with only one operand and makes me think of CRUD " +
            "operations (create, read, update, delete) for variables and objects. Unary operands will return some sort of value upon" +
            "the completion of its operation and can negate, modify, or determine types of values. " +
            "Negation/increment operator types include the following</span>" +
            "<table><tbody>"+
            "<tr><td>'!'</td><td> Used to find a value's opposite</td></tr>" +
            "<tr><td>'~'</td><td> For rough estimation</td></tr>" +
            "<tr><td>'-'</td><td> Negative value</td></tr>" +
            "<tr><td>'+'</td><td> Positive Value</td></tr>" +
            "<tr><td>'++' </td><td>Increment by one</td></tr>" +
            "<tr><td>'--'</td><td> Decrement by one</td></tr>" +
            "<tr><td>'typeof'</td><td> Determines the data type</td></tr>" +
            "<tr><td>'void'</td><td> evaluates an expression without returning value</td></tr>" +
            "<tr><td>'delete'</td><td> Deletes variables or properties, returns boolean</td></tr>"+
            "</tbody></table>",
        "Values & Types" : "Javascript is considered a loosely typed or dynamic language, meaning you don't have to" +
            " specify a data type on each variable like you would in Java and that each variable can be reassigned to " +
            "a different data type. You can still only perform certain functions on each data type, though. For instance" +
            " you can't divide a string number by an integer without first explicitly parsing the string. The seven " +
            "primitive data types are as follows (not including Object):" +
            "<table><tbody>" +
            "<tr><td>boolean</td><td>True/False</td></tr>" +
            "<tr><td>null</td><td>does not exist</td></tr>" +
            "<tr><td>undefined</td><td>without value</td></tr>" +
            "<tr><td>number</td><td>numbers, negative or positive</td></tr>" +
            "<tr><td>bigint</td><td>larger storage for floating point numbers</td></tr>" +
            "<tr><td>string</td><td>literal array of characters</td></tr>" +
            "<tr><td>symbol</td><td>Unique values used for object property identification</td></tr>" +
            "</tbody></table>",
        "Video" : "<p>Hoisting</p><iframe src=\"https://www.youtube.com/embed/6HHI-Nlt9v4\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
                    + "<p>Unary Operators and Data Types</p><iframe src=\"https://www.youtube.com/embed/EUBH6DzkKrU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
    };

    const subcategories = ()=> {
        return Object.keys(assignments).map((key, i) =>{
            return(
                <div key={key}>
                    <h2>{key}</h2>
                    {ReactHtmlParser(assignments[key])}
                </div>
            );
        });
    };

    return (
        state.map((e, ind) => (
            <div key={e.no} className={"card"}>
                <div className={"assignmentheader"}>
                    <i className={"material-icons-outlined i-marg-right"}>insert_drive_file</i>
                    <h2>{e.no}</h2>
                </div>
                <hr className={"cardhr"}/>
                {subcategories()}
            </div>
        ))
    );

}

export default Assignment;