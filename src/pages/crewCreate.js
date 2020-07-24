import React, {useState} from "react";
import { Range, getTrackBackground } from 'react-range';
import axios from "axios";
import "./css/crewCreate.css"

const crewCreate = () => {
    return(
            <div className={"crewCreate"}>
                    <Category></Category>
                    <Area></Area>
                    <Recruit></Recruit>
                    <Writing></Writing>
            </div>
    )
}

const Category = () =>{
    return(
        <div className={"category"}>
            <h1>분야</h1>
            <select>
                <option>선택</option>
                <option>Adventure</option>
                <option>Health</option>
                <option>Social</option>
                <option>Tech</option>
                <option>Art</option>
            </select>
        </div>
    )
}

const Area = () => {
    return(
        <div className={"area"}>
            <h1>지역</h1>
                <span>서울시</span>
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
    )
}

const Recruit = () =>{

    const [personnelFlag, setPersonnelFlag] = useState(false);
    const [mettingDateFlag, setMettingDateFlag] = useState(false);
    const handleFlag = (type) =>{
        if(type === "personnel"){
            setPersonnelFlag(!personnelFlag)
        }else if(type === "mettingDate"){
            setMettingDateFlag(!mettingDateFlag)
        }
    }
   
    return(
        <div className={"recruit"}>
            <div className={"personnel"}>
                <h1>인원</h1>
                제한 없음<input type="checkbox" onClick={() => handleFlag("personnel")}/>
                {personnelFlag === false && <RangeComponent></RangeComponent>}
            </div>
            {/*모임날짜 */}         
        </div>
    )
}
// 모임날짜
// <div className={"metting_date"}>
//     <h1>모임날짜</h1>
//     미정<input type="checkbox" onClick={() => handleFlag("mettingDate")}/>
//     {mettingDateFlag === false && <input type="date" placeholder="연도-월-일"/>}
// </div>
const Writing = () => {
    
    const [file, setFile] = useState('');
    const [previewURL, setPreviewURL] = useState('');

    const handleFileOnChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setFile(file);
            setPreviewURL(reader.result);
        }
        reader.readAsDataURL(file);
      }

      const dataSubmit = () =>{
        const categoryValue = document.querySelector(".category select option:checked").text;
        const areaValue     = document.querySelector(".area select option:checked").text;
        // 인원 체크 될 시에는 0명으로 으로 서버에 넘기기
        let personnelInput =  document.querySelector(".personnel input");
        let personnelFlag = personnelInput.checked;
        let personnelValue;
        if(!personnelFlag){
          personnelValue = document.querySelector("#output").innerHTML;
        }else{
          personnelValue = "0";
        }
        
        const titleValue = document.querySelector(".writing_title input").value;
        let contentValue = document.querySelector(".writing_desc textarea").value;
        const imgValue = "https://cdn.pixabay.com/photo/2020/05/24/16/14/switzerland-5214914__340.jpg";
        // 현재시간
        let day = new Date();
        let y = day.getFullYear();
        let m = day.getMonth()+1;
        let d = day.getDate();
        let h = day.getHours();
        let i = day.getMinutes();

        let time = y+"-"+m+"-"+d+" "+h+":"+i;

        // textarea enter -> <br />
        contentValue = contentValue.replace(/(\n|\r\n)/g, '<br>');
        // 공백 검증 
        if(categoryValue !== "선택" && areaValue !== "선택" && personnelValue !== undefined && titleValue !== "" && contentValue !== "" && imgValue !== ""){
          serverSubmit(categoryValue, areaValue, personnelValue, titleValue, contentValue, imgValue, time);
        }else{
          alert("값을 모두 입력해주세요")
        }
      }

      const serverSubmit = (categoryValue, areaValue, personnelValue, titleValue, contentValue, imgValue, time) =>{
        
        axios
        .post('http://localhost:5000/api/insert/crewcreate',null,{
            params: {
              categoryValue,
              areaValue,
              personnelValue,
              titleValue,
              contentValue,
              imgValue,
              time
            }
        })
        .then(() => {
          alert("글이 등록되었습니다.");
          window.location.href = "http://localhost:3000/peach_web#/";
        })
        .catch(e => {  // API 호출이 실패한 경우
          alert("글 등록을 실패하였습니다.")
        });
      }


    return(
        <div className={"writing"}>
            <div className={"writing_title"}>
                <h1>제목</h1>
                <input type="text" placeholder="제목을 입력해주세요"></input>
            </div>
            <div className={"writing_desc"}>
                <h1>설명</h1>
                <textarea type="text" placeholder="시간, 장소, 모임주기, 연락처 등 자유롭게 입력해주세요"></textarea>
            </div>
            <div className={"thumbnail"}>
                <h1>썸네일 이미지 (선택)</h1>
                <input type='file' 
                        accept='image/jpg,impge/png,image/jpeg,image/gif' 
                        name='profile_img' 
                        onChange={handleFileOnChange}>
                </input>
                {previewURL === '' ? '' : <img className='profile_preview' src={previewURL} alt="thumbnail"></img> }
            </div>
            <div className={"submit_button"}>
                <button onClick={dataSubmit} >등록</button>
            </div>
        </div>
    )
}

const STEP = 1;
const MIN = 1;
const MAX = 30;

class RangeComponent extends React.Component {
  state = {
    values: [15]
  };
  render() {
    return (
      <div className ={"range"}
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Range
          values={this.state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={values => this.setState({ values })}
          renderTrack={({ props, children }) => (
            <div 
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%"
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "10px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: this.state.values,
                    colors: ["#548BF4", "#ccc"],
                    min: MIN,
                    max: MAX
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "32px",
                width: "32px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA"
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC"
                }}
              />
            </div>
          )}
        />
        <output style={{ marginTop: "30px" }} id="output">
          {this.state.values[0].toFixed(1)}
        </output>
      </div>
    );
  }
}


export default crewCreate;