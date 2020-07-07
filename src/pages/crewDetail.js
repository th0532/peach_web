import React, {useState} from "react";
import "./css/crewDetail.css";

const CrewDetail = (props) => {
    const data = {
                    imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",
                    desc_title:"스터디 모임",
                    desc_content:"매주 목요일 7시 OOO 스터디 할사람 모집합니다.",
                    list_index:1
                }

    return(
        <div className={"crewDetail"}>
            <div className={"crewDetail_wrap"}>
            <h1>crew 게시글 상세 페이지 준비중 입니다</h1>
            </div>
        </div>
    )
}

export default CrewDetail;