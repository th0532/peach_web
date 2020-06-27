import React,{useState} from "react";
import { Link } from 'react-router-dom';
import "./componentCss/header.css";

const Header = (props) =>{
    const [naviToggle1, setNaviToggle1] = useState(false);
    const [naviToggle2, setNaviToggle2] = useState(false);
    const [naviToggle3, setNaviToggle3] = useState(false);
    const [naviToggle4, setNaviToggle4] = useState(false);

    const naviClick = (type) =>{
        // setNaviClick1("navi_click");
        if(type === "naviLogo"){
            setNaviToggle1(false);
            setNaviToggle2(false);
            setNaviToggle3(false);
            setNaviToggle4(false);
        }
        else if (type === "naviToggle1"){
            setNaviToggle1(true);
            setNaviToggle2(false);
            setNaviToggle3(false);
            setNaviToggle4(false);

        }else if(type === "naviToggle2"){
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
    }

    return (
        <div className = {"header"}>
            <div className = {"top"}>
                <div className = {"logo"}>
                    <Link to="/" onClick={() => naviClick("naviLogo")} >Peach</Link>
                </div>
                <div className = {"navigation"}>
                    <ul>
                        <li className={naviToggle1&&'navi_click'}><Link to="/crewFind" onClick={() => naviClick("naviToggle1")}>모임탐색</Link></li>
                        <li className={naviToggle2&&'navi_click'}><Link to="/crewCreate" onClick={() => naviClick("naviToggle2")}>모임만들기</Link></li>
                        <li className={naviToggle3&&'navi_click'}><Link to="/login" onClick={() => naviClick("naviToggle3")}>로그인</Link></li>
                        <li className={naviToggle4&&'navi_click'}><Link to="/signup" onClick={() => naviClick("naviToggle4")}>회원가입</Link></li>
                    </ul>            
                </div>
            </div>
        </div>
    )
}

export default Header;