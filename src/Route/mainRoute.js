import React,{useState, useEffect} from "react";
import Main from "../pages/main";
import axios from "axios";
import { useDispatch } from 'react-redux'

const MainRoute = (props) => {
    const [mapData, setMapData] = useState();
    const [crewDataNew, setCrewDataNew] = useState();
    const [crewDataHot, setCrewDataHot] = useState();
    const [isLoading, setisLoadding] = useState()
    const [isMapLoading, setMapisLoadding] = useState(false)
    const [isNewLoading, setNewisLoadding] = useState()
    const [isHotLoading, setHotisLoadding] = useState()
    
    const getData = async() =>{
        // 맵 데이터
        axios
        .get('http://localhost:5000/api/main/map')
        .then(({ data }) => {
            setMapData(data.mapAll);
            setMapisLoadding(true)
        })
        .catch(e => {  // API 호출이 실패한 경우
        console.error(e);  // 에러표시
        });

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
    const dispatch = useDispatch(); 
  
    useEffect(()=>{
        getData();

        dispatch({
            type:'UPDATE_MENU',
            id:0
        })
    },[])

    return (
        <div>
            {isMapLoading? 
                <Main path={props.match} mapdata={mapData} listdataNew={crewDataNew} listdatHot={crewDataHot}></Main>
            :<div>is isLoading...</div>
        }
            </div>
    )
}


export default MainRoute;