import React,{useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import "./componentCss/header.css";

const Header = (props) =>{
    const [naviToggle1, setNaviToggle1] = useState(true);
    const [naviToggle2, setNaviToggle2] = useState(false);
    const [naviToggle3, setNaviToggle3] = useState(false);
    const [naviToggle4, setNaviToggle4] = useState(false);
    const [widthFlag, setWidth] = useState(true);
    const [session_name, setSession_name] = useState();

    const naviClick = (type) =>{
        if (type === "naviToggle1"){
            setNaviToggle1(true);
            setNaviToggle2(false);
            setNaviToggle3(false);
            setNaviToggle4(false);
            
            const width = window.innerWidth;
            if(width <= 768){
                setWidth(false);
            }        
        }
        else if(type === "naviToggle2"){
            setNaviToggle1(false);
            setNaviToggle2(true);
            setNaviToggle3(false);
            setNaviToggle4(false);
        }
        else if(type === "naviToggle3"){
                setNaviToggle1(false);
                setNaviToggle2(false);
                setNaviToggle3(true);
                setNaviToggle4(false);
        }
        else if(type === "naviToggle4"){
            setNaviToggle1(false);
            setNaviToggle2(false);
            setNaviToggle3(false);
            setNaviToggle4(true);
        }
        else if(type === "logout"){
            sessionStorage.clear();
            // fakelink 새로고침
            window.location.href = "http://localhost:3000/";
        }
        else if(type === "loginAlert"){
            alert("로그인을 해주세요")
            naviClick("naviToggle4");
        }
    }
    useEffect(()=>{
        setSession_name(window.sessionStorage.getItem('name'))
    })

    return (
        <div className = {"header"}>
            <div className = {"top"}>
                <div className = {"logo"}>
                    {widthFlag ? <Link to="/" onClick={() => naviClick("naviToggle1")}>People</Link>:<Link>People</Link>}
                </div>
                <div className = {"navigation"}>
                    <div className={"pc_navigation"}>
                        <ul>
                            <li className={naviToggle1&&'navi_click'}><Link to="/" onClick={() => naviClick("naviToggle1")}>Home</Link></li>
                            <li className={naviToggle2&&'navi_click'}><Link to="/crewfind" onClick={() => naviClick("naviToggle2")}>모임탐색</Link></li>
                            <li className={naviToggle3&&'navi_click'}>
                                {session_name
                                    ?<Link to="/crewcreate" onClick={() => naviClick("naviToggle3")}>모임만들기</Link>
                                    :<Link to="/login" onClick={() => naviClick("loginAlert")}>모임만들기</Link>
                                }
                                
                                
                            </li>
                            <li className={naviToggle4&&'navi_click'}>{session_name?<Link onClick={() => naviClick("logout") }>로그아웃</Link>:<Link to="/login" onClick={() => naviClick("naviToggle4")}>로그인</Link>}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;