import React, {useState} from "react";
import CrewFind from "../pages/crewFind";

const CrewRoute = ({match}) => {
    return(
        <div className={"content"}>
            <CrewFind path={match}></CrewFind>
        </div>
    )
}

export default CrewRoute;