import React, {useState} from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./css/login.css";
const Login = (props) => {
    const LoginSubmit = () =>{
        let id = document.querySelector(".id").value;
        let pass = document.querySelector(".pass").value;

        axios
        .post('http://localhost:5000/api/login/',null,{
            params: {
             id,
             pass,
            }
        })
        .then(({data}) => {
            console.log(data.login[0])
            window.sessionStorage.setItem('name', data.login[0].name);
            window.sessionStorage.setItem('id', data.login[0].id);
            window.location.href = "http://localhost:3000/";
        })
        .catch(e => {  // API 호출이 실패한 경우
          alert("ID/PW 를 확인해주세요")
          document.querySelector(".pass").value="";
        });
      }

    const enterKey = () => {
        if(window.event.keyCode == 13){
            LoginSubmit();
        }
    }
    const { onLogin } = props;
    return(
        <div className={"content"}>
            <div className={"login_wrap"}>
                <div className={"login_form"} onKeyUp = {enterKey}>
                    <h2>Sign in</h2>
                    <h4 >ID</h4>
                    <input className={"id"} type="text" placeholder="ID"></input>
                    <h4>PassWord</h4>
                    <input className={"pass"} type="PassWord" placeholder="PassWord"></input>
                    <button className={"sign_in"} type="button" onClick = {LoginSubmit}><Link to="/">Sign in</Link>
                    </button>
                    <button className={"sign_up"} type="button"><Link to="/signup">Sign up</Link></button>
                    {/*<FacebookLogin
                        appId="674625623091948"
                        autoLoad={false}
                        fields="name,first_name,last_name,email"
                        callback={onLogin}
                        render={renderProps => (
                            <div onClick={renderProps.onClick} className={"facebook"}>
                                <img src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_960_720.png" width="30px" height="30px" alt="facebook"></img>
                            </div>
                        )}
                        />*/}
                </div>
            </div>
        </div>
    )
}

export default Login;
