import React, {useState} from "react";
import "./css/crewDetail.css";

const CrewDetail = (props) => {
    const data = {
                    imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",
                    user_name:"이태희",
                    date:"2020/07/11 02:54",
                    desc_title:"골프 치러 갈 사람 구해요",
                    desc_content:"21일 OO 골프장 다녀오실분 있을까요??",
                    list_index:1
    }

    return(
        <div className={"crewDetail"}>
            <div className={"crewDetail_wrap"}>
                <div className={"crewDetail_content"}>
                    <div className={"crewDetail_content_info"}>
                        <p className={"crewDetail_content_info_name"}>{data.user_name}</p>
                        <span className={"crewDetail_content_info_date"}>{data.date}</span>
                        <p className={"crewDetail_content_info_declaration"}>신고</p>
                    </div>
                    <div className={"crewDetail_content_write"}>
                        <p className={"crewDetail_content_write_title"}>{data.desc_title}</p>
                        <span className={"crewDetail_content_write_desc"}>{data.desc_content}</span>
                    </div>
                </div>
                <div className={"crewDetail_comment_wrap"}>
                    <Comment></Comment>
                </div>
                <div className={"crewDetail_comment_write"}>
                    <input className={"crewDetail_comment_write_input"} placeholder="댓글을 입력하세요"></input>
                </div>
            </div>
        </div>
    )
}

const Comment = () => {
    const comment_data = [
        {
            user_name:"이강현",
            comment:"몇시에 출발 하실 예정이신가요?",
        },
        {
            user_name:"이태희",
            comment:"오후 1시 출발하려구요~?",
        },
        
    ]
    return(
        <div className={"crewDetail_comment"}>
        {comment_data.map((data, index)=> (
            <div className={"crewDetail_comment_data"}>
                <p className={"crewDetail_comment_data_name"}>{data.user_name}</p>
                <p className={"crewDetail_comment_data_desc"}>{data.comment}</p>
            </div>
        ))}
        </div>
    )
}
// <div className={"crewDetail_info"}>
//                     <div className={"crewDetail_desc"}>
//                         <h3>제목: {data.desc_title}</h3>
//                         <p><span className={"sub_title"}>작성자:</span> OOOOO</p>
//                         <p><span className={"sub_title"}>모임 장소:</span> 동작구</p>
//                         <p><span className={"sub_title"}>모임 날짜:</span> 7월 21일</p>
//                         <p><span className={"sub_title"}>내용:</span> {data.desc_content}</p>
//                     </div>
//                 </div>
export default CrewDetail;