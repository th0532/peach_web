import React, {useState} from "react";
import CrewDetail from "../pages/crewDetail";

const CrewDetailRoute = ({match}) => {
    return(
        <div className={"content"}>
            <CrewDetail path={match}></CrewDetail>
        </div>
    )
}

export default CrewDetailRoute;