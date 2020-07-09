import React, {useState} from "react";
import "./css/crewFind.css";
import CrewCardList from "./component/crewCardList";

const Crew = (props) => {
    
    const list = {
        data : [
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
   
    const [areaFlag, setAreaFlag] = useState(false);
    console.log(areaFlag);
    const handleAreaFlag = () =>{
        setAreaFlag(true);
    }
    
    return(
        <div className={"crew_category_item"}>
            <div className={"crew_category"}>
                <h1>지역</h1>
                    <select onChange={handleAreaFlag}>
                        <option>지역선택</option>
                        <option>서울</option>
                        <option>경기</option>
                        <option>인천</option>
                        <option>대전</option>
                </select>
                {areaFlag === true ? 
                    <div className="area2">
                        <h1>지역 2</h1>
                            <select>
                                <option>종로구</option>
                                <option>마포구</option>
                                <option>동작구</option>
                            </select>
                    </div> :""}
            </div>
            <div className={"crew_list_wrap"}>
                <CrewCardList listdata = {props}></CrewCardList> 
            </div>
        </div>
    )
}
export default Crew;