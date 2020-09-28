import React, {useState, useEffect} from "react";
import Login from "../pages/login";
// import axios from "axios";
import { useDispatch } from 'react-redux'

const LoginRoute = (props) => {
    const dispatch = useDispatch(); 

    useEffect(()=>{
        dispatch({
            type:'UPDATE_MENU',
            id:3
        })
    },[])
    return(
        <div>
            <Login></Login>
        </div>
    )
}

export default LoginRoute;