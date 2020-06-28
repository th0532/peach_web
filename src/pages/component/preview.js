import React,{useState} from "react";
import { Link } from 'react-router-dom';
import "./componentCss/preview.css";
import "./componentCss/preview.css";

const PreView = () =>{

    const list = [
        {
            imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",
            desc_title:"스터디 모임",
            desc_content:"매주 목요일 7시 OOO 스터디 할사람 모집합니다.",
            list_index:1
        },
        {
            imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",
            desc_title:"패러 글라이딩 하러 갈 사람~",
            desc_content:"패러 글라이딩 관심있는 사람 모집합니다~",
            list_index:2
        },
        {
            imgLink:"https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191__340.jpg",
            desc_title:"xBox 하면서 놀 사람",
            desc_content:"주말에 xBox 할사람 구해요~",
            list_index:3
        },
        {
            imgLink:"https://cdn.pixabay.com/photo/2016/03/05/22/53/amateur-1239387__340.jpg",
            desc_title:"사진 찍는 거 좋아하는 사람~~",
            desc_content:"사진이 취미인 사람들 있을까요~?",
            list_index:4
        },
        {
            imgLink:"https://cdn.pixabay.com/photo/2020/04/04/14/53/cast-5002570__340.jpg",
            desc_title:"태안 낚시터",
            desc_content:"낚시 하러 갈사람 모집합니다.",
            list_index:5
        },
    ]
    
    return(
        <div className={"preview_container"}>
            <div className={"preview"}>
                <h1>모임추천</h1>
                <div className={"preview_item"}>
                    {list.map((data,index) =>(
                    <div key ={index} className={"preview_list"}>
                        <Link to={"/crewfind/list:"+data.list_index}>
                            <div className={"preview_img"}>
                            <img src = {data.imgLink} alt ="preview_img"></img>
                            </div>            
                            <div className={"preview_desc"}>
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
        </div>
    )
}

export default PreView;