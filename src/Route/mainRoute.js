import React,{useState, useEffect} from "react";
import Main from "../pages/main";
import axios from "axios";

const MainRoute = (props) => {
    const [crewDataNew, setCrewDataNew] = useState();
    const [crewDataHot, setCrewDataHot] = useState();

    const getData = async() =>{
        axios
        .get('http://localhost:5000/api/main/crewdata/New')
        .then(({ data }) => {
        setCrewDataNew(data.crewDataNew);
        })
        .catch(e => {  // API 호출이 실패한 경우
        console.error(e);  // 에러표시
        });

        axios
        .get('http://localhost:5000/api/main/crewdata/Hot')
        .then(({ data }) => {
        setCrewDataHot(data.crewDataHot);
        })
        .catch(e => {  // API 호출이 실패한 경우
        console.error(e);  // 에러표시
        });
    } 
    
    
    useEffect(()=>{
        getData();
    },[])

    return (
        <div>
            <Main path={props.match} listdataNew={crewDataNew} listdatHot={crewDataHot}></Main>
        </div>
    )
}


export default MainRoute;