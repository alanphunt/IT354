import React from 'react';
import {Link} from 'react-router-dom';
import Dropdown from '../Dropdown'

function Nav(props){
    let x = 0;

    const links = [
            {key: `link${x++}`, text: "Home", url: "", icon: "home", dropdown: false},
            {key: `link${x++}`, text: "Tutorials", url: "tutorials", icon: "library_books", dropdown: true},
            {key: `link${x++}`, text: "Contact", url: "contact", icon: "add_comment", dropdown: false}
        ];

        return(
            links.map( link =>(
                <div className="navlink" key={link.key}>
                    {link.dropdown === false
                        ?   <Link className="navlinkInner" to={'/'+link.url}>
                                <i className="material-icons i-marg-right">{link.icon}</i>
                                <span>{link.text}</span>
                            </Link>
                        : <Dropdown link={link} assignmentList={props.assigmentList}/>
                    }
                </div>
            ))
        );
}

export default Nav;
