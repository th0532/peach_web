import React, {useState,useEffect} from "react";
import "./css/crewDetail.css";

const CrewDetail = (props) => {
    const [data, setData] = useState({
        category: "",
        comment_data:[
            {user_name: "", comment: ""},
            {user_name: "", comment: ""}
        ],
        date: "",
        desc_content: "",
        desc_title: "",
        prevPage: "",
        user_name:""
    });

    useEffect(() => {
        const {location, history} = props;
        setData(location.state);

        if (location.state === undefined){
            history.push("/");
        }
    });
 
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
                    <Comment data={data.comment_data}></Comment>
                </div>
                <div className={"crewDetail_comment_write"}>
                    <input className={"crewDetail_comment_write_input"} placeholder="댓글을 입력하세요"></input>
                </div>
            </div>
        </div>
    )
}

const Comment = (props) => {
    return(
        <div className={"crewDetail_comment"}>
        {props.data?
            props.data.map((data, index)=> (
                <div className={"crewDetail_comment_data"}>
                    <p className={"crewDetail_comment_data_name"}>{data.user_name}</p>
                    <p className={"crewDetail_comment_data_desc"}>{data.comment}</p>
                </div>
            ))
        :""}
        
        </div>
    )
}

export default CrewDetail;