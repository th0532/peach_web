import React,{useState} from "react";
import Main from "../pages/main";

const MainRoute = ({match}) => {
    return (
        <div>
            <Main path={match}></Main>
        </div>
    )
}


export default MainRoute;