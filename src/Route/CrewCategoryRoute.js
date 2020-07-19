import React,{useState, useEffect} from "react";
import CrewCategory from "../pages/crewCategory";
import axios from "axios";

const CrewCategoryRoute = (props) => {
    const [categorydata, setCategorydata] = useState();
    const [isLoading, setisLoadding] = useState()
    const path = props.location.pathname.split("/");
    const path_now = path[2];
    const getData = async() =>{
        axios
        .get('http://localhost:5000/api/crewcategory/'+path_now)
        .then(({ data }) => {
            setCategorydata(data.crewdata);
            setisLoadding(true)
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
        {isLoading &&
            <CrewCategory path={props.match} categorydata={categorydata}></CrewCategory>
        }
        </div>
    )
}


export default CrewCategoryRoute