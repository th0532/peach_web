import React, {useState} from "react";
import "./css/crewFind.css";
import "./css/crewCategory.css";
import CrewCardList from "./component/crewCardList";

const Crew = (props) => {
    const path = props.location.pathname.split("/");
    const path_now = path[2];
    console.log(path_now);

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
                desc_content:"패키지 여행 갈 사람 구합니다 7월 15일 ~ 18일 다녀올 생각이에요 관심있으신 분 댓글 부탁드려요",
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
                imgLink:"https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874__340.jpg",
                desc_title:"여행 갈 사람",
                desc_content:"7월 24일 여행 갈 사람 모집합니다~",
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
                imgLink:"https://cdn.pixabay.com/photo/2016/11/14/03/38/achieve-1822503__340.jpg",
                desc_title:"트랙킹 갈사람 구합니다.",
                desc_content:"트랙킹 다녀올 친구들 구합니다 7월 16일 아침에 출발할 것 같아요~ ",
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
                imgLink:"https://cdn.pixabay.com/photo/2014/07/31/23/10/biker-407123__340.jpg",
                desc_title:"오토바이 관심있는사람 있나요?",
                desc_content:"오토바이 관심있는사람 있나요?",
                category:"Adventure",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"이수찬",
                        comment:"입문했는데 같이타요!",
                    },
                    {
                        user_name:"김민현",
                        comment:"라이딩 하러 가실래요?",
                    },
                    {
                        user_name:"김가연",
                        comment:"OOO으로 연락부탁드려요",
                    }
                ]
            },
            {
                list_index:8,
                imgLink:"https://cdn.pixabay.com/photo/2016/11/22/19/25/adult-1850181__340.jpg",
                desc_title:"여행 갈 사람",
                desc_content:"7월 24일 여행 갈 사람 모집합니다~",
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
                category:"Health",
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
                imgLink:"https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558__340.jpg",
                desc_title:"런닝 뛸사람 있나요",
                desc_content:"매주 목요일 7시 한강에서 런닝 뛸 사람 구해요~",
                category:"Health",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"이경민",
                        comment:"저 시간날때 참여하겠습니다!",
                    },
                    {
                        user_name:"김고은",
                        comment:"몇Km 뛰시는건가요?",
                    }
                ]
            },
            {
                list_index:4,
                imgLink:"https://cdn.pixabay.com/photo/2020/01/21/11/39/running-4782721__340.jpg",
                desc_title:"조깅 뛸사람 구합니다",
                desc_content:"매일 아침에 조깅 뛸사람있을까요?",
                category:"Health",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"이현지",
                        comment:"몇 시에 뛰실 생각이세요!?",
                    },
                    {
                        user_name:"송근현",
                        comment:"저 같이 하고 싶어요",
                    }
                ]
            },
        ],
        category3 : [
            {
                list_index:1,
                imgLink:"https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191__340.jpg",
                desc_title:"X BOX 같이할사람~",
                desc_content:"X BOX 들어오세요~ ㄱㄱㄱ",
                category:"Social",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"이강산",
                        comment:"저요!!",
                    },
                    {
                        user_name:"김재현",
                        comment:"저 들어갈게요 ㅋㅋㅋㅋ",
                    }
                ]
            },
            {
                list_index:2,
                imgLink:"https://cdn.pixabay.com/photo/2016/03/27/19/54/golf-1284011__340.jpg",
                desc_title:"골프 치러 다닐 사람 있나요",
                desc_content:"매주 일요일 골프 치러갈 회원 모집합니다~",
                category:"Social",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"이경현",
                        comment:"저요!!",
                    },
                    {
                        user_name:"박현지",
                        comment:"어디로 가시나요?",
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
                list_index:3,
                imgLink:"https://cdn.pixabay.com/photo/2016/06/28/01/42/chess-1483735__340.jpg",
                desc_title:"보드게임 모임",
                desc_content:"매주 목요일 7시 보드게임 배우실 분.",
                category:"Social",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"이수찬",
                        comment:"저 참여하겠습니다!!",
                    },
                    {
                        user_name:"김민현",
                        comment:"같이해요~~",
                    },
                    {
                        user_name:"김가연",
                        comment:"OOO으로 연락부탁드려요",
                    }
                ]
            },
            {
                list_index:4,
                imgLink:"https://cdn.pixabay.com/photo/2015/04/20/17/38/photography-731891__340.jpg",
                desc_title:"여행 갈사람!?",
                desc_content:"여행 관심있는 사람 모집합니다~",
                category:"Social",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"박하나",
                        comment:"언제 가시는거에요??",
                    },
                    {
                        user_name:"김정현",
                        comment:"매주 가시나요?",
                    },
                ]
            },
        ],
        category4 : [
            {
                list_index:1,
                imgLink:"https://cdn.pixabay.com/photo/2015/04/21/12/16/mac-733178__340.jpg",
                desc_title:"코딩테스트 스터디 모임",
                desc_content:"매주 목요일 7시 ~ 에서 코딩테스트 준비 할사람 모집합니다.",
                category:"Tech",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"박하나",
                        comment:"어떤 언어로 하실꺼에요?",
                    },
                    {
                        user_name:"김정현",
                        comment:"저두 참여하고 싶어요",
                    },
                    {
                        user_name:"손주혁",
                        comment:"초보자도 할수 있을까요?",
                    }
                ]
            },
            {
                list_index:2,
                imgLink:"https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809__340.jpg",
                desc_title:"독서 같이 할 사람~",
                desc_content:"책 공유하면서 같이 독서 의지 다질 사람 있나요?",
                category:"Tech",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    
                ]
            },
            {
                list_index:3,
                imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",
                desc_title:"스터디 모임",
                desc_content:"매주 목요일 7시 OOO 스터디 할사람 모집합니다.",
                category:"Tech",
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
                        comment:"8시부터 참여하겠습니다",
                    }
                ]
            },
            {
                list_index:4,
                imgLink:"https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396__340.jpg",
                desc_title:"웹 개발 스터디",
                desc_content:"웹 개발에 관심있는 사람 모집합니다~",
                category:"Tech",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"박하나",
                        comment:"초보인데 참여할 수 있을까요!?",
                    },
                    {
                        user_name:"김정현",
                        comment:"저 관심있습니다.",
                    },
                    {
                        user_name:"손주혁",
                        comment:"프로젝트 만드실껀가요?",
                    }
                ]
            },
        ],
        category5 : [
            {
                list_index:1,
                imgLink:"https://cdn.pixabay.com/photo/2016/11/19/17/28/art-1840481__340.jpg",
                desc_title:"같이 그림 그릴사람 있나요~?",
                desc_content:"그림 공부중인데 같이 하실 분 있을까요",
                category:"Art",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"박하나",
                        comment:"어떤 공부중이세요?!?",
                    },
                    {
                        user_name:"손주혁",
                        comment:"같이 배우면서 해봐요!",
                    }
                ]
            },
            {
                list_index:2,
                imgLink:"https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326__340.jpg",
                desc_title:"밴드를 만들고 있는데 통기타 칠 수 있는 분 구해요",
                desc_content:"토요일 OO 에서 주로 공연합니다~",
                category:"Art",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"손주혁",
                        comment:"면접 보는건가요?",
                    },
                    {
                        user_name:"김정현",
                        comment:"저 같이해보고싶습니다",
                    },
                ]
            },
            {
                list_index:3,
                imgLink:"https://cdn.pixabay.com/photo/2016/11/19/10/01/concert-1838412__340.jpg",
                desc_title:"바이올린 원데이 클래스 모집합니다",
                desc_content:"이번주 일요일 바이올린 강습합니다",
                category:"Art",
                user_name:"이태희",
                date:"2020/07/11 02:54",
                comment_data :[
                    {
                        user_name:"박하나",
                        comment:" 수강료는 얼마인가요?",
                    },
                    {
                        user_name:"김정현",
                        comment:"몇시간 진행하는건가요??",
                    },
                ]
            },
        ],
    }
    let category = "";
    if(path_now === "Adventure"){
        category = list.category1;
    }
    else if(path_now === "Health"){
        category = list.category2;
    }
    else if(path_now === "Social"){
        category = list.category3;
    }
    else if(path_now === "Tech"){
        category = list.category4;
    }
    else if(path_now ==="Art"){
        category = list.category5;
    }else{
        category = list.category1;
    }


    return(
        <div className={"crewFind"}>
            <div className={"crew_wrap"}>
                <CrewCategory categoryTitle={category[0].category} listdata={category}></CrewCategory>
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