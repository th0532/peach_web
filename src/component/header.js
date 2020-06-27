import React,{useState} from "react";
import { Link } from 'react-router-dom';
import "./css/header.css";

const Header = () =>{
    return (
        <div className = {"header"}>
            <div className = {"top"}>
                <div className = {"logo"}>
                    <Link to="/">Peach</Link>
                </div>
                <div className = {"navigation"}>
                    <ul>
                        <li><Link to="/crewFind">모임탐색</Link></li>
                        <li><Link to="/crewCreate">모임만들기</Link></li>
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/signup">회원가입</Link></li>
                    </ul>            
                </div>
            </div>
        </div>
    )
}

export default Header;