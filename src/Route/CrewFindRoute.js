import React, {useState, useEffect} from "react";
import axios from "axios";
import CrewFind from "../pages/crewFind";
import { useDispatch } from 'react-redux'
 
const CrewRoute = (props) => {
    const [crewData, setCrewData] = useState();
    const [isLoading, setisLoadding] = useState()

    const getData = async() =>{
        axios
        .get('http://localhost:5000/api/crewfind/crewdata')
        .then(({ data }) => {
            setCrewData(data.crewdata);
            setisLoadding(true)
        })
        .catch(e => {  // API 호출이 실패한 경우
            console.error(e);  // 에러표시
        });

    }

    const dispatch = useDispatch()

    useEffect(()=>{
        getData()

        dispatch({
            type:'UPDATE_MENU',
            id:1
        })
    },[])

    return(
        <div className={"content"}>
        {
            isLoading && <CrewFind path={props.match} listdata={crewData}></CrewFind>
        }
        </div>
    )
}

export default CrewRoute;