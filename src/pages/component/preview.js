import React,{useState} from "react";
import { Link } from 'react-router-dom';
import "./componentCss/preview.css";

const PreView = () =>{

    const list = [
        {
            imgLink:"https://picsum.photos/200/300/?blur=1",
            desc_title:"가까운 여행지",
            desc_content:"자동차로 금방 다녀올 수 있는 근교 여행지에서 휴식을 즐기세요.",
            list_index:1
        },
        {
            imgLink:"https://picsum.photos/200/300/?blur=2",
            desc_title:"온라인 체험",
            desc_content:"세계 각지의 호스트가 진행하고 모두 함께 즐기는 독특한 액티비티",
            list_index:2
        },
        {
            imgLink:"https://picsum.photos/200/300/?blur=3",
            desc_title:"집 전체",
            desc_content:"일행만을 위한 편안한 공간에서 친구 및 가족과 오붓한 시간을 보내세요.",
            list_index:3
        },
        {
            imgLink:"https://picsum.photos/200/300/?blur=4",
            desc_title:"집 전체",
            desc_content:"일행만을 위한 편안한 공간에서 친구 및 가족과 오붓한 시간을 보내세요.",
            list_index:4
        },
        {
            imgLink:"https://picsum.photos/200/300/?blur=5",
            desc_title:"집 전체",
            desc_content:"일행만을 위한 편안한 공간에서 친구 및 가족과 오붓한 시간을 보내세요.",
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