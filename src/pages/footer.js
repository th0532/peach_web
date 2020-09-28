import React,{useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import Menu from "./component/menu";
import "./css/footer.css";

const Footer = (props) =>{
    return (
        <div className = {"footer"}>
            <div className = {"pc_footer"}>
                <div className={"copyright"}>
                    <p>© 2020 Readme, Inc. All rights reserved</p>
                </div>
                <div className={"sitemap"}>
                    <ul>
                        <li>개인정보 처리방침</li>
                        <li>이용약관</li>
                        <li>사이트맵</li>
                        <li>환불정책</li>
                    </ul>
                </div>
                <div className={"SNS"}>
                    <ul>
                        <li><Link to="#"><img src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_960_720.png" width="30px" height="30px" alt="facebook"></img></Link></li>
                        <li><Link to="#"><img src="https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_960_720.png" width="30px" height="30px" alt="instagram"></img></Link></li>
                        <li><Link to="#"><img src="https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_960_720.png" width="30px" height="30px" alt="youtube"></img></Link></li>
                    </ul>
                </div>
            </div>
            <div className = {"mob_menu"}>
                <Menu></Menu>
            </div>
        </div>
    )
}
export default Footer;