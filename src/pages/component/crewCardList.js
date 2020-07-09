import React,{useState} from "react";
import { Link } from 'react-router-dom';
import "./componentCss/crewCardList.css";

const CrewCardList = (props) =>{
    const path = props.listdata.path.path;
    console.log(props)
    return(
        <div className={"crewCardList"}>
            <h1 className="category_title">{props.listdata.categoryTitle}</h1>
            <Link to={path === "/"? "/crewfind/" : "/crewCategory/:"+props.listdata.categoryTitle}>{path==="/crewcategory"?"":<span className="category_more">more</span>}</Link>
            <div className={"crewCardList_item_wrap"}>
                {props.listdata.listdata !==undefined && props.listdata.listdata.map((data,index)=>(
                    <div key={index} className={"crewCardList_item"}>
                        <Link to={"/crewdetail/"+props.listdata.categoryTitle +"/"+data.list_index}>
                            <div className={"crewCardList_box"}>
                                <div className={"crewCardList_img"}>
                                    <img src = {data.imgLink} alt ="crewCard_img"></img>
                                </div>
                                <div className={"crewCardList_desc"}>
                                    <h3>{data.desc_title}</h3>
                                    <div className={"crewCardList_desc_info"}>
                                        <p>작성자: OOOOO</p>
                                        <p>모임 장소: 마포구</p>
                                        <p>모임 날짜: 7월 21일</p>
                                    </div>
                                </div>
                            </div>            
                            
                        </Link>
                    </div>
                ))}
            </div>
        </div>      
    )
}

// <div className={"crewCard_item_wrap"}>
//                 {props.listdata.listdata !==undefined && props.listdata.listdata.map((data,index)=>(
//                     <div key={index} className={"crewCard_item"}>
//                         <Link to={"/crewdetail/"+props.listdata.categoryTitle +"/"+data.list_index}>
//                             <div className={"crewCard_img"}>
//                                 <img src = {data.imgLink} alt ="crewCard_img"></img>
//                             </div>            
//                             <div className={"crewCard_desc"}>
//                                 <dl>
//                                     <dt>{data.desc_title}</dt>
//                                     <dd>{data.desc_content}</dd>
//                                 </dl>
//                             </div>
//                         </Link>
//                     </div>
//                 ))}
//             </div>

export default CrewCardList;