import React, {useState} from "react";
import "./css/crewFind.css";
import "./css/crewCategory.css";
import CrewCardList from "./component/crewCardList";

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