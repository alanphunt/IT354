import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Route, Switch} from "react-router-dom";
import Tutorials from "./pages/Tutorials";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {deferonload} from './CustomScripts';

function App(){
      useEffect(() => {
          deferonload();
      });

      const assignmentList = {
          "assignment1": {
              "Hoisting":
                  "<p>Hoisting is a term relative to an execution context and refers to when declared variables and" +
                  " functions are 'moved' to the top of the code (aka stored in memory) to be referenced and used before they're " +
                  "actually declared.</p>"+
                  "<p>See the below example from <a href='https://developer.mozilla.org/en-US/docs/Glossary/Hoisting' target='_blank'>MDN</a>" +
                  " for more details.</p>" +
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
              "Unary Operators":
                  "<p><b>Unary operators</b> are operations with only one operand and makes me think of CRUD " +
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
              "Values and Types":
                  "<p>Javascript is considered a loosely typed or dynamic language, meaning you don't have to" +
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
              "Video Summary: Hoisting, Unary, and Types":
                  "<iframe src=\"https://www.youtube.com/embed/6HHI-Nlt9v4\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"+
                  "<iframe src=\"https://www.youtube.com/embed/EUBH6DzkKrU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
          },
          "assignment2": {
              "What is ECMAScript?":
                  "<p>In the beginning, ECMA, or European Computer Manufacturers Association," +
                  " held its first meeting on April 27th, 1960 in order to form standards for the emerging field of" +
                  " computing machines.</p>" +
                  "<p>It was realized there was no collaboration on standards between the " +
                  "companies manufacturing computers and such a lack of standards would create incompatibilities " +
                  "in operations and coding, not just internationally but also just between brands. </p>" +
                  "<p>We'll primarily be concerned with the Technical Committee and Task Group TC39 of ECMA International that" +
                  " deals with maintaining and updating standards for the ECMAScript programming language aka JavaScript" +
                  "(trademarked by Oracle). ECMA started implementing standards on JavaScript with the first edition being" +
                  " accepted by the Ecma General Assembly in 1997 ongoing to the most recent being the 10th edition published" +
                  " back in June 2019. After about the third edition of ECMAScript is when nearly all browsers fully " +
                  "supported the adoption of JavaScript. Since then, ECMA has been defining procedural, compilation, " +
                  "library, and syntactical standards for the language and has just recently began making these improvements" +
                  " and updates on a yearly basis beginning in 2016.</p>" +
                  "<p>The efforts of ECMA International from the past " +
                  " 60 years have set the stage for the explosion of the JavaScript language, allowing the World Wide Web" +
                  " and web browsers to reach further and accomplish more than initially thought possible. JavaScript now " +
                  "lives in a full-stack world being seen both in front end DOM manipulation and server-side scripting, as " +
                  "well as even being incorporated into embedded systems and everything in-between. ECMA International has " +
                  "brought forth the possibilities of unified technology and what we can accomplish when the world is " +
                  "connected.</p>" +
                  "<h3>Sources</h3>" +
                  "<p><a href='https://www.ecma-international.org/memento/history.htm'>ECMA International History</a></p>" +
                  "<p><a href='https://www.ecma-international.org/ecma-262/10.0/index.html#Title'>ECMA 262 Publication</a></p>",
              "Functions":
                  "<p>Functions are the bread and butter of JavaScript and are core to " +
                  "any interactive website or web application, let alone any programming language. Functions define " +
                  "certain lines of code that work together to produce a specified output and can be used over and over " +
                  "again. Let's dive into the syntax, some use cases, and quirks of JavaScript functions. </p>" +
                  `<pre>
        function namePicker(childName){
            return {
            boy: 'Alan',
            girl: 'Allison'
            }[childName];
        }
            </pre>`+
                  "<p>Here we've declared a function that can be called by its name- namePicker. It takes in a"+
                  " parameter labeled 'childName' and depending on its value, either 'boy' or 'girl', it will return the value "+
                  " associated to that key within the object, either 'Alan' or 'Allison'. Now let's call the function into"+
                  " action.</p>"+
                  `<pre>
        namePicker('boy');
        //returns Alan
        namePicker('girl');
        //returns Allison
        
                    </pre>`+
                  "<p>Okay, great! We can now call that function anytime we need to retrieve those names and if the names were "+
                  "to ever change then we'd only have to change them in the function and it'll take care of the rest. Let's see what it "+
                  "looks like to assign a function's return value to a variable and use that variable in another function that uses the fat arrow syntax"+
                  " and an advanced AI algorithm that will automagically determine the name's gender!</p>"+
                  `<pre>
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
        
                   </pre>`+
                  "<p>Isn't technology great? Advanced, reusable AI right in your browser. Let's keep the ball rolling here. Not"+
                  " to get political but the example I randomly came up with also works well with explaining optional parameters and default"+
                  " values. Let's take a look using our previous functions.</p>"+
                  `<pre>
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
        
                    </pre>`+
                  "<p>So in our namePicker function in the parameters list we initialized the argument 'childName' to equal"+
                  " undefined. This will be overridden upon user specification, but if it isn't we at least can set its default value"+
                  " and work with it within the function. When we call namePicker() we omit passing a parameter so the function returns"+
                  " the value 'They' which it then passes into the determineGender function and our ternary operator correctly outputs"+
                  " the corresponding response.</p>"+
                  "<p>So now let's take a look at nested functions, scoping, and rest parameters.</p>"+
                  `<pre>
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
        
                    </pre>`+
                  "<p>Let's break this down. So our parent function 'equations' takes in a 'type' that represents what"+
                  " type of equation we should perform based on a switch statement. Then, depending on what equation, 'equations' has two"+
                  " nested functions within it to reference. These nested functions can access the variable 'sum' defined within the parent "+
                  " function and set its value so the parent function can return it. Though, if there were a variable defined within a nested"+
                  " function the parent function wouldn't actually be able to access it. This is called function scope. </p>"+
                  "<p>Next up we see the '...rest' argument in the 'equations' function. This represents an arbitrary amount of arguments that"+
                  " is essentially joined to an iterable array which the nested functions loop through to add or multiply all its values."+
                  " This is called rest parameters!</p>",
              "Video Summary: Functions":
                  "<iframe src=\"https://www.youtube.com/embed/K5TAU1Vp0CA\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},
          "assignment3": {
              "Objects":
                  "<p>Hey all and welcome back to another tantalizing tutorial. This is one that is guaranteed to get you" +
                  " PUMPED UP- subjectively speaking of course, but that's my objective. That's right, we're diving into the world of JSON, or" +
                  "JavaScript Object Notation, or simply just objects.</p>" +
                  "<p>The world is object oriented when you really think about. You can literally see the curly brackets around" +
                  " everything and everyone, perhaps with simple key:value attributes or even nested arrays, functions, and objects!" +
                  " That's right, objects themselves can be nested within each other, posess certain functionality, and contain arrays. Arrays can be " +
                  "arrays of objects that have arrays within objects within those arrays! Have I confused you yet? Good," +
                  " let's get into some code snippets.</p>" +
                  `<pre>
        let alan = new Object();
        alan.name = 'alan hunt';
        alan.major = 'information systems';
        alan.interestingFact = 'Im a drummer and I used to professionally DJ weddings';
        alan.summary = function(){
          for(let [key, value] of Object.entries(this)){
            if(key !== "summary")
              console.log(\`\${key} : \${value}\`)
          }
        };
        
        alan.summary();
        //name : alan hunt
        //major : information systems
        //interestingFact : Im a drummer and I used to professionally DJ weddings
                   </pre>`+
                    "<p>So here we've created an object using classic notation new Object() and we decided what attributes we"+
                    " wanted the alan object to have using the '.' notation, i.e. .name, .major, and .interestingFact,"+
                    " to which we output all of those using the object's summary function (which needed a conditional statement"+
                    " to prevent it from printing out a literal string of the function itself.</p>",
              "Video Summary: Objects":
                  "<p></p>"
          },
          "assignment3essay": {
              "Opinions on Design" :
                  "<p>The first design flaw that I'll start with and the one that really " +
                  "got my blood boiling was <b>number 2: pagination used for the wrong purpose</b>, aka for (pardon my French) shit excuses of" +
                  " websites and businesses that spin up click-bait articles with little substance that are just riddled with ads to" +
                  " the point of rendering the website impossible to navigate without tricking you into clicking an ad. I hope I die" +
                  " before I ever subject myself to building websites for companies like that, let alone creating 'content' for them." +
                  " Those people lead sad, meaningless lives and I feel sorry for them. I unfortunately still use Snapchat" +
                  " and any time they have a video that is talking about an article and you click that article to read what it's" +
                  " about it really isn't even an article, it's just a million ads that you have to try to swipe around to scroll through the page. </p>" +
                  "<p>Next awful thing that annoys the living heck out of me is <b>number five: no way to get in touch.</b>" +
                  "I understand companies don't want to spend money on hiring more call center people and they've spent millions of" +
                  " dollars creating these lack luster 'chat bots' to avoid doing that, but holy hell do you still have to swim" +
                  " through a sea of crap, FAQ pages, support forums, and their overloaded websites to get to anything useful." +
                  " Every single company is guilty of this nowadays and I gain real respect for the ones who aren't afraid to back" +
                  " their products up with real support.</p>" +
                  "<p>Last but not least is <b>number seven: too much functionality that requires registration.</b> Yelp is the" +
                  " number one perpetrator of this, where you can't do hardly anything at all without needing to login." +
                  "I remember the good old days where data wasn't treated as gold and most any website you came across you " +
                  "could accomplish what you came to do without having to register and feed a bunch of fake data to these companies." +
                  " I am what is considered on Reddit or Imgur a 'stalker', I don't typically like to commit to a website" +
                  " to take advantage of why its there. Nowadays with your data being tossed around to goodness knows how" +
                  " many third party companies to make up for their lack of a business modal it's simply not worth" +
                  " typing in your information just to see some memes or read a half-baked article.</p>",
              "Usability Issues":
                  "<h3>Availability and Accessibility</h3>" +
                  "<p>This section starts off with the basics of if your website/content is actually available to be accessed." +
                  " It doesn't do anyone any good if the images are broken, style pages are missing, and content is" +
                  "j ust M.I.A. You might as well not have a website if half the content is broken or missing.</p>" +
                  "<h3>Clarity</h3>"+
                  "<p>Clarity doesn't literally mean if something is see-through but simply represents that" +
                  " nothing should be obstructing users from seeing what they came to see or do.</p>" +
                  "<p>A few key principles of this are<ul>" +
                  "<li>Simplicity- find a balance between too much and too little.</li>" +
                  "<li>Familiarity- find what concepts work from the big league websites.</li>" +
                  "<li>Consistency- create a seamless, recognizable website.</li>" +
                  "<li>Guidance- incorporate indicators on what does what.</li>" +
                  "<li>Feedback- let users know if their actions have failed or succeeded.</li>" +
                  "<li>Information Architecture- what information needs prioritized?</li>" +
                  "</ul></p>" +
                  "<h3>Learnability</h3>"+
                  "<p>Your interfaces should bring knowledge from within the user, aka it should be intuitive without" +
                  " having to guess on what actions do what. This goes along with guidance and feedback.</p>" +
                  "<h3>Credibility</h3>"+
                  "<p>Prove to your audience that you're trustworthy. At the very" +
                  " essence of our society is trust and we can't function without it, neither can your business/website.</p>" +
                  "<h3>Relevancy</h3>"+
                  "<p>Know why your audience is on your website and keep your information organized and categorized to" +
                  " further enhance the UX. You're only wasting time if a male has to sift through women's shoes to find" +
                  " a pair for him.</p>"
          },
          "responsivetutorial": {
              "Responsive Design Summary":
                  "<p>I'll preface this by saying I did not actually spend the 40 minutes" +
                    " watching this video following along but I did skim through it to see what I could take from it.</p>" +
                  "<p>I did notice off the bat that we take the same exact approach adding the *{padding:0; margin: 0; box-sizing: border-box;}" +
                    " to all of the elements within the DOM. I implemented that trick myself but a lot of people do the same exact thing which" +
                    " is a pretty cool feeling. Another similar thing is where he adds background colors to his sections but I simply add borders " +
                    "to visualize things as I go. </p>" +
                  "<p>I love how much he uses display: flex because I live for display: flex and have even" +
                    " started getting into display: grid. I haven't actually used flex sizing before but I love that idea and I'm definitely" +
                    " going to try to put that into play before too long. </p>" +
                  "<p>The shortcuts in VS are pretty cool though where he just types " +
                    ".classname and it codes out a div with the class of classname. I'm going to see if JetBrains has anything like that.</p>" +
                  "<p>I also thought the background-clip coupled with the text-fill-color to create a gradient on the text was super cool, too.</p>" +
                  "<p>The filter drop-shadow was awesome as well, didn't know what the difference between that and box-shadow was, I can now" +
                    " add that to my tool belt, too.</p>" +
                  "<p>All in all this seemed like it was a fantastic tutorial with a lot of essential CSS" +
                    " tricks that I definitely would have loved to have watched when I started learning HTML/CSS back at Heartland.</p>"}
      };

      return (
          <div className={"App container"}>
              <Header assignmentList={assignmentList} />
              <Route render={({location})=>(
                  <TransitionGroup>
                      <CSSTransition timeout={300} classNames="fade" key={location.key}>
                          <Switch location={location}>
                              <Route path="/" exact component={Home}/>
                              <Route path="/tutorials/:assignment" component={Tutorials}/>
                              <Route path="/contact" component={Contact}/>
                          </Switch>
                      </CSSTransition>
                  </TransitionGroup>
              )}/>
          </div>
      );
}

export default App;