import React,{useState} from "react";
import { Link } from 'react-router-dom';
import "./componentCss/preview.css";

const PreView = (props) =>{
    console.log(props)
    return(
        <div>
            <div className={"preview_container"}>
                <div className={"preview"}>
                    <h1>여행</h1>
                    <div className={"preview_item"}>
                    {props.preViewTreavel.map((data,index) =>(
                        <PreViewTreavel key={index} data={data}></PreViewTreavel>  
                    ))}  
                    </div>
                </div>
                <div className={"preview"}>
                    <h1>자기계발</h1>
                    <div className={"preview_item"}>
                    {props.preViewTreavel2.map((data,index) =>(
                        <PreViewTreavel key={index} data={data}></PreViewTreavel>  
                    ))}  
                    </div>
                </div>
            </div>      
        </div>
    )
}

const PreViewTreavel = (props) =>{
    return(
        <div className={"preview_list"}>
            <Link to={"/crewfind/list:"+props.data.list_index}>
                <div className={"preview_img"}>
                <img src = {props.data.imgLink} alt ="preview_img"></img>
                </div>            
                <div className={"preview_desc"}>
                    <dl>
                        <dt>{props.data.desc_title}</dt>
                        <dd>{props.data.desc_content}</dd>
                    </dl>
                </div>
            </Link>
        </div>
    )
}

export default PreView;