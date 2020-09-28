import React, {useState, useEffect} from "react";
import "./css/crewFind.css";
import CrewCard from "./component/crewCard";

const CrewFind = (props) => {
     
    return(
        <div className={"crewFind"}>
            <div className={"crew_wrap"}>
                <CrewCategoryItem path={props.path} categoryTitle="Adventure" listdata={props.listdata[0]}></CrewCategoryItem>
                <CrewCategoryItem path={props.path} categoryTitle="Health" listdata={props.listdata[1]}></CrewCategoryItem>
                <CrewCategoryItem path={props.path} categoryTitle="Social" listdata={props.listdata[2]}></CrewCategoryItem>
                <CrewCategoryItem path={props.path} categoryTitle="Tech" listdata={props.listdata[3]}></CrewCategoryItem>
                <CrewCategoryItem path={props.path} categoryTitle="Art" listdata={props.listdata[4]}></CrewCategoryItem>
            </div>
        </div>
    )
}

const CrewCategoryItem = (props) =>{
    return(
        <div className={"crew_category_item"}>
            <div className={"crew_list_wrap"}>
                <CrewCard path={props.path} categoryTitle={props.categoryTitle} listdata={props.listdata}></CrewCard> 
            </div>
        </div>
    )
}
export default CrewFind;
