import React, {useState,useEffect, useCallback} from "react";
import TextareaAutosize from 'react-autosize-textarea';
import "./css/crewDetail.css";
import axios from "axios";

const CrewDetail = (props) => {
    const data = props.listdata[0];
    const [commentValue, setCommentValue] = useState()
    const [category, setcategory] = useState()
    const [num, setNum] = useState()
    const [a, setA] = useState()
   
    const session_name  = window.sessionStorage.getItem('name');
    const session_id  = window.sessionStorage.getItem('id');
    
    let day = new Date();
    let y = day.getFullYear();
    let m = day.getMonth()+1;
    let d = day.getDate();
    let h = day.getHours();
    let i = day.getMinutes();

    let time = y+"-"+m+"-"+d+" "+h+":"+i;
    
    const onChangeValue = e =>{
        setCommentValue(e.target.value);
    }
    
    const onFormSubmit = e => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/insert/crewdetail/comment',null,{
            params: {
                num,
                session_id,
                session_name,
                category,
                time,
                commentValue,
                
              }
        })
        .then(() => {
            // 효율적이지 않음,,, rerender할 수 있는방법 2시간째 못찾음 ㅠㅠㅠ
            window.location.reload();
        })
        .catch(e => {  // API 호출이 실패한 경우

        });
        // send to server with e.g. `window.fetch`
      }
   console.log(data.content)
   data.content = data.content.replace(/(<br>|<br\/>|<br \/>)/g, '\r\n');
    useEffect(()=>{
        setcategory(data.category);
        setNum(data.num);
    })

    return(
        <div className={"crewDetail"}>
            <div className={"crewDetail_wrap"}>
                <div className={"crewDetail_content"}>
                    <div className={"crewDetail_content_info"}>
                        <p className={"crewDetail_content_info_name"}>{data.name}</p>
                        <span className={"crewDetail_content_info_date"}>{data.date.slice(0,10)}</span>
                        <p className={"crewDetail_content_info_declaration"}>신고</p>
                    </div>
                    <div className={"crewDetail_content_write"}>
                        <p className={"crewDetail_content_write_title"}>{data.title}</p>
                        <pre className={"crewDetail_content_write_desc"}>{data.content}</pre>
                    </div>
                </div>
                <div className={"crewDetail_comment_wrap"}>
                    <Comment data={props.comment}></Comment>
                </div>
                <form onSubmit={onFormSubmit}>
                    <div className={"crewDetail_comment_write"}>
                        <TextareaAutosize onChange={onChangeValue} className={"crewDetail_comment_write_textarea"} name="content" placeholder='댓글을 입력하세요'/>
                        <button class="comment_submit">등록</button>
                    </div>
                </form>
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
                    <p className={"crewDetail_comment_data_name"}>{data.name}</p>
                    <pre className={"crewDetail_comment_data_desc"}>{data.content}</pre>
                </div>
            ))
        :""}
        </div>
    )
}

export default CrewDetail;