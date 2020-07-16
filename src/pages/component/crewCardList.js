import React,{useState} from "react";
import { Link } from 'react-router-dom';
import "./componentCss/crewCardList.css";

const CrewCardList = (props) =>{
    console.log(props)
    const data = props.listdata.listdata;
    return(
        <div className={"crewCardList"}>
            <h1 className="category_title">{props.listdata.categoryTitle}</h1>
            <div className={"crewCardList_item_wrap"}>
                {data !==undefined && data.map((data,index)=>(
                    <CrewCardListItem
                        key={data.list_index}
                        list_index={data.list_index}
                        category = {data.category}
                        imgLink={data.imgLink}
                        desc_title={data.desc_title}
                        desc_content={data.desc_content}
                        date={data.date}
                        user_name={data.user_name}
                        comment_data={data.comment_data}
                    >
                    </CrewCardListItem>
                ))}
            </div>
        </div>      
    )
}

const CrewCardListItem = (props) => {
// console.log(props)
    const list_index = props.list_index;
    const user_name = props.user_name;
    const date = props.date;
    const desc_title = props.desc_title;
    const imgLink = props.imgLink;
    const desc_content = props.desc_content;
    const category = props.category;
    const prevPage = props.prevPage;
    const comment_data = props.comment_data;

    return(
        <div key={list_index} className={"crewCardList_item"}>
            <Link to={{
                pathname:`/crewdetail/${category}/${list_index}`,
                state:{
                    user_name:user_name,
                    date:date,
                    desc_title:desc_title,
                    desc_content:desc_content,
                    category:category,
                    prevPage:prevPage,
                    comment_data:comment_data
                }
            }}>
                <div className={"crewCardList_box"}>
                    <div className={"crewCardList_img"}>
                        <img src = {imgLink} alt ="crewCard_img"></img>
                    </div>
                    <div className={"crewCardList_desc"}>
                        <h3>{desc_title}</h3>
                        <div className={"crewCardList_desc_info"}>
                            <p>작성자: OOOOO</p>
                            <p>모임 장소: 마포구</p>
                            <p>모임 날짜: 7월 21일</p>
                        </div>
                    </div>
                </div>            
            </Link>
        </div>

    )
    
}

export default CrewCardList;