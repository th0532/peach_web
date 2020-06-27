import React,{useState} from "react";
import Map from "./map";
import Etc from "./etc";
import PreView from "./preview";
import "./css/content.css"

const Content = () => {
    return (
        <div className={"content"}>
            <Map></Map>  
            <Etc></Etc>
            <PreView></PreView>
        </div>
    )
}


export default Content;