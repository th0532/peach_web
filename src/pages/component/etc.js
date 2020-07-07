import React,{useState} from "react";
import { Link } from 'react-router-dom';
import "./componentCss/etc.css";

const Etc = () =>{
    const list = [
        {
            imgLink:"https://cdn.pixabay.com/photo/2016/03/09/09/22/woman-photographer-1245761__340.jpg",
            desc_title:"모임에 함께하세요",
            desc_content:"모임에 참여하며 취미생활을 공유해보세요.",
            type:"crewfind"
        },
        {
            imgLink:"https://cdn.pixabay.com/photo/2016/03/09/09/22/woman-photographer-1245761__340.jpg",
            desc_title:"모임을 만들어 보세요",
            desc_content:"모임을 직접 만들어 정기적인 모임을 가져보세요.",
            type:"crewcreate"
        },
    ]
    return(
        <div className={"etc"}>
            <div className={"Etc_title"}>
                <h1>이제 가까운 곳에서 소중한 것들을</h1>
                <h1>찾아보세요.</h1>
            </div>
            <div className={"Etc_item"}>
                    {list.map((data,index) =>(
                        <div key={index} className={"Etc_list"}>
                            <Link to = {data.type === "crewfind" ? "/crewfind" : "/crewcreate"}>
                                <div className={"Etc_img"}>
                                <img src = {data.imgLink} alt="Etc_img"></img>
                                </div>            
                                <div className={"Etc_desc"}>
                                    <dl>
                                        <dt>{data.desc_title}</dt>
                                        <dd>{data.desc_content}</dd>
                                    </dl>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Etc;