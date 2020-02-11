import React, {useEffect} from 'react';
import Assignments from '../components/assignments/Assignment'
import Sidebar from '../components/sidebar/Sidebar'
import hoisting from "../images/hoisting.jpg";
import {deferonload} from "../tutorialScripts";

const assignments = {
    "Assignment 1": {
        "Hoisting": "<p>Hoisting is a term relative to an execution context and refers to when declared variables and" +
            " functions are 'moved' to the top of the code (aka stored in memory) to be referenced and used before they're " +
            "actually declared.</p><p>See the below example from <a href='https://developer.mozilla.org/en-US/docs/Glossary/Hoisting' target='_blank'>MDN</a>" +
            " for more details.</p><BR>" +
            //`<img src='${hoisting}'>`,
            `<pre>
        //Example 1 - Does not hoist
        var x = 1; // Initialize x
        console.log(x + " " + y); // '1 undefined'
        var y = 2; // Initialize y
        //This will not work as JavaScript only hoists declarations
        
        //Example 2 - Hoists
        var num1 = 3; //Declare and initialize num1
        num2 = 4; //Initialize num2
        console.log(num1 + " " + num2); //'3 4'
        var num2; //Declare num2 for hoisting
        
        //Example 3 - Hoists
        a = 'Cran'; //Initialize a
        b = 'berry'; //Initialize b
        console.log(a + "" + b); // 'Cranberry'
        var a, b; //Declare both a & b for hoisting
        
            </pre>`,
        "Unary Operators": "<p><b>Unary operators</b> are operations with only one operand and makes me think of CRUD " +
            "operations (create, read, update, delete) for variables and objects. Unary operands will return some sort of value upon" +
            "the completion of its operation and can negate, modify, or determine types of values. " +
            "Negation/increment operator types include the following</p>" +
            "<table><tbody>" +
            "<tr><td>'!'</td><td> Used to find a value's opposite</td></tr>" +
            "<tr><td>'~'</td><td> For rough estimation</td></tr>" +
            "<tr><td>'-'</td><td> Negative value</td></tr>" +
            "<tr><td>'+'</td><td> Positive Value</td></tr>" +
            "<tr><td>'++' </td><td>Increment by one</td></tr>" +
            "<tr><td>'--'</td><td> Decrement by one</td></tr>" +
            "<tr><td>'typeof'</td><td> Determines the data type</td></tr>" +
            "<tr><td>'void'</td><td> evaluates an expression without returning value</td></tr>" +
            "<tr><td>'delete'</td><td> Deletes variables or properties, returns boolean</td></tr>" +
            "</tbody></table>",
        "Values and Types": "<p>Javascript is considered a loosely typed or dynamic language, meaning you don't have to" +
            " specify a data type on each variable like you would in Java and that each variable can be reassigned to " +
            "a different data type. You can still only perform certain functions on each data type, though. For instance" +
            " you can't divide a string number by an integer without first explicitly parsing the string. The seven " +
            "primitive data types are as follows (not including Object):</p>" +
            "<table><tbody>" +
            "<tr><td>boolean</td><td>True/False</td></tr>" +
            "<tr><td>null</td><td>does not exist</td></tr>" +
            "<tr><td>undefined</td><td>without value</td></tr>" +
            "<tr><td>number</td><td>numbers, negative or positive</td></tr>" +
            "<tr><td>bigint</td><td>larger storage for floating point numbers</td></tr>" +
            "<tr><td>string</td><td>literal array of characters</td></tr>" +
            "<tr><td>symbol</td><td>Unique values used for object property identification</td></tr>" +
            "</tbody></table>",
        "Video Summary: Hoisting, Unary, and Types": "<iframe src=\"https://www.youtube.com/embed/6HHI-Nlt9v4\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
            + "<iframe src=\"https://www.youtube.com/embed/EUBH6DzkKrU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
    },
    "Assignment 2": {"What is ECMAScript?": "<p>In the beginning, ECMA, or European Computer Manufacturers Association," +
            " held its first meeting on April 27th, 1960 in order to form standards for the emerging field of" +
            " computing machines.</p><p>It was realized there was no collaboration on standards between the " +
            "companies manufacturing computers and such a lack of standards would create incompatibilities " +
            "in operations and coding, not just internationally but also just between brands. </p>" +
            "<p>We'll primarily be concerned with the Technical Committee and Task Group TC39 of ECMA International that" +
            " deals with maintaining and updating standards for the ECMAScript programming language aka JavaScript" +
            "(trademarked by Oracle). ECMA started implementing standards on JavaScript with the first edition being" +
            " accepted by the Ecma General Assembly in 1997 ongoing to the most recent being the 10th edition published" +
            " back in June 2019. After about the third edition of ECMAScript is when nearly all browsers fully " +
            "supported the adoption of JavaScript. Since then, ECMA has been defining procedural, compilation, " +
            "library, and syntactical standards for the language and has just recently began making these improvements" +
            " and updates on a yearly basis beginning in 2016.</p> <p>The efforts of ECMA International from the past " +
            " 60 years have set the stage for the explosion of the JavaScript language, allowing the World Wide Web" +
            " and web browsers to reach further and accomplish more than initially thought possible. JavaScript now " +
            "lives in a full-stack world being seen both in front end DOM manipulation and server-side scripting, as " +
            "well as even being incorporated into embedded systems and everything in-between. ECMA International has " +
            "brought forth the possibilities of unified technology and what we can accomplish when the world is " +
            "connected.</p>" +
            "<h3>Sources</h3>" +
            "<p><a href='https://www.ecma-international.org/memento/history.htm'>ECMA International History</a><br>" +
            "<a href='https://www.ecma-international.org/ecma-262/10.0/index.html#Title'>ECMA 262 Publication</a></p>",
            "Functions": "<p>Functions are the bread and butter of JavaScript and are core to " +
                "any interactive website or web application, let alone any programming language. Functions define " +
                "certain lines of code that work together to produce a specified output and can be used over and over " +
                "again. Let's dive into the syntax, some use cases, and quirks of JavaScript functions. </p>" +
                `<p><pre>
        function namePicker(childName){
            return {
            boy: 'Alan',
            girl: 'Allison'
            }[childName];
        }
            </pre></pre><p>Here we've declared a function that can be called by its name- namePicker. It takes in a 
            parameter labeled 'childName' and depending on its value, either 'boy' or 'girl', it will return the value 
            associated to that key within the object, either 'Alan' or 'Allison'. Now let's call the function into
            action.</p><p><pre>
        namePicker('boy');
        //returns Alan
        namePicker('girl');
        //returns Allison
        
            </pre></p><p>Okay, great! We can now call that function anytime we need to retrieve those names and if the names were 
            to ever change then we'd only have to change them in the function and it'll take care of the rest. Let's see what it 
            looks like to assign a function's return value to a variable and use that variable in another function that uses the fat arrow syntax
            and an advanced AI algorithm that will automagically determine the name's gender!</p><p><pre>
        const namePicker = function(childName){
            return {
            boy: 'Alan',
            girl: 'Allison'
            }[childName];
        };
        
        const determineGender = (name) => {
            return \`Bee boop. Sounds like a 
            \${name === 'Alan' ? "male" : 'female'}'s name!\`;
        };
        
        determineGender(namePicker('boy'));
        //'Bee boop. Sounds like a male's name!'
        
            </pre></p><p>Isn't technology great? Advanced, reusable AI right in your browser. Let's keep the ball rolling here. Not
            to get political but the example I randomly came up with also works well with explaining optional parameters and default
            values. Let's take a look using our previous functions. </p><p><pre>
        const namePicker = function(childName = undefined){
            return {
            boy: 'Alan',
            girl: 'Allison',
            undefined: 'They'
            }[childName];
        };
        
        const determineGender = (name) => {
            return \`Bee boop. Sounds like a 
                \${name === 'Alan'
                 ? "male's"
                 : name === 'Allison'
                    ? "female's"
                    : 'they'}
                name!\`;
             };
        
        determineGender(namePicker());
        //'Bee boop. Sounds like a they name!'
        
            </pre></p>
            <p>So in our namePicker function in the parameters list we initialized the argument 'childName' to equal
            undefined. This will be overridden upon user specification, but if it isn't we at least can set its default value
             and work with it within the function. When we call namePicker() we omit passing a parameter so the function returns
            the value 'They' which it then passes into the determineGender function and our ternary operator correctly outputs
            the corresponding response.</p><p>So now let's take a look at nested functions, scoping, and rest parameters.</p>
            <p><pre>
        const equations = (type, ...rest) => {
            switch(type){
                case 'add':
                    add(...rest);
                break;
                case 'multiply':
                    multiply(...rest);
                break;
                default: break;
            }
            let sum = 0;
            
            function add(...args){
                sum = args.map(()=>{};
                for(let x of args){
                    sum += x;
                }
            }
            
            function multiply(...args){
                sum = 1;
                for(let x of args){
                    sum *= x;
                }
            }
            return sum;
        };
        
        equations('add', 1,2,3);
        //6
        equations('multiply', 2,2,2);
        //8
        
            </pre></p><p>Let's break this down. So our parent function 'equations' takes in a 'type' that represents what
            type of equation we should perform based on a switch statement. Then, depending on what equation, 'equations' has two
            nested functions within it to reference. These nested functions can access the variable 'sum' defined within the parent 
             function and set its value so the parent function can return it. Though, if there were a variable defined within a nested
             function the parent function wouldn't actually be able to access it. This is called function scope. </p><p>
             Next up we see the '...rest' argument in the 'equations' function. This represents an arbitrary amount of arguments that
             is essentially joined to an iterable array which the nested functions loop through to add or multiply all its values.
             This is called rest parameters!
            </p>`,
    "Video Summary: Functions" : "<iframe src=\"https://www.youtube.com/embed/K5TAU1Vp0CA\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"}
};


function Tutorials() {
    useEffect(() => {
        deferonload();
    });

  return (
      <div className={"content assignmentContent"}>
          <div className={"assignmentContainer"}>
              <Assignments assignment={assignments}/>
          </div>

          <div className={"card"} id={"sidebar"}>
              <ul>
                 <Sidebar assignment={assignments}/>
              </ul>
          </div>
      </div>
  );
}
export default Tutorials;