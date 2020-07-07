import React,{useState} from "react";
import { Link } from 'react-router-dom';
import "./componentCss/footer.css";

const Footer = (props) =>{
    const [naviToggle1, setNaviToggle1] = useState(false);
    const [naviToggle2, setNaviToggle2] = useState(false);
    const [naviToggle3, setNaviToggle3] = useState(false);
    const [naviToggle4, setNaviToggle4] = useState(false);

    const naviClick = (type) =>{
        if (type === "naviToggle1"){
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
        <div className = {"footer"}>
            <div className = {"mob_menu"}>
                <ul>
                    <li><Link to="/" className={naviToggle1&&'mobile_navi_click'} onClick={() => naviClick("naviToggle1")}>Home</Link></li>
                    {/*<li><Link to="/crewFind" className={naviToggle2&&'mobile_navi_click'} onClick={() => naviClick("naviToggle2")}>모임탐색</Link></li>*/}
                    <li><Link to="/crewCreate" className={naviToggle3&&'mobile_navi_click'} onClick={() => naviClick("naviToggle3")}>모임만들기</Link></li>
                    <li><Link to="/login" className={naviToggle4&&'mobile_navi_click'} onClick={() => naviClick("naviToggle4")}>로그인</Link></li>
                </ul>
            </div>
        </div>
    )
}
 
// <div className = {"navigation"}>
// <div className={"pc_navigation"}>
//     <ul>
//         <li className={naviToggle1&&'navi_click'}><Link to="/" onClick={() => naviClick("naviToggle1")}>Home</Link></li>
//         <li className={naviToggle2&&'navi_click'}><Link to="/crewFind" onClick={() => naviClick("naviToggle2")}>모임탐색</Link></li>
//         <li className={naviToggle3&&'navi_click'}><Link to="/crewCreate" onClick={() => naviClick("naviToggle3")}>모임만들기</Link></li>
//         <li className={naviToggle4&&'navi_click'}><Link to="/login" onClick={() => naviClick("naviToggle4")}>로그인</Link></li>
//     </ul>
// </div>
// </div>

export default Footer;