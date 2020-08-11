import React,{useState} from "react";
import Map from "./component/map";
import "./css/common.css"
import CrewPreview from "./crewPreview";

const Main = (props) => {
    return (
        <div className={"content"}>
            {props.mapdata && 
                <Map mapdata={props.mapdata}></Map>
            }
                <CrewPreview path = {props.path} listdataNew={props.listdataNew} listdataHot={props.listdatHot}></CrewPreview>
        </div>
    )
}

export default Main;