import React from "react";
import {Link} from "react-router-dom";

class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hovered: false
        };
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }

    showMenu(){
        this.setState(state => ({
            hovered: true
        }));
    }

    hideMenu(){
        this.setState(state => ({
            hovered: false
        }));
    }

    render(){
        let className = "dropdownInner";
        if(this.state.hovered) {
            className += " dropdownInnerHover";
        }

        let alist = this.props.assignmentList;
        let link = this.props.link;

        let topics = {};
        Object.entries(alist).forEach(([key, value], index) => {
            let k = Object.keys(alist[key]);
            topics[key] = k.filter(x => !x.toLowerCase().includes("video")).join(", ");
        });

        return(
            <div className={"navlinkInner"} onClick={this.hideMenu} onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu}>
                <i className="material-icons i-marg-right">{link.icon}</i>
                <span>{link.text}</span>
                <div className={className}>
                    {Object.keys(topics).map((assignment) =>{
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