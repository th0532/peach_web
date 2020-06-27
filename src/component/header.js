import React,{useState} from "react";
import "./css/header.css";

const Header = () =>{
    return (
        <div className = {"header"}>
            <div className = {"top"}>
                <div className = {"logo"}>
                    <h1>Peach</h1>
                </div>
                <div className = {"navigation"}>
                    <ul>
                        <li>모임탐색</li>
                        <li>모임만들기</li>
                        <li>로그인</li>
                        <li>회원가입</li>
                    </ul>            
                </div>
            </div>
        </div>
    )
}

export default Header;