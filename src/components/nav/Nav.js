import React from 'react';
import {NavLink} from 'react-router-dom';
import Dropdown from '../Dropdown'
import HoverDiv from "./HoverDiv";

class Nav extends React.Component{

    constructor(props) {
        super(props);
        this.state = {activeLink: window.location.pathname.split("/")[1], hoveredLink: ""}
    }

    hoverdiv = (link) => {
        this.setState(state => ({hoveredLink: link}));
    };

    clickdiv = (link) => {
        this.setState(state => ({activeLink: window.location.pathname.split("/")[1]}));
    };

    render() {
        const links = [
            {key: `link1`, text: "Home", url: "", icon: "home", dropdown: false},
            {key: `link2`, text: "Tutorials", url: "tutorials", icon: "library_books", dropdown: true},
            {key: `link3`, text: "Contact", url: "contact", icon: "add_comment", dropdown: false}
        ];

        return (
            links.map(link => (
                <div className="navlink" key={link.key} onClick={()=>{this.clickdiv(link.url)}} onMouseLeave={()=>{this.hoverdiv("");}} onMouseEnter={()=>{this.hoverdiv(link.text);}}>
                    {link.dropdown === false
                        ? <NavLink className="navlinkInner" to={"/"+link.url}>
                            <i className="material-icons i-marg-right">{link.icon}</i>
                            <span>{link.text}</span>
                            <HoverDiv isActive={this.state.activeLink === link.url} hovered={this.state.hoveredLink === link.text}/>
                          </NavLink>
                        : <Dropdown link={link} assignmentList={this.props.assigmentList} divstate={this.state}/>
                    }
                </div>
            ))
        );
    }
}

export default Nav;
