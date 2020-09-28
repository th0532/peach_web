import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import LinkComponent from "./common";

const Menu = () => {
    const menu = useSelector(state => state.menu);

    return (
        <ul>
             {menu.map((list, index)=>(
                <LinkComponent key={index} menu={list} />
             ))}
        </ul>
    )
}

export default Menu
