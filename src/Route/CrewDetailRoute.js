import React, {useState} from "react";
import CrewDetail from "../pages/crewDetail";

const CrewDetailRoute = (props) => {
    return(
        <div className={"content"}>
            <CrewDetail path={props.match}></CrewDetail>
        </div>
    )
}

export default CrewDetailRoute;