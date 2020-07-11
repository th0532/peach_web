import React, {useState} from "react";
import "./css/crewFind.css";
import "./css/crewCategory.css";
import CrewCardList from "./component/crewCardList";

const Crew = (props) => {
    console.log(props);
    const list = {
        data : [
            {
                list_index:1,
                imgLink:"https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989__340.jpg",
                desc_title:"카누 모임",
                desc_content:"카누 즐겨타는 사람 있나요",
                category:"Adventure",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"이강현",
                        comment:"몇시에 출발 하실 예정이신가요?",
                    },
                    {
                        user_name:"김재현",
                        comment:"오후 1시 출발하려구요",
                    },{
                        user_name:"이강현",
                        comment:"몇시에 출발 하실 예정이신가요?",
                    },
                    {
                        user_name:"김재현",
                        comment:"오후 1시 출발하려구요",
                    },   
                ]
            },
            {
                list_index:2,
                imgLink:"https://cdn.pixabay.com/photo/2016/11/29/09/49/adventure-1868817__340.jpg",
                desc_title:"여행 갈 사람",
                desc_content:"7월 21일 여행 갈 사람 모집합니다~",
                category:"Adventure",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"이현재",
                        comment:"저요!!",
                    },
                    {
                        user_name:"김재성",
                        comment:"저두 가고싶어요",
                    },
                    {
                        user_name:"김현수",
                        comment:"카톡 부탁드려요",
                    },
                    {
                        user_name:"박하연",
                        comment:"어디로 다녀오실껀가요?",
                    }
                ]
                
            },
            {
                list_index:3,
                imgLink:"https://cdn.pixabay.com/photo/2016/08/14/18/27/sailing-boat-1593613__340.jpg",
                desc_title:"요트 패키지 여행 갈사람 구해요",
                desc_content:"패키지 여행 갈 사람 구합니다",
                category:"Adventure",
                user_name:"김하나",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"이경민",
                        comment:"가격 정보 좀 알 수 있을까요?",
                    },
                    {
                        user_name:"김고은",
                        comment:"어디로 가시는건가요?",
                    }
                ]
            },
            {
                list_index:4,
                imgLink:"https://cdn.pixabay.com/photo/2014/09/21/17/56/wanderer-455338__340.jpg",
                desc_title:"등산 모임 구합니다",
                desc_content:"등산 관심있는 사람 모집해요",
                category:"Adventure",
                user_name:"김보현",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"이현지",
                        comment:"등산 많이 안해봤는데 괜찮은 코스일까요",
                    },
                    {
                        user_name:"송근현",
                        comment:"저두 가고싶어요",
                    }
                ]
            },
            {
                list_index:5,
                imgLink:"https://cdn.pixabay.com/photo/2016/11/29/09/49/adventure-1868817__340.jpg",
                desc_title:"여행 갈 사람",
                desc_content:"7월 21일 여행 갈 사람 모집합니다~",
                category:"Adventure",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"이강산",
                        comment:"저요!!",
                    },
                    {
                        user_name:"김재현",
                        comment:"저두 가고싶어요",
                    }
                ]
            },
            {
                list_index:6,
                imgLink:"https://cdn.pixabay.com/photo/2016/08/14/18/27/sailing-boat-1593613__340.jpg",
                desc_title:"요트 패키지 여행 갈사람 구해요",
                desc_content:"패키지 여행 갈 사람 구합니다",
                category:"Adventure",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"이경현",
                        comment:"저요!!",
                    },
                    {
                        user_name:"박현지",
                        comment:"몇시 출발하시나요?",
                    },
                    {
                        user_name:"김수현",
                        comment:"모여서 같이가나요?",
                    },
                    {
                        user_name:"박연재",
                        comment:"저두 가고싶어요",
                    },
                    {
                        user_name:"손승현",
                        comment:"참여하고 싶습니다~",
                    }
                ]
            },
            {
                list_index:7,
                imgLink:"https://cdn.pixabay.com/photo/2014/09/21/17/56/wanderer-455338__340.jpg",
                desc_title:"등산 모임 구합니다",
                desc_content:"등산 관심있는 사람 모집해요",
                category:"Adventure",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"이수찬",
                        comment:"OO산 좋죠 저 참여하겠습니다!!",
                    },
                    {
                        user_name:"김민현",
                        comment:"같이가요~~",
                    },
                    {
                        user_name:"김가연",
                        comment:"OOO으로 연락부탁드려요",
                    }
                ]
            },
            {
                list_index:8,
                imgLink:"https://cdn.pixabay.com/photo/2016/11/29/09/49/adventure-1868817__340.jpg",
                desc_title:"여행 갈 사람",
                desc_content:"7월 21일 여행 갈 사람 모집합니다~",
                category:"Adventure",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"박하나",
                        comment:"어디로 가실꺼에요!?",
                    },
                    {
                        user_name:"김정현",
                        comment:"저두 가고싶어요",
                    },
                    {
                        user_name:"손주혁",
                        comment:"이번에 OO 다녀왔는데 추천드려요 ㅋㅋㅋ",
                    }
                ]
            }
        ],
    }

    return(
        <div className={"crewFind"}>
            <div className={"crew_wrap"}>
                <CrewCategory path ={props.path} categoryTitle={list.data[0].category} listdata={list.data}></CrewCategory>
            </div>
        </div>
    )
}
const CrewCategory = (props) =>{
    return(
        <div className={"crew_category_item"}>
            <div className={"crew_category"}>
            <span>서울시</span>
                    <div className="area2">
                        <select>
                            <option>선택</option>
                            <option>강남구</option>
                            <option>강동구</option>
                            <option>강북구</option>
                            <option>강서구</option>
                            <option>관악구</option>
                            <option>광진구</option>
                            <option>구로구</option>
                            <option>금천구</option>
                            <option>노원구</option>
                            <option>도봉구</option>
                            <option>동대문구</option>
                            <option>동작구</option>
                            <option>마포구</option>
                            <option>서대문구</option>
                            <option>서초구</option>
                            <option>성동구</option>
                            <option>성북구</option>
                            <option>송파구</option>
                            <option>양천구</option>
                            <option>영등포구</option>
                            <option>용산구</option>
                            <option>은평구</option>
                            <option>종로구</option>
                            <option>중구</option>
                            <option>중랑구</option>
                        </select>
                    </div>
            </div>
            <div className={"crew_list_wrap"}>
                <CrewCardList listdata = {props}></CrewCardList> 
            </div>
        </div>
    )
}
export default Crew;