import React,{useState ,useEffect} from "react";
import { Link } from 'react-router-dom';
import "./componentCss/crewCard.css";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const CrewCard = (props) =>{
    const path = props.listdata.path.path;
    // arrows="true"
    const [width, setWidth] = useState();
    const [slideCard, setSlideCard] = useState(2);
    const [arrowsFlag, setArrowsFlag] = useState(false);
    const [offsetValue, setOffsetValue] = useState(15);
    
    useEffect(() => {
        
    // 화면 width 값에 따라 carousel 옵션 값 변경
        setWidth(window.innerWidth);
        if(width > 768){
            setSlideCard(4);
            setArrowsFlag(true);
            setOffsetValue(0)
        }
      });

    return(
        <div className={"crewCard"}>
            <h1 className="category_title">{props.listdata.categoryTitle}</h1>
            <Link to={path === "/"? "/crewfind/" : "/crewCategory/:"+props.listdata.categoryTitle}>{path==="/crewcategory"?"":<span className="category_more">More</span>}</Link>
            <div className={"crewCard_item_wrap"} >
            <Carousel slidesPerPage={slideCard} arrows={arrowsFlag} animationSpeed = "300" offset={offsetValue}>
                {props.listdata.listdata !==undefined && props.listdata.listdata.map((data,index)=>(
                    <div key={index} className={"crewCard_item"}>
                        <Link to={"/crewdetail/"+props.listdata.categoryTitle +"/"+data.list_index}>
                            <div className={"crewCard_img"}>
                                <img src = {data.imgLink} alt ="crewCard_img"></img>
                            </div>            
                            <div className={"crewCard_desc"}>
                                <h3>{data.desc_title}</h3>
                                <div className={"crewCard_desc_info"}>
                                    <p>작성자: OOOOO</p>
                                    <p>모임 장소: 동작구</p>
                                    <p>모임 날짜: 7월 21일</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
                </Carousel>
            </div>
        </div>      
    )
}
// const CrewItem = (props) =>{
//     console.log(props)
//     return(
//         <div className={"crewCard_item_wrap"}>
//             {props.listdata !==undefined && props.listdata.map((data,index)=>(
//                 <div className={"crewCard_item"}>
//                     <Link to={"/crewfind/item:"+data.list_index}>
//                         <div className={"crewCard_img"}>
//                             <img src = {data.imgLink} alt ="crewCard_img"></img>
//                         </div>            
//                         <div className={"crewCard_desc"}>
//                             <dl>
//                                 <dt>{data.desc_title}</dt>
//                                 <dd>{data.desc_content}</dd>
//                             </dl>
//                         </div>
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     )
// }

export default CrewCard;