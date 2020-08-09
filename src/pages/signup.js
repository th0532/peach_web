import React, {useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./css/signup.css";
const Signup = () => {
    const [idOverlapCheck, setIdOverlapCheck] = useState(false);
    const [signUpSuccess, setSignUpSuccess] = useState(false);

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
        let password1 = document.querySelector('.pass').value;
        let password2 = document.querySelector('.pass2').value;

        if(!signUpSuccess){
            checkSignUp(name, id, email, password1, password2, birthday);
        }else{
            axios
            .post('http://localhost:5000/api/signup/check/email',null,{
                params: {
                    email,
                }
            })
            .then(({ data }) => {
                if(data.email.length !==0){
                    alert("이미 가입된 Email 입니다.");
                }else if(idOverlapCheck !== true){
                    alert("ID 중복 체크를 해주세요");
                }
                else{
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
            })
            .catch(e => {  // API 호출이 실패한 경우
            });
        }
      }

      const IdCheck = () =>{
        let id = document.querySelector(".id").value;

        axios
        .post('http://localhost:5000/api/signup/check/id',null,{
            params: {
            id,
            }
        })
        .then(({ data }) => {
            if(data.id.length !== 0){
                alert("이미 가입된 ID 입니다.");
            }else{
                alert("사용하실 수 있는 ID 입니다.")
                setIdOverlapCheck(true);
            }
        })
        .catch(e => {  // API 호출이 실패한 경우
        });
      }
      
        // 중복 체크 검증 후 ID 수정을 막기 위해
        const overLabError = () =>{
            setIdOverlapCheck(false);
        }
        
        const checkSignUp = (name, id, email, password1, password2, birthday) =>{
            let getCheck= RegExp(/^[a-zA-Z0-9]{4,20}$/);
            let getemail= RegExp(/^[0-9a-zA-Z][0-9a-zA-Z\_\-]*[0-9a-zA-Z](\.[a-zA-Z]{2,6}){1,2}$/);
            let getName = RegExp(/^[가-힣]+$/);
            let getNum  = RegExp(/^[0-9]*$/);
            
        
            if( !name){
                alert("이름을 입력하여주세요");
            }
            // else if(!getName.name){
            //     alert("이름을 한글로 입력해주세요");
            // }
            else if(!id){
                alert("ID를 입력하여주세요");
            }
            // else if(!getCheck.id){
            //     alert("한글및 특수기호는 입력하실 수 없습니다.");
            // }
            else if(!password1 || !password2){
                alert("패스워드를 입력하여주세요");
            }
            else if(password1 != password2){
                alert("패스워드가 일치하지 않습니다.");
            }
            else if(password1.length < 6 || password2.length < 6){
                alert("패스워드를 6자리 이상으로 입력해주세요");
            }
            else if(!email){
                alert("Email을 입력하여 주세요");
            }
            // else if(!getCheck.email){
            //     alert('Email 은 4글자 이하, 한글및 특수기호는 입력하실 수 없습니다.');
            // }
            // else if(!getemail.email){
            //     alert('이메일 형식을 확인해주세요');
            // }
            else{
                setSignUpSuccess(true);
            }
        }
    return(
        <div className={"content"}>
            <div className={"signup_wrap"}>
                <div className={"signup_form"}>
                    <h2>Sign up</h2>
                    <h4 >이름</h4>
                    <input className={"name"} type="text" placeholder="name"></input>
                    <h4>ID</h4>
                    <input className={"id"} type="text" placeholder="ID" onChange={overLabError}></input>
                    <button className={"idCheck"} onClick={IdCheck}>중복체크</button>
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