import React,{useState} from "react";
import Map from "../component/map";
import Etc from "../component/etc";
import PreView from "../component/preview";
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