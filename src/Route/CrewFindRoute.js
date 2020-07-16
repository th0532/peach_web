import React, {useState} from "react";
import CrewFind from "../pages/crewFind";

const CrewRoute = (props) => {
    return(
        <div className={"content"}>
            <CrewFind path={props.match}></CrewFind>
        </div>
    )
}

export default CrewRoute;