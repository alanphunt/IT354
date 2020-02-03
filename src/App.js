import React from 'react';
import './App.css';
import Header from "./components/header/Header";
//import Hook from "./components/hook/Hook";
import {Route, Switch} from "react-router-dom";
import Tutorials from "./pages/Tutorials";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {CSSTransition, TransitionGroup} from "react-transition-group";

//class App extends React.Component{
  function App(){
    //render(){
        return (
                <div className={"App container"}>
                    <Header/>
                    <Route render={({location})=>(
                        <TransitionGroup>
                            <CSSTransition timeout={300} classNames="fade" key={location.key}>
                                <Switch location={location}>
                                    <Route path="/" exact component={Home}/>
                                    <Route path="/tutorials" component={Tutorials}/>
                                    <Route path="/contact" component={Contact}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )}/>
                </div>
        );
   // }
}

export default App;
