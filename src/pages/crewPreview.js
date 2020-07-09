import React, {useState} from "react";
import "./css/crewFind.css";
import CrewCard from "./component/crewCard";

const CrewPreview = (props) => {
    const list = {
        category1 : [
            {
                imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",
                desc_title:"스터디 모임",
                desc_content:"매주 목요일 7시 OOO 스터디 할사람 모집합니다.",
                list_index:1
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2017/01/13/09/23/magic-cube-1976725__340.jpg",
                desc_title:"큐브 관심있는 사람있나요",
                desc_content:"큐브 같이 할사람 구해요",
                list_index:2
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2020/06/09/03/08/craft-5276736__340.jpg",
                desc_title:"같이 마포구 도예수업 들을 사람 있을까요",
                desc_content:"토요일 오후 다닐 사람 구합니다.",
                list_index:2
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",
                desc_title:"패러 글라이딩 하러 갈 사람~",
                desc_content:"패러 글라이딩 관심있는 사람 모집합니다~",
                list_index:2
            }
        ],
        category2 : [
            {
                imgLink:"https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191__340.jpg",
                desc_title:"스터디 모임",
                desc_content:"매주 목요일 7시 OOO 스터디 할사람 모집합니다.",
                list_index:1
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2016/03/05/22/53/amateur-1239387__340.jpg",
                desc_title:"패러 글라이딩 하러 갈 사람~",
                desc_content:"패러 글라이딩 관심있는 사람 모집합니다~",
                list_index:2
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",
                desc_title:"스터디 모임",
                desc_content:"매주 목요일 7시 OOO 스터디 할사람 모집합니다.",
                list_index:1
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2016/03/27/19/54/golf-1284011__340.jpg",
                desc_title:"골프 치러 갈 사람 구해요",
                desc_content:"일요일 오전에 출발하실수 있는사람 구합니다",
                list_index:2
            },
        ],
        
    }

    return(
        <div className={"crewFind"}>
            <div className={"crew_wrap"}>
                <CrewCategory path = {props.path} categoryTitle="NEW" listdata={list.category1}></CrewCategory>
                <CrewCategory path = {props.path} categoryTitle="HOT" listdata={list.category2}></CrewCategory>
            </div>
        </div>
    )
}

const CrewCategory = (props) =>{
    return(
        <div className={"crew_category_item"}>
            <div className={"crew_list_wrap"}>
                <CrewCard path = {props.path} listdata = {props}></CrewCard> 
            </div>
        </div>
    )
}
export default CrewPreview;