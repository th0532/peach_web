import React,{useState} from "react";
import Map from "./component/map";
import CrewPreview from "./crewPreview";
import "./css/common.css"
// import Etc from "./component/etc";

const Main = () => {
    return (
        <div className={"content"}>
            <Map></Map>
            <CrewPreview></CrewPreview>
        </div>
    )
}


export default Main;