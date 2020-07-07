import React,{useState} from "react";
import Map from "./component/map";
import "./css/common.css"
import CrewPreview from "./crewPreview";
// import Etc from "./component/etc";

const Main = (props) => {
    return (
        <div className={"content"}>
            <Map></Map>
            <CrewPreview path = {props.path}></CrewPreview>
        </div>
    )
}


export default Main;