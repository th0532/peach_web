import React, {useState} from "react";
import "./css/crewFind.css";
import CrewCard from "./component/crewCard";

const Crew = (props) => {
    
    const list = {
        data : [
            {
                imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",
                desc_title:"스터디 모임",
                desc_content:"매주 목요일 7시 OOO 스터디 할사람 모집합니다.",
                list_index:1
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",
                desc_title:"패러 글라이딩 하러 갈 사람~",
                desc_content:"패러 글라이딩 관심있는 사람 모집합니다~",
                list_index:2
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",
                desc_title:"패러 글라이딩 하러 갈 사람~",
                desc_content:"패러 글라이딩 관심있는 사람 모집합니다~",
                list_index:2
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",
                desc_title:"패러 글라이딩 하러 갈 사람~",
                desc_content:"패러 글라이딩 관심있는 사람 모집합니다~",
                list_index:2
            },
            
        ],
    }

    return(
        <div className={"crewFind"}>
            <div className={"crew_wrap"}>
                <CrewCategory path ={props.path} categoryTitle="Adventure" listdata={list.data}></CrewCategory>
            </div>
        </div>
    )
}

const CrewCategory = (props) =>{
    return(
        <div className={"crew_category_item"}>
            <div className={"crew_list_wrap"}>
                <CrewCard listdata = {props}></CrewCard> 
            </div>
        </div>
    )
}
export default Crew;