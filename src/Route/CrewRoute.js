import React, {useState} from "react";
import Crew from "../pages/crew";

const CrewRoute = ({match,location}) => {
    return(
        <div className={"content"}>
            <Crew path={match}></Crew>
        </div>
    )
}

export default CrewRoute;