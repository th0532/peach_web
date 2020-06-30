import React, {useState} from "react";
import "./css/common.css"
import "./css/crewCreate.css"

const crewCreate = () => {
    return(
        <div className={"content"}>
            <div className={"crewCreate"}>
                    <Category></Category>
                    <Area></Area>
                    <Recruit></Recruit>
                    <Writing></Writing>
            </div>
        </div>
    )
}

const Category = () =>{
    return(
        <div className={"category"}>
            <h1>분야</h1>
            <select>
                <option>1차선택</option>
                <option>1차선택_1</option>
            </select>
            <select>
                <option>2차선택</option>
                <option>2차선택_1</option>
            </select>
        </div>
    )
}

const Area = () => {
    return(
        <div className={"area"}>
            <h1>지역</h1>
            <select>
                <option>1차선택</option>
                <option>1차선택_1</option>
            </select>
            <select>
                <option>2차선택</option>
                <option>2차선택_1</option>
            </select>
            <select>
                <option>3차선택</option>
                <option>3차선택_1</option>
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
                {personnelFlag === false && <input type="range" min="0" max="50"/>}
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
                <textarea type="text" placeholder="내용을 입력해주세요"></textarea>
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

export default crewCreate;