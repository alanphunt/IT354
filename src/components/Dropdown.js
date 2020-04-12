import React from "react";
import {Link} from "react-router-dom";
import HoverDiv from "./nav/HoverDiv";

class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hovered: false
        };
    }

    toggleMenu = () => {
        this.setState({
            hovered: !this.state.hovered
        });
    };

    showMenu = () =>{
        this.setState(state => ({
            hovered: true
        }));
    };

    hideMenu = () => {
        this.setState(state => ({
            hovered: false
        }));
    };

    render(){
        let className = "dropdownInner";
        if(this.state.hovered) {
            className += " dropdownInnerHover fadeinClass";
        }

        let alist = this.props.assignmentList;
        let link = this.props.link;

        let topics = {};
        Object.entries(alist).forEach(([key, value], index) => {
            let k = Object.keys(alist[key]);
            topics[key] = k.filter(x => (x.substring(0,1) !== " ")).join(", ");
        });

        return(
            <div className={"navlinkInner"} onClick={this.toggleMenu} onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu}>
                <HoverDiv isActive={this.props.divstate.activeLink === link.url} hovered={this.props.divstate.hoveredLink === link.text}/>
                <i className="material-icons i-marg-right">{link.icon}</i>
                <span>{link.text}</span>
                <div className={className}>
                    {Object.keys(topics).map((assignment) => {
                        let topic = topics[assignment];
                        let newTo = `/${link.url}/${assignment}`;
                        return (
                            <Link key={topic} to={{pathname: newTo, list: {assignment: alist[assignment]}}} className={"dropdownItem"}>
                                {topic}
                            </Link>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default Dropdown;