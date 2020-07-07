import React,{useState} from "react";
import Map from "./component/map";
import Etc from "./component/etc";
import PreView from "./component/preview";
import "./css/common.css"
import CrewFind from "../pages/crewFind";

const Main = () => {
    const list = [
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
            imgLink:"https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191__340.jpg",
            desc_title:"xBox 하면서 놀 사람",
            desc_content:"주말에 xBox 할사람 구해요~",
            list_index:3
        },
        {
            imgLink:"https://cdn.pixabay.com/photo/2016/03/05/22/53/amateur-1239387__340.jpg",
            desc_title:"사진 찍는 거 좋아하는 사람~~",
            desc_content:"사진이 취미인 사람들 있을까요~?",
            list_index:4
        },
        {
            imgLink:"https://cdn.pixabay.com/photo/2020/04/04/14/53/cast-5002570__340.jpg",
            desc_title:"태안 낚시터",
            desc_content:"낚시 하러 갈사람 모집합니다.",
            list_index:5
        },
    ]
    const list2 = [
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
            imgLink:"https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191__340.jpg",
            desc_title:"xBox 하면서 놀 사람",
            desc_content:"주말에 xBox 할사람 구해요~",
            list_index:3
        },
        {
            imgLink:"https://cdn.pixabay.com/photo/2016/03/05/22/53/amateur-1239387__340.jpg",
            desc_title:"사진 찍는 거 좋아하는 사람~~",
            desc_content:"사진이 취미인 사람들 있을까요~?",
            list_index:4
        },
        {
            imgLink:"https://cdn.pixabay.com/photo/2020/04/04/14/53/cast-5002570__340.jpg",
            desc_title:"태안 낚시터",
            desc_content:"낚시 하러 갈사람 모집합니다.",
            list_index:5
        },
    ]

    return (
        <div className={"content"}>
            <Map></Map>  
            <Etc></Etc>
            <PreView preViewTreavel={list} preViewTreavel2={list2}></PreView>
        </div>
    )
}


export default Main;