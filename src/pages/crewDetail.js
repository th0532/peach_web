import React, {useState} from "react";
import "./css/crewDetail.css";

const CrewDetail = (props) => {
    const data = {
                    imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",
                    desc_title:"골프 치러 갈 사람 구해요",
                    desc_content:"테스트 텍스트입니다. 테스트 텍스트입니다. 테스트 텍스트입니다. 테스트 텍스트입니다. 테스트 텍스트입니다. 테스트 텍스트입니다. 테스트 텍스트입니다. 테스트 텍스트입니다. 테스트 텍스트입니다. ",
                    list_index:1
                }

    return(
        <div className={"crewDetail"}>
            <div className={"crewDetail_wrap"}>
                <div className={"crewDetail_info"}>
                    <div className={"crewDetail_desc"}>
                        <h3>제목: {data.desc_title}</h3>
                        <p><span className={"sub_title"}>작성자:</span> OOOOO</p>
                        <p><span className={"sub_title"}>모임 장소:</span> 동작구</p>
                        <p><span className={"sub_title"}>모임 날짜:</span> 7월 21일</p>
                        <p><span className={"sub_title"}>내용:</span> {data.desc_content}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CrewDetail;