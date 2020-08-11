import React, {useState, useEffect} from "react";
import CrewDetail from "../pages/crewDetail";
import axios from "axios";

const CrewDetailRoute = (props) => {
    const [crewData, setCrewData] = useState();
    const [isLoading, setisLoadding] = useState()
    const [comment, setComment] = useState();

    const path = props.location.pathname.split("/");
    const path_category = path[2];
    const path_id = path[3];
    const getData = async() =>{
        axios
        .get('http://localhost:5000/api/crewdetail'+path_category+":"+path_id,null,{
            params: {
                path_category,
                path_id,
              }
        })
        .then(({ data }) => {
            setCrewData(data.crewdata);
        })
        .catch(e => {  // API 호출이 실패한 경우
            console.error(e);  // 에러표시
        });

        axios
        .get('http://localhost:5000/api/crewdetail/comment'+path_id,null,{
            params: {
                path_id,
              }
        })
        .then(({ data }) => {
            setComment(data.comment);
            setisLoadding(true)
        })
    }

    useEffect(()=>{
        getData()
    },[])
    return(
        <div className={"content"}>
            {isLoading&&
                <CrewDetail path={props.match} pathId={path_id} listdata={crewData} comment={comment}></CrewDetail>
            }
        </div>
    )
}

export default CrewDetailRoute;