import React,{useState} from "react";
import { Link } from 'react-router-dom';
import "./componentCss/crewCardList.css";

const CrewCardList = (props) =>{
const data = props.listdata.listdata;
console.log(props)
    return(
        <div className={"crewCardList"}>
            <h1 className="category_title">{data[0].category}</h1>
            <div className={"crewCardList_item_wrap"}>
                {data !==undefined && data.map((data,index)=>(
                    <CrewCardListItem
                        key={data.num}
                        list_index={data.num}
                        category = {data.category}
                        imgLink={data.img}
                        desc_title={data.title}
                        desc_content={data.content}
                        date={data.date}
                        user_name={data.name}
                        comment_data={data.comment_data}
                        area={data.area}
                    >
                    </CrewCardListItem>
                ))}
            </div>
        </div>      
    )
}

const CrewCardListItem = (props) => {
    const list_index = props.list_index;
    const user_name = props.user_name;
    const date = props.date.substr(0,10);;
    const desc_title = props.desc_title;
    const imgLink = props.imgLink;
    const desc_content = props.desc_content;
    const category = props.category;
    const comment_data = props.comment_data;
    const area = props.area;

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
                            <p>작성자: {user_name}</p>
                            <p>모임 장소:{area}</p>
                            <p>모임 날짜:{date}</p>
                        </div>
                    </div>
                </div>            
            </Link>
        </div>

    )
    
}

export default CrewCardList;