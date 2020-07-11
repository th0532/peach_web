import React, {useState} from "react";
import "./css/crewFind.css";
import CrewCard from "./component/crewCard";

const CrewPreview = (props) => {
    const list = {
        category1 : [
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
                category:"Art",
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
                category:"Tech",
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
        category2 : [
            {
                list_index:1,
                imgLink:"https://cdn.pixabay.com/photo/2017/08/02/20/24/people-2573216__340.jpg",
                desc_title:"요가 다닐 사람",
                desc_content:"같이 도봉구에서 요가 다닐사람 있나요",
                category:"Health",
                user_name:"김수연",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"이하나",
                        comment:"몇시에 다니실 예정이신가요?",
                    },
                    {
                        user_name:"김수연",
                        comment:"평일 7시요!!",
                    },{
                        user_name:"이지연",
                        comment:"OOO 센터 말씀하시는거에요?",
                    },
                    {
                        user_name:"박하연",
                        comment:"저 같이 다니고싶어요",
                    },   
                ]
            },
            {
                list_index:2,
                imgLink:"https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149__340.jpg",
                desc_title:"헬스 꾸준히 같이 할사람 구해요",
                desc_content:"헬스 관심있는 사람 모집합니다",
                category:"Tech",
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
                imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",
                desc_title:"스터디 모임",
                desc_content:"매주 목요일 7시 OOO 스터디 할사람 모집합니다.",
                category:"Health",
                user_name:"이태희",
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
                imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",
                desc_title:"패러 글라이딩 하러 갈 사람~",
                desc_content:"패러 글라이딩 관심있는 사람 모집합니다~",
                category:"Tech",
                user_name:"이태희",
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
        ],
        
    }

    return(
        <div className={"crewFind"}>
            <div className={"crew_wrap"}>
                <CrewCategory path = {props.path} categoryTitle="NEW" listdata={list.category1}></CrewCategory>
                <CrewCategory path = {props.path} categoryTitle="HOT" listdata={list.category2}></CrewCategory>
            </div>
        </div>
    )
}

const CrewCategory = (props) =>{
    return(
        <div className={"crew_category_item"}>
            <div className={"crew_list_wrap"}>
                <CrewCard path = {props.path} listdata = {props}></CrewCard> 
            </div>
        </div>
    )
}
export default CrewPreview;