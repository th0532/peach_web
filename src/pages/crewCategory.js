import React, { useState,useEffect,useReducer } from 'react';
import "./css/crewFind.css";
import "./css/crewCategory.css";
import CrewCardList from "./component/crewCardList";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'reactjs-hooks-pagination';
const pageLimit = 6;
const initialState = {  
  user: {},  
  loading: true,  
  error: ''  
}  
 
const Reducer = (state, action) => {  
  switch (action.type) {  
      case 'OnSuccess':  
          return {  
              loading: false,  
              user: action.payload,  
              error: ''  
          }  
      case 'OnFailure':  
          return {  
              loading: false,  
              user: {},  
              error: 'Something went wrong'  
          }  
 
      default:  
          return state  
  }  
}

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

    const [state, dispatch] = useReducer(Reducer, initialState);
    const [offset, setOffset] = useState(0);
    const [totalRecords, setTotalRecords] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectAreaName, setSelectAreaName] = useState(["전체"])

    const category = props.listdata[0].category;

    
    useEffect( () => {
        // 페이징 데이터
        axios.get('http://localhost:5000/api/crewcategory/pagination?catepage='+currentPage+'&limit='+pageLimit+'&category='+category)  
        .then(response => {  
            dispatch({ type: 'OnSuccess', payload: response.data })
            setAreadata(response.data.payload);
            countData()
        })  
        .catch(e => {  
            console.error(e);  // 에러표시
        })  

        // select박스 지역명 가져오기
        axios.get('http://localhost:5000/api/crewcategory/selectAreaName?category='+category)  
        .then(response => {  
            setSelectAreaName(response.data.selectAreaName)

        })  
        .catch(e => {  
            console.error(e);  // 에러표시
        }) 

      }, [currentPage]);
        const {loading,user,error}  =state;

        // 페이징 데이터 count 구하기 위해
        const countData = () => {
            const category = props.listdata[0].category
            const areaName = document.querySelector('.area2 select').value;
            axios.get('http://localhost:5000/api/crewcategory/count?category='+category+'&areaName='+areaName+'&limit='+pageLimit)  
            .then(response => {  
                let count = response.data.count[0].count
                setTotalRecords(count)
            })  
            .catch(e => {  
                console.error(e);  // 에러표시
            })  
        }

        //select 박스 지역명 변경시
        const areaChange = (e) =>{
            const areaName = e.target.value;
            const category = props.listdata[0].category
            axios.get('http://localhost:5000/api/crewcategory?category='+category+'&areaname='+areaName+'&limit='+pageLimit)  
            .then(({ data }) => {
                if(data.crewdata.length === 0 ){
                    setAreadata(false);
                }else{
                    setAreadata(data.crewdata);
                    countData()
                }
            })
            .catch(e => {  // API 호출이 실패한 경우
                console.error(e);  // 에러표시
            });
        }
        const asd = () =>{
            alert("sad");
        }
    return(
        <div className={"crew_category_item"}>
            <div className={"crew_category"}>
                <span>서울시</span>
                        <div className="area2">
                            <select onChange={areaChange}>
                                <option>전체</option>
                                {selectAreaName.map((data, index)=>(
                                    <option key = {index}>{data.area}</option>
                                ))}
                                
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
            <div className="pagination_wrap">
                <div className="pagination">
                    <Pagination
                    totalRecords={totalRecords}
                    pageLimit={pageLimit}
                    pageRangeDisplayed={1}
                    onChangePage={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    )
}
export default Crew;
