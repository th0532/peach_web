import React, {useState} from "react";
import CrewCategory from "../pages/crewCategory";

const CrewCategoryRoute = ({match}) => {
    return(
        <div className={"content"}>
            <CrewCategory path={match}></CrewCategory>
        </div>
    )
}

export default CrewCategoryRoute;