import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Route, Switch} from "react-router-dom";
import Tutorials from "./pages/Tutorials";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {deferonload} from "./NavbarScript";
import headers from "./images/headers.jpg";
import xhr from "./images/xhr.jpg";
import postman from "./images/postman.jpg";

class App extends React.Component {
    componentDidMount() {
        deferonload();
    }

    render() {
        const assignmentList = {
            "assignment1": {
                "Hoisting":
                    "<p>Hoisting is a term relative to an execution context and refers to when declared variables and" +
                    " functions are 'moved' to the top of the code (aka stored in memory) to be referenced and used before they're " +
                    "actually declared.</p>" +
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
                    "<p><strong>Unary operators</b> are operations with only one operand and makes me think of CRUD " +
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
                " Video Summary: Hoisting, Unary, and Types":
                    "<iframe src=\"https://www.youtube.com/embed/6HHI-Nlt9v4\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>" +
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
            </pre>` +
                    "<p>Here we've declared a function that can be called by its name- namePicker. It takes in a" +
                    " parameter labeled 'childName' and depending on its value, either 'boy' or 'girl', it will return the value " +
                    " associated to that key within the object, either 'Alan' or 'Allison'. Now let's call the function into" +
                    " action.</p>" +
                    `<pre>
        namePicker('boy');
        //returns Alan
        namePicker('girl');
        //returns Allison
        
                    </pre>` +
                    "<p>Okay, great! We can now call that function anytime we need to retrieve those names and if the names were " +
                    "to ever change then we'd only have to change them in the function and it'll take care of the rest. Let's see what it " +
                    "looks like to assign a function's return value to a variable and use that variable in another function that uses the fat arrow syntax" +
                    " and an advanced AI algorithm that will automagically determine the name's gender!</p>" +
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
        
                   </pre>` +
                    "<p>Isn't technology great? Advanced, reusable AI right in your browser. Let's keep the ball rolling here. Not" +
                    " to get political but the example I randomly came up with also works well with explaining optional parameters and default" +
                    " values. Let's take a look using our previous functions.</p>" +
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
        
                    </pre>` +
                    "<p>So in our namePicker function in the parameters list we initialized the argument 'childName' to equal" +
                    " undefined. This will be overridden upon user specification, but if it isn't we at least can set its default value" +
                    " and work with it within the function. When we call namePicker() we omit passing a parameter so the function returns" +
                    " the value 'They' which it then passes into the determineGender function and our ternary operator correctly outputs" +
                    " the corresponding response.</p>" +
                    "<p>So now let's take a look at nested functions, scoping, and rest parameters.</p>" +
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
        
                    </pre>` +
                    "<p>Let's break this down. So our parent function 'equations' takes in a 'type' that represents what" +
                    " type of equation we should perform based on a switch statement. Then, depending on what equation, 'equations' has two" +
                    " nested functions within it to reference. These nested functions can access the variable 'sum' defined within the parent " +
                    " function and set its value so the parent function can return it. Though, if there were a variable defined within a nested" +
                    " function the parent function wouldn't actually be able to access it. This is called function scope. </p>" +
                    "<p>Next up we see the '...rest' argument in the 'equations' function. This represents an arbitrary amount of arguments that" +
                    " is essentially joined to an iterable array which the nested functions loop through to add or multiply all its values." +
                    " This is called rest parameters!</p>",
                " Video Summary: Functions":
                    "<iframe src=\"https://www.youtube.com/embed/K5TAU1Vp0CA\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
            },
            "assignment3": {
                "{Objects}, Ob[jects], Ob.jects":
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
                   </pre>` +
                    "<p>So here we've created an object using classic notation new Object() and we decided what attributes we" +
                    " wanted the alan object to have using the '.' notation, i.e. .name, .major, and .interestingFact," +
                    " to which we output all of those using the object's summary function (which needed a conditional statement" +
                    " to prevent it from printing out a literal string of the function itself. Now let's see equivalent" +
                    " options to create objects and set and call its properties.</p>" +
                    `<pre>
        let alan = new Object();
        alan['name'] = 'alan hunt';
        alan['major'] = 'information systems';
        alan['interestingFact'] = 'Im a drummer and I used to professionally DJ weddings';
        alan['summary'] = function(){
        for(let [key, value] of Object.entries(this)){
            if(key !== "summary")
                console.log(\`\${key} : \${value}\`)
            }
        };
        
        alan['summary']();
        
        //name : alan hunt
        //major : information systems
        //interestingFact : Im a drummer and I used to professionally DJ weddings
                    </pre>` +
                    "<p>Here we've used bracket notation to create properties for the object, similar to how we'd be" +
                    " working with arrays, but it accomplishes the exact same thing as in the previous example." +
                    "With this bracket notation we can actually pass in variables to set the key value and make custom" +
                    " object properties. This has helped me personally when I created a function that traversed through" +
                    " a form to grab the varying name attributes of the input fields as keys and created objects paired" +
                    " with the form's value.</p>" +
                    `<pre>
        let alan = {};
        let n = "name";
        let m = "major";
        let i = "interestingFact";
        let s = "summary";
        
        alan[n] = "alan";
        alan[m] = "information systems";
        alan[i] = "interestingFact";
        alan[s] = function(){
             for(let [key, value] of Object.entries(this)){
               if(key !== "summary")
                  console.log(\`\${key} : \${value}\`)
           }
        };
        
        alan[s]();
        // alan['summary']();
        //name : alan hunt
        //major : information systems
        //interestingFact : Im a drummer and I used to professionally DJ weddings
                    </pre>` +
                    "<p>This is more work, but again it accomplishes the same thing and can be useful if/when the time calls for it. This" +
                    " example also demonstrates how we can replace creating a new object by '= new Object()' with simply using '= {}'.</p>" +
                    "<p>We've been using a simple function for each object to output all of its properties (minus the function itself)" +
                    " but let's see what it would look like to access individual properties.</p>" +
                    `<pre>
        let alan = new Object();
        alan['name'] = 'alan hunt';
        alan['major'] = 'information systems';
        alan['interestingFact'] = 'Im a drummer and I used to professionally DJ weddings';
        alan['summary'] = function(){
          for(let [key, value] of Object.entries(this)){
            if(key !== "summary")
              console.log(\`\${key} : \${value}\`)
          }
        };
        
        let i = 'interestingFact';
        console.log(\`\${alan.name}, \${alan['major']}, \${alan[i]}\`)
        
        // alan hunt
        // information systems
        // Im a drummer and I used to professionally DJ weddings
                    </pre>` +
                    "<p>Using the object from previous example we see three different ways to access an object's properties" +
                    " through dot, bracket, and bracket variable notation. A million ways to skin a buck.</p>" +
                    "<p>Let's get more object-oriented with all these objects and see what it would look like using classes" +
                    " and see what it looks like to define them as classes and use constructors.</p>" +
                    `<pre>
        function Alan(name, major, interestingFact, summary){
          this.name = name;
          this.major = major;
          this.interestingFact = interestingFact;
          this.summary = summary;
        };
        function summary(){
          for(let [key, value] of Object.entries(this)){
            if(key !== "summary")
              console.log(\`\${key} : \${value}\`)
          }
        };
        
        const al = new Alan("alan", "info sys", "drummer/DJ", summary);
        
        al.summary();
        //name : alan
        //major : info sys
        //interestingFact : drummer/DJ
                    </pre>` +
                    "<p>We define a function that acts as a constructor and we pass in values when we create a new instance" +
                    " of that object and we're back at the same end result! To wrap things up here is how you would define the Alan object as a class.</p>" +
                    `<pre>
        class Alan{
          constructor(name, major, interestingFact, summary){
            this.name = name;
            this.major = major;
            this.interestingFact = interestingFact;
            this.summary = summary;
          }
        }
        function summary(){
          for(let [key, value] of Object.entries(this)){
            if(key !== "summary")
              console.log(\`\${key} : \${value}\`)
          }
        };
        
        const al = new Alan("alan", "info sys", "drummer/DJ", summary);
        
        al.summary();
        //name : alan
        //major : info sys
        //interestingFact : drummer/DJ
                    </pre>`,
                " Video Summary: Objects":
                    "<iframe src=\"https://www.youtube.com/embed/bW9BjTpII8U\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
            },
            "assignment3essay": {
                "Opinions on Design":
                    "<p>The first design flaw that I'll start with and the one that really " +
                    "got my blood boiling was <strong>number 2: pagination used for the wrong purpose</strong>, aka for (pardon my French) shit excuses of" +
                    " websites and businesses that spin up click-bait articles with little substance that are just riddled with ads to" +
                    " the point of rendering the website impossible to navigate without tricking you into clicking an ad. I hope I die" +
                    " before I ever subject myself to building websites for companies like that, let alone creating 'content' for them." +
                    " Those people lead sad, meaningless lives and I feel sorry for them. I unfortunately still use Snapchat" +
                    " and any time they have a video that is talking about an article and you click that article to read what it's" +
                    " about it really isn't even an article, it's just a million ads that you have to try to swipe around to scroll through the page. </p>" +
                    "<p>Next awful thing that annoys the living heck out of me is <strong>number five: no way to get in touch.</strong>" +
                    "I understand companies don't want to spend money on hiring more call center people and they've spent millions of" +
                    " dollars creating these lack luster 'chat bots' to avoid doing that, but holy hell do you still have to swim" +
                    " through a sea of crap, FAQ pages, support forums, and their overloaded websites to get to anything useful." +
                    " Every single company is guilty of this nowadays and I gain real respect for the ones who aren't afraid to back" +
                    " their products up with real support.</p>" +
                    "<p>Last but not least is <strong>number seven: too much functionality that requires registration.</strong> Yelp is the" +
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
                    "<h3>Clarity</h3>" +
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
                    "<h3>Learnability</h3>" +
                    "<p>Your interfaces should bring knowledge from within the user, aka it should be intuitive without" +
                    " having to guess on what actions do what. This goes along with guidance and feedback.</p>" +
                    "<h3>Credibility</h3>" +
                    "<p>Prove to your audience that you're trustworthy. At the very" +
                    " essence of our society is trust and we can't function without it, neither can your business/website.</p>" +
                    "<h3>Relevancy</h3>" +
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
                    " tricks that I definitely would have loved to have watched when I started learning HTML/CSS back at Heartland.</p>"
            },
            "assignment4": {
                "Prototype Chain Inheritance":
                    "<p>When you first think of prototype maybe you're like me and your initial thoughts go to a blueprint " +
                    "of a house or even a tiny clay model of a car that a manufacturer is planning on building. The prototype" +
                    " is the 'original' model of what something is going to end up inheriting its characteristics from. The " +
                    "blueprint of a home has dimensions, separate rooms, key features of a certain space all laid out so" +
                    " that the construction workers can ensure that the house inherits those properties when it's built.</p>" +
                    "<p>The blueprint doesn't necessarily specify what sort of cabinets the kitchen will get or what color" +
                    " walls the rooms will be, but that can be decided as the designing phase unfolds. Prototypes are very" +
                    " similar in regards to our blueprint example such that classes and data types are implementations of the <strong>Object prototype</strong>" +
                    " model and that they inherit certain characteristics from its parent (or prototype, I'll end up using these terms" +
                    " interchangeably), but while still having the capability to add properties to the implementation itself as well as" +
                    " the original prototype model. Prototypes can also have prototypes and when you call back far enough " +
                    "everything stems from the <strong>Object</strong> prototype. After that you'll just get null. It's like asking" +
                    " what happened before the big bang. That's a question for another tutorial.</p>" +
                    "<p>\"Alan, get to the heckin' snippets.\" Alrighty then!</p>" +
                    "<p>Okay, to continue with horrible edgy examples, let's say hypothetically I'm a web developer" +
                    " and I'm also a member of the Blood gang. A rule is that I can't use words that start with the " +
                    "letter 'C' because it represents my rival gang- the Crips. Well, I want to add a function to the" +
                    " <strong>String</strong> prototype so I can simply replace any word that starts with a 'C' with the letter 'B' " +
                    "on any string type. Let's do it!</p>" +
                    "<pre><code>" +
                    `        String.prototype.blood = function(){
            return this.split(' ').map(word => {
                if(word.substring(0,1).toLowerCase() == 'c')
                    return \`b\${word.substring(1)}\`;
                else
                    return word;
            }).join(' ')
        };
        
        let phrase = 'Cool story about the crow, you crazy cat, you!';
        console.log(phrase.blood());
        //bool story about the brow, you brazy bat, you!` +
                    "</code></pre>" +
                    "<p>Alright, let's break it down. So I added the property 'blood' which holds a function into the String class prototype so that" +
                    " I can call this function on any String thereafter. This is because that String will inherit that function, much like it" +
                    " inherits any common function from the String prototype like .split(), .substring(), and so on. We then call" +
                    " the inherited blood function on our string 'phrase' because of prototype inheritance and it replaces every C word with a B word!</p>" +
                    "<p>It is also worth mentioning that within the blood function I called 'this' which refers to the string that is implementing the" +
                    " function, not the String prototype object that the function technically belongs to.</p>" +
                    "<p>Next up let's create a new class and add some properties via its prototype.</p>" +
                    "<img src='/assignmentimages/inherit.jpg' alt='inheritance' class='inline-img'>" +
                    "<p>So we started by sprinkling some syntactic sugar in our code by creating a Blank class which we can" +
                    " see is initially undefined within the console. We then called Blank.prototype to see what we had going on behind the scenes and we" +
                    " see all the default properties and functions for Blank. Then we can add a property 'prop' to it with a value of 'neat!'. We create" +
                    " a new object of type Blank and can call that property 'prop' and retrieve that value. You could also create a separate object of " +
                    " type Blank and be able to access the same 'prop' property with the same 'neat!' value, it's inheritance after all!. If you do" +
                    " create a new object and you try calling a property or function on it and it can't find it, JS will know to keep looking up the " +
                    " inheritance chain until it finds it or return null if it doesn't exist.</p>",
                "What is 'this'?":
                    "<img src='/assignmentimages/whatisthis.jpg' alt='zoolander' class='inline-img'>" +
                    "<p>Derek said it best: \"What is this?\" It's certainly not a center for ants, but it's simply a reference" +
                    " to the object that 'this' is called within, whether its lexical (within a function) or the global window" +
                    " object itself. 'This' varies heavily and even though you can't change how it's scoped you can still change" +
                    " the context to manipulate its scope. Let's see a few different examples. </p>" +
                    "<pre><code>" +
                    `
        this === window;
        //true
        
        function x(){return this;}
        x() === window
        //true
        
        let x2 = () => {return this;};
        x2() === window;
        //true
        
        let o = {name: "al", fun: function(){return this}};
        o.fun();
        //{name: 'alan', fun: f()}
        
        let newo = {name: 'al', fun2: () => {return this}};
        newo.fun2() === window
        //true
        
        function x(){
            console.log(this);
            function y(){
                console.log(this);
            }
            y();
        };
        
        x();
        // window object, window object
        
        let owoa = {name: 'dexter', funcy: x};
        owoa.funcy();
        //{name: 'dexter', funcy: f()}, window object
`
                    + "</code></pre>" +
                    "<p>Okay, I think that's enough scenarios to start breaking things down. Time to bust out an ordered list.</p>" +
                    "<ol>" +
                    "<li>A globally scoped 'this' comes out to be a window object. Neat.</li>" +
                    "<li>Even lexically scoped 'this' still equates to a window object. Rad.</li>" +
                    "<li>Same scenario using fat arrow syntax. Far out.</li>" +
                    "<li>Now that 'this' is scoped within a function within an object 'this' finally represents the object it belongs to! Cool!</li>" +
                    "<li>Well, with that same scenario but using fat arrow syntax 'this' is back to being a window object. Alright.</li>" +
                    "<li>Now we have a function nested within another and both log 'this'. Both equate to the window object initially. Lit.</li>" +
                    "<li>Now that same function belongs to an object and the top 'this' references the object itself and the nested function remains as the window object. Fascinating!</li>" +
                    "</ol><br>" +
                    "<p>Man oh man the possibilities. Is this why anyone who isn't a web developer hates JavaScript? No idea! We can see that " +
                    "we can manipulate the syntax and where the function is called from to change 'this' to our liking. Of course that's basically " +
                    "irrelevant in node.js where there is no window object because it's only DOM specific.</p>",
                " Video Summary: Prototype Chain Inheritance, 'this'":
                    "<iframe src='https://www.youtube.com/embed/wOgS3JyCHek' class='inline-img' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" +
                    "<iframe src='https://www.youtube.com/embed/dTliAdgjZ6g' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
            },
            "assignnment4essay": {
                "Monolithic vs. Microservice":
                    "<p>This was a big discussion throughout Discover when I interned there " +
                    "over the summer as they were in process of breaking down their current monolithic architecture into microservices" +
                    " and that was the first time I had heard of either of those terms. They had an idea for a web service they wanted me" +
                    " to build and they said I can build it however I liked. I was kind of surprised at that because I thought everything" +
                    " had to be an exact way to match their stack but that wasn't the case and I'd like to think that's a testament to their" +
                    " switch to becoming a microservice architecture. Both monolith and microservice respectively make sense" +
                    " when you think of the words themselves- monolithic sounds huge and microservice is the opposite. It's understandable that a global Fortune 250 company" +
                    " like Discover has a monolithic architecture in that everything is uniform and easy to deploy," +
                    " test, and scale- all of which are critical and means saving time and money.</p>" +
                    "<p>On the other hand, according to the DZone article, those pros don't outweigh the cons." +
                    "As I'm reading this it's all becoming apparent to me just how much everything in the world of" +
                    " development really has changed and is changing and just within the past ten years. As a newcomer to the field it's sort of hard to " +
                    "understand the point in time that you weren't immersed in and the mindset of monolithic architectures, especially after having read about microservices." +
                    " But it's just a fact that nobody could've really seen all these technologies coming out that would revolutionize" +
                    " the way we develop software. It's a pretty great feeling knowing that these global enterprises are overhauling their structure and that the" +
                    " demand for my career field has never been bigger. It's also good knowing that businesses are forward thinking" +
                    " and that they're embracing 'out with the old, in with the new'.</p>" +
                    "<p>As I said, once I read about how microservices address the cons of monolith it's hard to" +
                    " think about going back to the old ways and how things used to be. To have to learn an entire" +
                    " monolithic program to try to build onto it and then having the entire thing go down if one piece" +
                    " is down just sounds painful. Microservices takes care of that by having the components as stand alone" +
                    " services and can even be hosted on different servers. Since they all are their own components they'll" +
                    " be easier to understand, modify, less intensive to load and compile, and will save time all around." +
                    " This also helps with caching and scalability, but of course one thing that comes to mind is that" +
                    " there still has to be a sense of uniformity to the brand of the company between microservices or you" +
                    " could have inconsistencies every step of the way which makes for poor UX.</p>" +
                    "<p>All in all, it seems like an exciting time to get into development to help these massive enterprises" +
                    " switch to a more long-term development strategy while still maintaining creative freedom to really" +
                    " leave your mark wherever you go.</p>"
            },
            "modules": {
                "Import/Export Modules":
                    "<p>Modules are what's really bringing JS into 21st century scripting languages. Though they've been around " +
                    "in Node.JS for some time, they're finally gaining support in recent browsers and are providing all the benefits " +
                    "of more efficient load times and a 'just in time' approach to calling functions as you need them. </p>" +
                    "<p><strong>So, what are modules?</strong> When you think of modules I hope you think about modularity and " +
                    "Legos. You could either dump the entire box of Legos out and as you're building something you can repeatedly sift through " +
                    "the scattered pieces or you can plan ahead of time and 'import' only the pieces that you need for certain portions of " +
                    "your project. The latter is a much more organized and efficient approach and the same principal is applied to JS modules. You can " +
                    "write functions grouped together in pages as we usually would but we can then export each individual function and then import " +
                    "the ones we need onto pages that will use them as needed. Imagine just importing a couple of functions from the jQuery library " +
                    "rather than the entire catalog.</p>" +
                    "<p>To set things up to get started with modules they'll need to be retrieved from a server with the header 'Content-Type' set to " +
                    "text/javascript. Node among many other servers already take care of this for .js files but we can specify modules with a file " +
                    "extension of .mjs and if the MIME type isn't set properly on your response headers then you're bound to get a MIME type error. " +
                    "A few other things worth mentioning are that TypeScript doesn't support .mjs extensions and that it's good practice to denote " +
                    "a modular file by importing it with a type='module' attribute on your script import. Now that the housekeeping is taken care of, " +
                    "let's get into some examples. Luckily this website is built with React and is heavily reliant on modules so I'll use snippets " +
                    "from my very own code.</p>" +
                    "<p>In order to import a function, we first have to export a function. We'll import some functions from SidebarScript.js into" +
                    " our Sidebar.js component to use. </p>" +
                    "<pre><code>" +
                    `export const SidebarScript = () => {
    //do stuff
    }
` +
                    "</code></pre>" +
                    "<p>And to use this function in Sidebar.js it would look like..</p>" +
                    "<pre><code>" +
                    `    import {SidebarScript} from './SidebarScript.js';

    SidebarScript();
` +
                    "</code></pre>" +
                    "<p>We simply export our function and we import it elsewhere and call it. Literally " +
                    "that simple! Any function we want to export we just denote by the word 'export' before its declaration " +
                    " and then we import it by the name of its function within curly braces and you can call the function as you " +
                    "normally would. We can also declare a default export or export all the functions in one call, typically at the bottom of the page like so</p>" +
                    "<pre><code>" +
                    `   const x = () => ();
    const y = () => ();
    const z = () => ();
    
    export {x, y, z}
`
                    + "</code></pre>" +
                    "<p> and </p>" +
                    "<pre><code>" +
                    `    const x = () => ();
    const y = () => ();
    const z = () => ();
    
    export {x, y, default z};
    
    //in Sidebar.js

    import SidebarScript from 'SidebarScript';
    //will only import the default export, z(), by calling SidebarScript();
   
    // or import all exports
    import * as SideScripts from 'SidebarScript.js';
    SideScripts.x();
    SideScripts.y();
    SideScripts.z();
`
                    + "</code></pre>" +
                    "<p>So as we can see we can customize exactly what functions we want to export, which ones we want to establish as the default, and then" +
                    " how we can even name our import as we saw by importing all (*) exports named as SideScripts.</p>" +
                    "<p>Modules makes our code much more efficient to pick and choose which functions we need where and it can help improve code readability " +
                    "as we can separate out classes of functions and import the pieces as we need.</p>",
                " Video Summary: Import/Export Modules":
                    "<iframe src=\"https://www.youtube.com/embed/nD660za4lg4\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
            },
            "hofs": {
                "Higher Order Functions":
                    "<p>With large programs comes great complexity and then readability and reusability become crucial for minimizing bugs and writing efficient code. I hope when you think of higher order functions (HOF) that you think " +
                    "of a medieval social hierarchy like I do. There are multiple towns that are near to each other and thus fall under the category of a country. Each town has its own ruler and hierarchy and they perform certain functions " +
                    "to run their respective towns efficiently. The functionality of that ruler for his or her town isn't the same functionality of the king of the entire country. Why would there be two kings performing the same functionality to rule their land?" +
                    " That's repetitive and inefficient and would eventually lead to a cival war, but performing functionality to run an entire country requires a lot of different orders running their respective towns to serve the greater good of " +
                    "the country- and this is how I see HOFs. </p>" +
                    "<p>You have the highest order, the king and his courtship, that take in 'lower orders', the rulers of individual towns, to perform their individual functionality and return to the king their knowledge of their towns so that the common goal " +
                    "between the towns and the higher order of progressing the entire country can be achieved and without unnecessary repetition occupying precious resources.</p>" +
                    "<p>In other words, to adhere to the DRY principal higher order functions are critical and they also make use of the strengths of JavaScript in that we can pass functionality around through generalizations in our code. Example time!</p>" +
                    "<pre><code>" +
                    `    const increaseByOne = num => num + 1;
    const increaseByTwo = num => num + 2;
    const increaseByThree = num => num + 3;
    
    increaseByOne(4); // 5
    increaseByTwo(4); // 6
    increaseByThree(4); // 7
`
                    + "</code></pre>" +
                    "<p>So we've got some great functions, the best functions, maybe ever. Takes in a number, increases that number by the functions' respective amount, and returns the value. " +
                    "These functions are repetitive A.F. and would guarantee your imminent termination. So how can we be less repetitive? Well, if we think about simplifying these functions, we have " +
                    " to look at what they have in common and generalize things from there. Well, what they have in common is that they take in a number and increase it. The number the functions take in is already " +
                    "generalized, so why not just generalize the amount each are increased by? </p>" +
                    "<pre><code>" +
                    `   const increaseByX = (num, x) => num + x;
    increaseByX(4, 3); // 7
`
                    + "</code></pre>" +
                    "<p>We've successfully combined those three functions into one by generalizing the parameters and that's a core concept of HOFs, generalize the parameters so that we can pass in the functionality that we need to perform certain tasks. " +
                    " Well, the function still isn't that useful on its own, but when it becomes a cog in a greater function we can see the beauty of HOFs come through. Let's build off of that example.</p>" +
                    "<pre><code>" +
                    `   const increaseByX = (num, x) => num + x;
    
    const increaseArrayByXAndSum = (array, callback) => {
        let output = 0;
        array.forEach(value => {output += callback(value, 3)});
        return output;
    };
    
    increaseArrayByXAndSum([1,2,3], increaseByX); // 15
`
                    + "</code></pre>" +
                    "<p>Is the code and functionality good? Not really. Does it get my point across about HOFs? I sure hope so. We have our increaseByX() function which takes in two general parameters and returns their sum, and the higher order function" +
                    " increaseArrayByXAndSum() function takes in two general parameters as well, one of which is a callback (increaseByX), which is how we know that increaseArrayByXAndSum is the higher order function; it's the king of the land that invokes the smaller functions" +
                    " of whom they report their results to. All hail the higher order!</p>",
                " Video Summary: Higher Order Functions":
                    "<iframe src=\"https://www.youtube.com/embed/b9HSKCfGQMA\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
            },
            "arraymethods": {
                "Advanced Array Methods":
                    "<p>We live in a world that contains many things. Many data. Much data. Tons of data. All of it.</p>" +
                    "<p>This is why arrays exist. There's a lot of data points, and they often need to be grouped together. Arrays are important.</p>" +
                    "<p>This is also why we have advanced array methods! These functions belonging to the Array object help us web programmers adhere to DRY principles and write cleaner, more legible code that decreases surface area for bugs to occupy." +
                    "The people over there at ECMA know that in order to do anything on an array, loops have to be involved and that's exactly what they all do. Some take callback functions to perform on each value of an array, and some even return a new" +
                    " array or what's left of an array after running the values against a conditional statement! </p>" +
                    "<p>We'll cover my favorites:</p>" +
                    "<ul>" +
                    "<li>Map</li>" +
                    "<li>Filter</li>" +
                    "<li>ForEach</li>" +
                    "<li>Concat</li>" +
                    "<li>Sort</li>" +
                    "<li>Slice</li>" +
                    "<li>Push</li>" +
                    "<li>Join</li>" +
                    "</ul>",
                " Map":
                    "<p><strong>Starting with map</strong>, it iterates through an array and returns a new array based on the return values of performing a callback function. It's a great way to perform calculations on every index within an array of numbers or to " +
                    "manipulate strings and create a new array. Map is especially critical in React because JSX requires a function to render some sort of output to display on the virtual DOM and that cannot be accomplished by a simple for or forEach loop." +
                    "Map is pretty universal through many programming languages so it's worth getting to know no matter what field of programming you specialize in. Let's see what an example looks like.</p>" +
                    "<pre><code>" +
                    `    const numbers = [1,2,3];
    let triplized = numbers.map(number => parseInt(\`\${number}\${number}\${number}\`));
     console.log(triplized);
     //[111, 222, 333]
`
                    + "</code></pre>" +
                    "<p>We start off with a boring array with values [1, 2, 3]. Next, we call the map function on that array and for every number within it we simply concatenate the value three times to 'triplize' it and we return that value into an" +
                    " index within the triplized array and output the results. This does not effect the original array unless we were to assign the return value of the map function to itself. Like I said, map is probably the most used array method in React" +
                    " and is a pretty universal concept in many different programming languages.</p>",
                " Filter":
                    "<p><strong>Next up we have filter, </strong>which iterates through the array and only returns values within it that meet a given condition and returns a new array. Again, since it returns a new array it's very useful in React, especially " +
                    "if you want to implement a search feature to narrow results in a table. </p>" +
                    "<pre><code>" +
                    `    const numbers = [1,2,3,4,5,6];
    let evenNumbers = numbers.filter(number => number % 2 === 0);
     console.log(evenNumbers);
     //[2,4,6]
`
                    + "</code></pre>" +
                    "<p>Here we call the filter function on an array of numbers and we only return the values within that array if they're even. The new array evenNumbers is now only the values [2,4,6] from the original numbers array.</p>",
                " ForEach":
                    "<p>Another simple yet important method is <strong>ForEach.</strong> It iterates through an array performing a callback function on each value but this time it doesn't return a new array. Still very useful but I'd still" +
                    " say not as important as Map in React in regards to modifying a component's state because you should always use setState instead of modifying it directly and this is where Map shines. Regardless, if we're just wanting" +
                    " to loop through the values within an array and output them to the console <strong>ForEach</strong> will be your weapon of choice.</p>" +
                    "<pre><code>" +
                    `    const numbers = [1,2,3];
    numbers.forEach(number => console.log(number));
     //1
     //2
     //3
`
                    + "</code></pre>" +
                    "<p>Pretty simple stuff, quicker to type out than a traditional 3-prong for loop and is very readable.</p>",
                " Concat":
                    "<p>A recent advanced array method that I've put to use is <strong>Concat</strong> which combines two arrays, or concatenates them. It doesn't have to be an entire array that you're appending to an existing one, you can simply add" +
                    " one element to an existing array and it returns a new array. This is a simpler version of the <strong>Splice</strong> method which you can use to replace elements within the original array or add elements to it, but is still a little" +
                    " more advanced than <strong>Push</strong> because Concat returns the array and Push only returns the new element. Since " +
                    "<strong>Concat</strong> returns a new array it's better for modifying state with setState in React so let's see my example.</p>" +
                    "<pre><code>" +
                    `        add = () => {
        this.setState(state => ({
            students: state.students.concat(state.student)
        }));
    };
`
                    + "</code></pre>" +
                    "<p>The point of this function is to add a student object into a collection of student objects to form a classroom. State.students is an array of student objects to which we're appending one more student object onto (state.student)." +
                    "This returns the whole array with the new student and we can use that within setState properly.</p>",
                " Sort":
                    "<p>The <strong>Sort</strong> method does exactly that, it sorts an array in ascending order or alphabetically via UTF-16 values if it's an array of strings. This method modifies the existing array. A great use for this is obviously" +
                    " sorting tables of data. You can pass in a callback function to specify how you want the array sorted and the callback takes in two parameters for comparison. Let's have a look.</p>" +
                    "<pre><code>" +
                    `     let numbers = [7,3,9,1];
    numbers.sort();
    console.log(numbers); // [1,3,7,9]
    let words = ['banana', 'apple', 'orange']
    console.log(words.sort()); // ['apple', 'banana', 'orange']
`
                    + "</code></pre>" +
                    "<p>Simple and effective. It converts the strings to their UTF-16 values and compares those and sorts them in ascending order with the in-place algorithm and modifies the existing array.</p>",
                " Slice":
                    "<p>Another great one I've implemented recently as well is the <strong>Slice</strong> method which returns a portion of the array it's called on from a beginning index to an ending index. Much like how my add function concatenated a new student" +
                    " object into an array and returned the new array, splice will do the opposite by shaving off an element at a desired position and return a new array- perfect for state modification in React! Let's look.</p>" +
                    "<pre><code>" +
                    `     subtract = () => {
        this.setState(state => ({
            students: state.students.slice(0, -1)
        }));
    };
`
                    + "</code></pre>" +
                    "<p>Again, to modify state properly we need to use setState, and we call .splice(0, -1) on the array of student objects to return all values within the array from the index 0 to the last index -1 exclusively. This simply shaves off the last element" +
                    " in the array and returns the new modified array. This method does not modify the existing array.</p>",
                " Push":
                    "<p>As mentioned earlier, the <strong>Push</strong> method takes in an element to add to the end of the array and returns the new array length. Works great with the forEach method!" +
                    "Let's have a look.</p>" +
                    "<pre><code>" +
                    `     let arr = [1,2,3];
      let count = arr.push(4);
      console.log(arr); // [1,2,3,4]
      console.log(count); // 4
`
                    + "</code></pre>" +
                    "<p>Nothing ground breaking here, but we see that we store arr.push(4) in a variable because it represents the new length of the existing array, which is 4 since we added the number 4 to the end of it.</p>",
                " Join":
                    "<p><Strong>Join</Strong> is fantastic if you want to convert an array of strings into a sentence. I've done exactly that on this website if you look at my dropdown menu when you hover over the 'Tutorials' link in the nav bar." +
                    "I first created an array of Object keys from the list of subcategories and then joined all those keys together with a ', ' so it looks like coherent list. Example below.</p>" +
                    "<pre><code>" +
                    `     let topics = ['Hoisting', 'Unary Operators', 'Values and Types'];
    let linkText = topics.join(', ');
    console.log(linkText); // 'Hoisting, Unary Operators, Values and Types'
`
                    + "</code></pre>" +
                    "<p>We see that every value in the original topics array is joined together into one string separated by the given ', '. We just have to be careful in remembering that this method returns a string and not another array. </p>",
                " Video Summary: Advanced Array Methods":
                    "<iframe src=\"https://www.youtube.com/embed/sW0nDwyW-pI\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"

            },
            "assignment5essay": {
                "Romney Web Font Problem":
                    "<p>With something as critical as politics and running in the presidential race is, clarification and dependability are of utmost importance at all times. One slip up can cause irreparable damage. </p>" +
                    "<p>An article regarding breaking news for Mitt Romney's choice whether or not to run in the 2016 presidential race briefly read 'Mitt Romney Is Officially Running for President', but then a moment later loaded as" +
                    " 'Mitt Romney Is Officially Not Running for President'. There was enough of a discrepancy in load times between two different styles of fonts on the web page for someone to take a screenshot and blast it to Twitter.</p>" +
                    "<p>This has something to do with FOIT, or flash of invisible text, which renders text invisible until it's loaded, and a race condition between loading two different external fonts (bold and bold/italic) within a single headline. You're probably thinking..'wow, all that" +
                    " from loading fonts?' Yeah, me too. But it shows you there's more that meets the eyes with approaching design and the details you have to keep in mind when you're building a web page that potentially millions of people depend" +
                    " on for accurate, dependable news. </p>" +
                    "<p>Load times for anything have been a bane of human existence for as long as we've been alive. Waiting for fires to start to cook our catch, waiting for stickdeath.com to load its" +
                    " flash movies, waiting for mega virtual worlds like WoW to load, or waiting for fonts to load. If fonts haven't loaded yet and the browser fills them in with some other font and " +
                    "it just so happens to have a slightly wider spacing than your desired font and it starts moving things around, well then that doesn't make for the best UX now does it? On top of " +
                    "loading everything else a web page has to, the user should be able to start digesting content right off the bat, but if things are moving around then it's like trying to live in a " +
                    "house where you've got a moving company unpacking everything and moving things around.</p>" +
                    "<p>There are tons of articles about which font-loading method to use, be it flash of unstyled text, FOUT, flash of invisible text, FOIT, or flash of faux text, FOFT, the latest " +
                    "of which would be FOFT to optimize perceived load times. FOFT encourages you to load your normal font first to get the browser to synthesize bold/italic versions automatically and " +
                    "then trigger your real font next. This loads fonts right away and your overall user experience is just that much better.</p>"
            },
            "assignment6": {
                "Application Programming Interface":
                    "<p>Application programming interface, API or even web services, are how one program can interact with another. Whether that interaction involves just sending parameters to a " +
                    "server to retrieve a specific set of data or if one server wants to actually submit data for another server to persist to its database, APIs are the gateway to do so. There are " +
                    "what programmers call 'endpoints', or dedicated paths on an external server that are purposefully exposed to the public that act as the gatekeeper between your request and the" +
                    " database the server is attached to. Not every endpoint may interact with a database, it could just send hardcoded data, but typically your program is trying to access the data " +
                    " another company has in order to make your website more dynamic, else you would have to constantly be copying and pasting data. Now, this poses potential security threats " +
                    "if you want to create an endpoint for the public, so of course access has to be tightly controlled with input thoroughly sanitized as to prevent a compromise.</p>" +
                    "<p>It's hard to think of a website that doesn't integrate APIs into their code. You use an API every time you want to use Google or Facebook to sign into an app, " +
                    "if you want to use PayPal to pay, or even when you swipe your credit card at a physical machine- that data has to be verified in different networks, authenticated, and " +
                    "authorized, so even outside of the digital realm APIs are still woven in. These requests are made over the hypertext transfer protocol, or HTTP, with various methods " +
                    "of doing so, most common of which are GET, POST, PUT, DELETE, amongst many others. Each one requires different request headers and expects different response headers " +
                    "back from the server in order to properly retrieve and process the data. We can see all the XHR, or XML (extended markup language) HTTP requests, made when a web page loads right from our browser.</p>" +
                    "<p><img src='" + xhr + "' alt='xhr requests'></p>" +
                    "<p>These are all the requests made to a server to retrieve resources upon page load, not all of which are API calls, but none the less a server needs to be called for everything you see on a web page " +
                    "or application from images to the code sheets for the browser to render. The developer console shows all these with the status, 200 being OK and that the desired endpoint was found and a resource " +
                    "was retrieved, or 404 being your request didn't reach its destination. We can see where this call to the server originates from, the type of response sent back from the server, and even the size and time " +
                    "it took to load.</p>" +
                    "<p><img src='" + headers + "' alt='headers'></p>" +
                    "<p>Here we see a GET request my website made to GitHub's servers to get data on all my repositories over there. I had to specify my username and that I wanted repos in the URL so the request knows " +
                    "where to go and what to get. Upon an HTTP status of 200 or so their server sent back an array of JSON objects with all the details about my repository that I could pick through to display the" +
                    " data I wanted on my homepage. I also had to make another request to a different repository to retrieve the colors that represent the repository's main language. </p>",
                "REST":
                    "<p>REST, or representational state transfer, is a design style of server communication over networks. It's not quite yet a standard because it doesn't follow standards like " +
                    "its counterpart SOAP, but it has quickly taken preference over a SOAP, simple object access protocol, based approach to networked application implementation. Both have their places, but RESTful applications are quickly " +
                    "becoming the norm not only because of its flexibility, but also the fact that it can send back any format of data to let the receiving end do with it as it pleases, most typical of which is JSON.</p>" +
                    "<p>So what actually is REST? As stated it's a transfer of the representation of a server state. Aka it's really just a set of principals a developer should follow to retrieve data " +
                    "from an external resource. SOAP is a set standard with a protocol to follow like being in a religion and REST is like being agnostic with a set moral beliefs. Anyways, let's cover" +
                    " the guiding principals of REST.</p>" +
                    "<uL>" +
                    "<li><strong>Client-Server: Keep these concerns separate for scalability and portability.</strong></li>" +
                    "<li><strong>Stateless: The request should not depend on the context stored on the server.</strong></li>" +
                    "<li><strong>Cacheable: Data should have an option to be cached or not.</strong></li>" +
                    "<li><strong>Uniform Resource: Keep your endpoints generalized for dynamic access.</strong></li>" +
                    "<li><strong>Layered System: Keep things secure by narrowing the scope of your endpoints.</strong></li>" +
                    "<li><strong>Code on Demand: An optional ability to retrieve code to execute on the front end.</strong></li>" +
                    "</uL>" +
                    "<p>These are the guidelines, not standards, to follow if you want to consider your application to be RESTful. These were established by Roy Fielding in his dissertation" +
                    " back in 2000.</p>",
                "Postman":
                    "<p>Postman is a great, free application that allows you to quickly test your own endpoints or even just hit other end point to see what data you can get back. It's great in " +
                    "that it formats the server response, you can easily add/manipulate headers, and it keeps a history of your calls so you can see easily reference your trials. It also allows " +
                    "you to make requests with its built in header that bypasses cross site references to it makes it that much easier to test out different endpoint. </p>" +
                    "<p><img src='" + postman + "' alt='postman'></p>" +
                    "<p>It boasts a simple UI all around with more functionality than just using cURL scripts in a CLI.</p>",
                " Video Summary: API, REST, Postman":
                    "<iframe src=\"https://www.youtube.com/embed/SIjVpRt7wxo\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
            },
            "An Ode to Node": {
                "An Ode to Node":
                    "<p>According to <a href='https://nodejs.dev'>nodejs.dev</a>, Node.js is <strong>\"an open-source and cross-platform JavaScript runtime environment...that runs the V8 JavaScript engine " +
                    "that powers Google Chrome outside of the browser.\"</strong> The V8 JavaScript engine is also open-source and developed by the Chromium Project and is inside the Chromium software that browsers" +
                    " like Google Chrome, Microsoft Edge, Amazon Silk, Brave, Vivaldi, and Opera are built off of. Those browsers combined make up roughly " +
                    "<a href='https://netmarketshare.com/browser-market-share.aspx?options=%7B%22filter%22%3A%7B%22%24and%22%3A%5B%7B%22deviceType%22%3A%7B%22%24in%22%3A%5B%22Desktop%2Flaptop%22%5D%7D%7D%5D%7D%2C%22dateLabel%22%3A%22Custom%22%2C%22attributes%22%3A%22share%22%2C%22group%22%3A%22browserVersion%22%2C%22sort%22%3A%7B%22share%22%3A-1%7D%2C%22id%22%3A%22browsersDesktopVersions%22%2C%22dateInterval%22%3A%22Monthly%22%2C%22dateStart%22%3A%222019-03%22%2C%22dateEnd%22%3A%222020-03%22%2C%22plotKeys%22%3A%5B%7B%22browserVersion%22%3A%22Edge%22%7D%2C%7B%22browserVersion%22%3A%22Opera%22%7D%2C%7B%22browserVersion%22%3A%22Chromium%22%7D%2C%7B%22browserVersion%22%3A%22Vivaldi%22%7D%2C%7B%22browserVersion%22%3A%22Opera%20Mini%22%7D%2C%7B%22browserVersion%22%3A%22Chrome%22%7D%2C%7B%22browserVersion%22%3A%22Silk%22%7D%5D%2C%22hiddenSeries%22%3A%7B%7D%2C%22pageLength%22%3A50%2C%22segments%22%3A%22-1000%22%7D'>80% of the market share</a>" +
                    " for web browsers, so V8 has a large footprint and Node.js is now a top contender with other server-side languages such as Java or PHP. </p>" +
                    "<p>V8 is a low-level assembler written in C++ that compiles JavaScript directly to machine code using just-in-time compilation that only compiles what's needed right when it's executed. It's also used in desktop " +
                    "software like the Electron framework and even Visual Studio. V8 made its debut on September 2, 2008 with the first version of Chrome and " +
                    "is currently on its eighth release, hence V8. (<a href='https://en.wikipedia.org/wiki/V8_(JavaScript_engine)'>wiki</a>)</p>" +
                    "<p>Since Node.js is built off of Chromium and Chromium is built with C++, we can actually build on top of Chromium in C++ to translate our JavaScript into machine code that can " +
                    "speak directly with the physical processors in our computers or phones. So Node acts as a proxy in-between JS and C++ and C++ acts as the proxy between its language and machine code," +
                    " and that all happens within nanoseconds so that we can interact with computers.</p>" +
                    "<p>Some other interesting finds about Node is the fact that ISU doesn't teach on it. Why did I choose this school? I can't wait to graduate. One more month! That's all I got.</p>"
            }
        };

        return (
            <div className = {"App container"} >
                <Header assignmentList = {assignmentList} />
                <Route render = {({location}) => (
                        <TransitionGroup >
                            <CSSTransition timeout = {300} classNames = "fade" key = {location.key} >
                                <Switch location = {location} >
                                    <Route  path = "/" exact component = {Home} />
                                    <Route path = "/tutorials/:assignment" component = {Tutorials} />
                                    <Route path = "/contact" component = {Contact} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                )}/>
            </div>
        );

    }
}

export default App;