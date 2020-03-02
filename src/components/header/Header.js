import React from 'react';
import './Header.css'
import Nav from "../nav/Nav";
import logo from "../../images/alanhunt.png";

class Header extends React.Component {
    render() {
        return (
            <header className={"navwrapper"}>
                <img className="headerlogo" src={logo} alt="alan hunt"/>
                <nav className={"nav"}>
                    <Nav assigmentList={this.props.assignmentList}/>
                </nav>
            </header>
        );
    }
}

export default Header;