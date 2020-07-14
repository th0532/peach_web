import React,{useState ,useEffect} from "react";
import { Link } from 'react-router-dom';
import "./componentCss/crewCard.css";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const CrewCard = (props) =>{
    console.log(props);
    
    let pathNow = props.listdata.path.path;
    let path = "/crewcategory";
    
    // arrows="true"
    const [width, setWidth] = useState();
    const [slideCard, setSlideCard] = useState(2);
    const [arrowsFlag, setArrowsFlag] = useState(false);
    const [offsetValue, setOffsetValue] = useState(15);
    const [animationSpeedValue, setAnimationSpeedValue] = useState(100);

    useEffect(() => {
    // 화면 width 값에 따라 carousel 옵션 값 변경
        setWidth(window.innerWidth);
        if(width > 768){
            setSlideCard(4);
            setArrowsFlag(true);
            setOffsetValue(0)
            setAnimationSpeedValue(300);
        }
      });
        
    return(
        <div className={"crewCard"}>
            <h1 className="category_title">{props.listdata.categoryTitle}</h1>
            <Link to={{
                pathname:`${path}/${props.listdata.categoryTitle}`,
            }}>
                {pathNow==="/crewfind" ? <span className="category_more">More</span>:""}
            </Link>
            <div className={"crewCard_item_wrap"} >
                <Carousel slidesPerPage={slideCard} arrows={arrowsFlag} animationSpeed = {animationSpeedValue} offset={offsetValue}>
                    {props.listdata.listdata !==undefined && props.listdata.listdata.map(data=>(
                        <CrewCardItem 
                            key={data.list_index}
                            list_index={data.list_index}
                            category = {data.category}
                            imgLink={data.imgLink}
                            desc_title={data.desc_title}
                            desc_content={data.desc_content}
                            date={data.date}
                            user_name={data.user_name}
                            prevPage={props.path.path}
                            comment_data={data.comment_data}
                        >
                        </CrewCardItem>
                    ))}
                </Carousel>
            </div>
        </div>      
    )
}
const CrewCardItem = (props) =>{
    const user_name = props.user_name;
    const date = props.date;
    const desc_title = props.desc_title;
    const desc_content = props.desc_content;
    const category = props.category;
    const prevPage = props.prevPage;
    const comment_data = props.comment_data;
      return(
        <div className={"crewCard_item"}>
            <Link to={{
                pathname:`/crewdetail/${props.category}/${props.list_index}`,
                state:{
                    user_name:user_name,
                    date:date,
                    desc_title:desc_title,
                    desc_content:desc_content,
                    category:category,
                    prevPage:prevPage,
                    comment_data:comment_data
                }
            }}>
                <div className={"crewCard_img"}>
                    <img src = {props.imgLink} alt ="crewCard_img"></img>
                </div>            
                <div className={"crewCard_desc"}>
                    <h3>{props.desc_title}</h3>
                    <div className={"crewCard_desc_info"}>
                        <p>작성자: OOOOO</p>
                        <p>모임 장소: 동작구</p>
                        <p>모임 날짜: 7월 21일</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CrewCard;