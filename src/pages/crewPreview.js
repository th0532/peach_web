import React, {useState} from "react";
import "./css/crewFind.css";
import CrewCard from "./component/crewCard";

const CrewPreview = (props) => {
    return(
        <div className={"crewFind"}>
            <div className={"crew_wrap"}>
                <CrewCategory path = {props.path} categoryTitle="NEW" listdata={props.listdataNew}></CrewCategory>
                <CrewCategory path = {props.path} categoryTitle="HOT" listdata={props.listdataHot}></CrewCategory>
            </div>
        </div>
    )
}

const CrewCategory = (props) =>{
    return(
        <div className={"crew_category_item"}>
            <div className={"crew_list_wrap"}>
                <CrewCard path = {props.path} categoryTitle={props.categoryTitle} listdata = {props.listdata}></CrewCard> 
            </div>
        </div>
    )
}
export default CrewPreview;