import React,{useState} from "react";
import { Link } from 'react-router-dom';
import "./componentCss/crewCard.css";

const CrewCard = (props) =>{
    const path = props.listdata.path.path;
    console.log(props)
    return(
        <div className={"crewCard"}>
            <h1 className="category_title">{props.listdata.categoryTitle}</h1>
            <Link to={path === "/"? "/crewfind/" : "/crewCategory/:"+props.listdata.categoryTitle}>{path==="/crewcategory"?"":<span className="category_more">more</span>}</Link>
            <div className={"crewCard_item_wrap"}>
                {props.listdata.listdata !==undefined && props.listdata.listdata.map((data,index)=>(
                    <div key={index} className={"crewCard_item"}>
                        <Link to={"/crewdetail/"+props.listdata.categoryTitle +"/"+data.list_index}>
                            <div className={"crewCard_img"}>
                                <img src = {data.imgLink} alt ="crewCard_img"></img>
                            </div>            
                            <div className={"crewCard_desc"}>
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
// const CrewItem = (props) =>{
//     console.log(props)
//     return(
//         <div className={"crewCard_item_wrap"}>
//             {props.listdata !==undefined && props.listdata.map((data,index)=>(
//                 <div className={"crewCard_item"}>
//                     <Link to={"/crewfind/item:"+data.list_index}>
//                         <div className={"crewCard_img"}>
//                             <img src = {data.imgLink} alt ="crewCard_img"></img>
//                         </div>            
//                         <div className={"crewCard_desc"}>
//                             <dl>
//                                 <dt>{data.desc_title}</dt>
//                                 <dd>{data.desc_content}</dd>
//                             </dl>
//                         </div>
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     )
// }

export default CrewCard;