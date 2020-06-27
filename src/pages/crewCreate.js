import React, {useState} from "react";
import "./css/common.css"
import "./css/crewCreate.css"

const crewCreate = () => {
    return(
        <div className={"content"}>
            <div className={"crewCreate"}>
                <Category></Category>
                <Area></Area>
                <Recruit></Recruit>
                <Writing></Writing>
            </div>
        </div>
    )
}

const Category = () =>{
    return(
        <div className={"category"}>
            <h1>분야</h1>
            <select>
                <option>1차선택</option>
                <option>1차선택_1</option>
            </select>
            <select>
                <option>2차선택</option>
                <option>2차선택_1</option>
            </select>
        </div>
    )
}

const Area = () => {
    return(
        <div className={"area"}>
            <h1>지역</h1>
            <select>
                <option>1차선택</option>
                <option>1차선택_1</option>
            </select>
            <select>
                <option>2차선택</option>
                <option>2차선택_1</option>
            </select>
            <select>
                <option>3차선택</option>
                <option>3차선택_1</option>
            </select>
        </div>
    )
}

const Recruit = () =>{
    return(
        <div className={"recruit"}>
            <div className={"personnel"}>
                <h1>인원</h1>
                제한 없음<input type="checkbox"/>
                <input type="range" min="0" max="50"/>
            </div>
            <div className={"metting_date"}>
                <h1>모임날짜</h1>
                미정<input type="checkbox"/>
                <input type="date" />
            </div>
        </div>
    )
}

const Writing = () => {
    return(
        <div className={"writing"}>
            <div className={"writing_title"}>
                <h1>제목</h1>
                <input type="text" placeholder="제목을 입력해주세요"></input>
            </div>
            <div className={"writing_desc"}>
                <h1>설명</h1>
                <textarea type="text" placeholder="내용을 입력해주세요"></textarea>
            </div>
        </div>
    )
}

export default crewCreate;