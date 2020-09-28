import React, {useState, useEffect} from "react";
import CrewCreate from "../pages/crewCreate";
import { useDispatch } from 'react-redux'
   

const CrewCreateRoute = () => {
    const dispatch = useDispatch(); 

    useEffect(()=>{
        dispatch({
            type:'UPDATE_MENU',
            id:2
        })
    },[])

    return(
        <div className={"content"}>
            <CrewCreate></CrewCreate>
        </div>
    )
}

export default CrewCreateRoute;