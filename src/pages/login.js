import React, {useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./css/login.css";
const Login = (props) => {


    const [id, setId] = useState('');
    const [pass, setpPass] = useState('');

    const changeInput = (e) =>{
        let type = e.target.className
        if(type === 'id'){
            setId(e.target.value)
        }
        else{
            setpPass(e.target.value)
        }
    }

    const LoginSubmit = () =>{
        if(!id && !pass){
            alert("ID & PassWord 를 입력해주세요");
            window.history.go(0);
        }else{
            axios
            .post('http://localhost:5000/api/login/',null,{
                params: {
                id,
                pass,
                }
            })
            .then(({data}) => {
                window.sessionStorage.setItem('name', data.login[0].name);
                window.sessionStorage.setItem('id', data.login[0].id);
                window.history.go(0);

            })
            .catch(e => {  // API 호출이 실패한 경우
                alert("ID/PW 를 확인해주세요")
                document.querySelector(".pass").value="";
            });
        }    
      }

    const enterKey = () => {
        if(window.event.keyCode === 13){
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
                    <input className={"id"} type="text" onChange={changeInput} placeholder="ID"></input>
                    <h4>PassWord</h4>
                    <input className={"pass"} type="PassWord" onChange={changeInput} placeholder="PassWord"></input>
                    <button className={"sign_in"} type="button" onClick = {LoginSubmit}><Link>Sign in</Link></button>
                    <button className={"sign_up"} type="button"><Link to="/signup">Sign up</Link></button>
                  
                </div>
            </div>
        </div>
    )
}

export default Login;
