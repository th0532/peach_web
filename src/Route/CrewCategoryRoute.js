import React, {useState} from "react";
import CrewCategory from "../pages/crewCategory";

const CrewCategoryRoute = (props) => {
    return(
        <div className={"content"}>
            <CrewCategory path={props.match}></CrewCategory>
        </div>
    )
}

export default CrewCategoryRoute;