import React, {useState} from 'react';
import './nav.css';
import {Link} from 'react-router-dom';

function Nav(){
    let x = 0;

    const [state] = useState([
            {key: `link${x++}`, text: "Home", url: "", icon: "home"},
            {key: `link${x++}`, text: "Contact", url: "contact", icon: "add_comment"},
            {key: `link${x++}`, text: "Tutorials", url: "tutorials", icon: "library_books"}
        ]);

        return(
            state.map((link)=>(
                <div className="navlink" key={link.key}>
                    <Link to={'/'+link.url}>
                        <i className="material-icons i-marg-right">{link.icon}</i>
                        {link.text}
                    </Link>
                    <div className={"riser"}></div>
                </div>
            ))
        );
}

export default Nav;
