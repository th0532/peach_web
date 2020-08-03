import React, {useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./css/signup.css";
const Signup = () => {
    const dataSubmit = () =>{
        let day = new Date();
        let y = day.getFullYear();
        let m = day.getMonth()+1;
        let d = day.getDate();
        let h = day.getHours();
        let i = day.getMinutes();

        let time = y+"-"+m+"-"+d+" "+h+":"+i;

        let name = document.querySelector(".name").value;
        let id = document.querySelector(".id").value;
        let pass = document.querySelector(".pass").value;
        let email = document.querySelector(".email").value;
        let birthday = document.querySelector(".birthday").value;

        axios
        .post('http://localhost:5000/api/insert/signup',null,{
            params: {
             time,
             name,
             id,
             pass,
             email,
             birthday,
            }
        })
        .then(() => {
          alert("회원가입이 완료 되었습니다.");
          window.location.href = "http://localhost:3000/#/login";
        })
        .catch(e => {  // API 호출이 실패한 경우
          alert("회원가입에 실패하였습니다.")
        });
      }

    return(
        <div className={"content"}>
            <div className={"signup_wrap"}>
                <div className={"signup_form"}>
                    <h2>Sign up</h2>
                    <h4 >이름</h4>
                    <input className={"name"} type="text" placeholder="name"></input>
                    <h4>ID</h4>
                    <input className={"id"} type="text" placeholder="ID"></input>
                    <h4>Password</h4>
                    <input className={"pass"} type="password" placeholder="password"></input>
                    <h4>Password Check</h4>
                    <input className={"pass2"} type="password" placeholder="password"></input>
                    <h4>Email</h4>
                    <input className={"email"} type="Email" placeholder="Email"></input>
                    <h4>생년월일</h4>
                    <input className={"birthday"} type="date"></input>
                    <button className={"sign_up"} type="button"><Link to="/signup" onClick = {dataSubmit}>Sign up</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Signup;