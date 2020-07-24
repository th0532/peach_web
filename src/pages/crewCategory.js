import React, {useState} from "react";
import "./css/crewFind.css";
import "./css/crewCategory.css";
import CrewCardList from "./component/crewCardList";
import axios from "axios";

const Crew = (props) => {

    return(
        <div className={"crewFind"}>
            <div className={"crew_wrap"}>
                <CrewCategory listdata={props.categorydata}></CrewCategory>
            </div>
        </div>
    )
}

const CrewCategory = (props) =>{
    const [areadata, setAreadata] = useState(props.listdata);
    
    const areaChange = (e) =>{
        const areaName = e.target.value;
        const category = props.listdata[0].category
        const categoryAreaName = category+":"+areaName;
        axios
        .get('http://localhost:5000/api/crewcategory/categoryAreaName'+categoryAreaName,null,{
            params: {
                categoryAreaName,
            }
        })
        .then(({ data }) => {
            if(data.crewdata.length === 0 ){
                setAreadata(false);
            }else{
                setAreadata(data.crewdata);
            }
        })
        .catch(e => {  // API 호출이 실패한 경우
        console.error(e);  // 에러표시
        });
        
        }
    return(
        <div className={"crew_category_item"}>
            <div className={"crew_category"}>
            <span>서울시</span>
                    <div className="area2">
                        <select onChange={areaChange}>
                            <option>전체</option>
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
            {areadata
                ?
                <CrewCardList listdata = {areadata}></CrewCardList> 
                :
                <div>해당 지역에 등록된 데이터가 없습니다.</div>
            }
            </div>
        </div>
    )
}
export default Crew;