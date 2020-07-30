import React, {useState} from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Link } from 'react-router-dom';
import "./css/login.css";
const Login = (props) => {
    const { onLogin } = props;
    console.log(onLogin);
    return(
        <div className={"content"}>
            <div className={"login_wrap"}>
                <div className={"login_form"}>
                    <h2>Sign in</h2>
                    <h4 >Email</h4>
                    <input className={"email"} type="text" placeholder="Email"></input>
                    <h4>PassWord</h4>
                    <input className={"pass"} type="password" placeholder="password"></input>
                    <button className={"sign_in"} type="button">Sign in</button>
                    <button className={"sign_up"} type="button"><Link to="/signup">Sign up</Link></button>
                    
                    <FacebookLogin
                        appId="674625623091948"
                        autoLoad={false}
                        fields="name,first_name,last_name,email"
                        callback={onLogin}
                        render={renderProps => (
                            <div onClick={renderProps.onClick} className={"facebook"}>
                                <img src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_960_720.png" width="30px" height="30px" alt="facebook"></img>
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default Login;
