import React, {useState,useEffect, useCallback} from "react";
import TextareaAutosize from 'react-autosize-textarea';
import "./css/crewDetail.css";
import axios from "axios";

const CrewDetail = (props) => {
    
    const data = props.listdata[0];
    const [commentValue, setCommentValue] = useState()
    const [category, setcategory] = useState()
    const [num, setNum] = useState()
// 현재 사용자와 게시글 작성자 비교
    const [userState, setUserState] = useState(false)

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
        if(session_id){
            if(commentValue){
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
            }else{
                alert("내용을 입력해주세요.");
            }
        }
        else{
            alert("로그인을 해주세요");
            window.location.href = "http://localhost:3000/#/login";
        }
      }
   data.content = data.content.replace(/(<br>|<br\/>|<br \/>)/g, '\r\n');
    useEffect(()=>{
        setcategory(data.category);
        setNum(data.num);
        if(props.listdata[0].id === session_id){
            setUserState(true);
        }
    })

    const pathId = props.pathId;
    const deletePost = () =>{
        const result = window.confirm("삭제하시겠습니까?");
        if(result){
            axios
            .post('http://localhost:5000/api/delete/crewdetail', null,{
                params: {
                    pathId,
                  }
            })
            .then(() => {
                alert("게시글이 삭제 되었습니다.");
                window.location.href = "http://localhost:3000/#/"
            })
            .catch(e => {  // API 호출이 실패한 경우
                console.error(e);  // 에러표시
            });
        }
    }

    return(
        <div className={"crewDetail"}>
            <div className={"crewDetail_wrap"}>
                <div className={"crewDetail_content"}>
                    {userState&&
                        <div className={"crewDetail_delete"}>
                        <button onClick = {deletePost}>삭제</button>
                    </div>}
                    <div className={"crewDetail_content_info"}>
                        <p className={"crewDetail_content_info_name"}>{data.name}</p>
                        <span className={"crewDetail_content_info_date"}>{data.date.slice(0,10)}</span>
                        {/*<p className={"crewDetail_content_info_declaration"}>신고</p>*/}
                        <span className={"crewDetail_content_info_personnel"}>모집인원 : {data.personnel}</span>
                    </div>
                    
                    <div className={"crewDetail_content_write"}>
                        <p className={"crewDetail_content_write_title"}>{data.title}</p>
                        <pre className={"crewDetail_content_write_desc"}>{data.content}</pre>
                    </div>
                </div>
                <div className={"crewDetail_comment_wrap"}>
                    <Comment data={props.comment} session_id={session_id}></Comment>
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
    const etcComment = (sessionCheck) =>{
        if(sessionCheck.id === props.session_id){
            deleteComment(sessionCheck)
        }else{
            alert("권한이 없습니다");
        }
    }

    const deleteComment = (sessionCheck) =>{
        const num = sessionCheck.num;
        const session_id = props.session_id;
        
        let result = window.confirm("삭제하시겠습니까?");
        
        if(result){
            axios
            .post('http://localhost:5000/api/delete/crewdetail/comment',null,{
                params: {
                    num,
                    session_id,
                }
            })
            .then(() => {
                // 효율적이지 않음,,, rerender할 수 있는방법 2시간째 못찾음 ㅠㅠㅠ
                window.location.reload();
            })
            .catch(e => {  // API 호출이 실패한 경우

            });
        }
    }
    return(
        <div className={"crewDetail_comment"}>
        {props.data?
            props.data.map((data, index)=> (
                <div key ={index} className={"crewDetail_comment_data"}>
                    <button className={"etc_comment"} onClick={() =>etcComment(data)}>X</button>
                    <p className={"crewDetail_comment_data_name"}>{data.name}</p>
                    <pre className={"crewDetail_comment_data_desc"}>{data.content}</pre>
                </div>
            ))
        :""}
        </div>
    )
}

export default CrewDetail;