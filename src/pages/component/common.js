import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

const LinkComponent = (props) => {
    const {id, link, name, isActive}  = props.menu;

    return(
        <li ><Link to={link} style={{color:isActive ? 'white' : 'black'}} >{name}</Link></li>
    )
}

export default  LinkComponent;