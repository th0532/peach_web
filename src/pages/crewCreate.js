import React, {useState} from "react";
import { Range, getTrackBackground } from 'react-range';
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
            <div className={"metting_date"}>
                <h1>모임날짜</h1>
                미정<input type="checkbox" onClick={() => handleFlag("mettingDate")}/>
                {mettingDateFlag === false && <input type="date" placeholder="연도-월-일"/>}
            </div>
        </div>
    )
}

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
                <button>등록</button>
            </div>
        </div>
    )
}

const STEP = 1;
const MIN = 1;
const MAX = 50;

class RangeComponent extends React.Component {
  state = {
    values: [25]
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