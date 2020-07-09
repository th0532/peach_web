import React, {useState} from "react";
import "./css/crewFind.css";
import CrewCard from "./component/crewCard";

const CrewFind = (props) => {
    const list = {
        category1 : [
            {
                imgLink:"https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989__340.jpg",
                desc_title:"카누 모임",
                desc_content:"카누 즐겨타는 사람 있나요",
                list_index:1
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2016/11/29/09/49/adventure-1868817__340.jpg",
                desc_title:"여행 갈 사람",
                desc_content:"7월 21일 여행 갈 사람 모집합니다~",
                list_index:2
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2016/08/14/18/27/sailing-boat-1593613__340.jpg",
                desc_title:"요트 패키지 여행 갈사람 구해요",
                desc_content:"패키지 여행 갈 사람 구합니다",
                list_index:2
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2014/09/21/17/56/wanderer-455338__340.jpg",
                desc_title:"등산 모임 구합니다",
                desc_content:"등산 관심있는 사람 모집해요",
                list_index:2
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2016/11/29/09/49/adventure-1868817__340.jpg",
                desc_title:"여행 갈 사람",
                desc_content:"7월 21일 여행 갈 사람 모집합니다~",
                list_index:2
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2016/08/14/18/27/sailing-boat-1593613__340.jpg",
                desc_title:"요트 패키지 여행 갈사람 구해요",
                desc_content:"패키지 여행 갈 사람 구합니다",
                list_index:2
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2014/09/21/17/56/wanderer-455338__340.jpg",
                desc_title:"등산 모임 구합니다",
                desc_content:"등산 관심있는 사람 모집해요",
                list_index:2
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2016/11/29/09/49/adventure-1868817__340.jpg",
                desc_title:"여행 갈 사람",
                desc_content:"7월 21일 여행 갈 사람 모집합니다~",
                list_index:2
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2016/08/14/18/27/sailing-boat-1593613__340.jpg",
                desc_title:"요트 패키지 여행 갈사람 구해요",
                desc_content:"패키지 여행 갈 사람 구합니다",
                list_index:2
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2014/09/21/17/56/wanderer-455338__340.jpg",
                desc_title:"등산 모임 구합니다",
                desc_content:"등산 관심있는 사람 모집해요",
                list_index:2
            }
        ],
        category2 : [
            {
                imgLink:"https://cdn.pixabay.com/photo/2017/08/02/20/24/people-2573216__340.jpg",
                desc_title:"요가 다닐 사람",
                desc_content:"같이 도봉구에서 요가 다닐사람 있나요",
                list_index:1
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149__340.jpg",
                desc_title:"헬스 꾸준히 같이 할사람 구해요",
                desc_content:"헬스 관심있는 사람 모집합니다",
                list_index:2
            },
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
        ],
        category3 : [
            {
                imgLink:"https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191__340.jpg",
                desc_title:"스터디 모임",
                desc_content:"매주 목요일 7시 OOO 스터디 할사람 모집합니다.",
                list_index:1
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2016/03/27/19/54/golf-1284011__340.jpg",
                desc_title:"패러 글라이딩 하러 갈 사람~",
                desc_content:"패러 글라이딩 관심있는 사람 모집합니다~",
                list_index:2
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2016/06/28/01/42/chess-1483735__340.jpg",
                desc_title:"스터디 모임",
                desc_content:"매주 목요일 7시 OOO 스터디 할사람 모집합니다.",
                list_index:1
            },
            {
                imgLink:"https://cdn.pixabay.com/photo/2015/04/20/17/38/photography-731891__340.jpg",
                desc_title:"패러 글라이딩 하러 갈 사람~",
                desc_content:"패러 글라이딩 관심있는 사람 모집합니다~",
                list_index:2
            },
        ],
        category4 : [
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
                imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",
                desc_title:"패러 글라이딩 하러 갈 사람~",
                desc_content:"패러 글라이딩 관심있는 사람 모집합니다~",
                list_index:2
            },
        ],
        category5 : [
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
                <CrewCategoryItem path={props.path} categoryTitle="Adventure" listdata={list.category1}></CrewCategoryItem>
                <CrewCategoryItem path={props.path} categoryTitle="Health" listdata={list.category2}></CrewCategoryItem>
                <CrewCategoryItem path={props.path} categoryTitle="Social" listdata={list.category3}></CrewCategoryItem>
                <CrewCategoryItem path={props.path} categoryTitle="Tech" listdata={list.category4}></CrewCategoryItem>
                <CrewCategoryItem path={props.path} categoryTitle="Art" listdata={list.category5}></CrewCategoryItem>
            </div>
        </div>
    )
}

const CrewCategoryItem = (props) =>{
    return(
        <div className={"crew_category_item"}>
            <div className={"crew_list_wrap"}>
                <CrewCard path={props.path} listdata = {props}></CrewCard> 
            </div>
        </div>
    )
}
export default CrewFind;