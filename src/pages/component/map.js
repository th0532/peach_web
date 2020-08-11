import React,{useState} from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker  } from 'react-naver-maps'; // 패키지 불러오기
import "./componentCss/map.css";

const Map = (props) => {
    return (
        <div className ={"map"}>
            <RenderAfterNavermapsLoaded
                ncpClientId={'x81jfsrutc'} // 자신의 네이버 계정에서 발급받은 Client ID
                error={<p>Maps Load Error</p>}
                loading={<p>지도를 불러오고 있습니다.</p>}
            >
            <NaverMapAPI mapdata={props.mapdata} />
            </RenderAfterNavermapsLoaded>
        </div>
        )
}

function NaverMapAPI(props) {
    // const navermaps = window.naver.maps;
    const displayOn = (areaName, crewCount) =>{
        alert(areaName + " 개설현황 : " + crewCount + " 개");
    }

    return (
        <NaverMap 
            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
            style={{
                width: '100%', // 네이버지도 가로 길이
                height: '100%' // 네이버지도 세로 길이
            }}
            defaultCenter={{ lat: 37.562528, lng: 126.970833 }} // 지도 초기 위치
            defaultZoom={11} // 지도 초기 확대 배율
            zoomControl={true}
            scrollWheel={false}
        >
            {props.mapdata.map((data, key) =>{
            return(
                <div key = {key}>
                    <Marker
                        key={key}
                        position={{lat:data.lat , lng:data.lng}}
                        animation={2}
                        onClick={() => {displayOn(data.area, data.count);}}
                    />
                </div>
                );
            })}
            <MapListDivision mapdata={props.mapdata}></MapListDivision>
      </NaverMap>
    );
  }

const MapListDivision = (props) => {
    const [displayOnOff, setdisplayFlag] = useState(false);
    const [mapSelected, setMapSelected] = useState("map_selected");
    const [listSelected, setListSelected] = useState("list_notSelected");
    const [areaName, setAreaName] = useState(props.mapdata[0].area);
    const [crewCount, setCrewCount] = useState(props.mapdata[0].count);

    const displayFlag = (type) =>{
        if(type === "map"){
            setdisplayFlag(false);
            setMapSelected("map_selected");
            setListSelected("list_notSelected");
        }else{
            setdisplayFlag(true);
            setMapSelected("map_notSelected");
            setListSelected("list_selected");
        }
    }

    const areaNameChange = (areaName,count) =>{
        setAreaName(areaName);
        setCrewCount(count);
    }

    return(
        <div>
        <div className="display_type">
            <ul>
                <li onClick = {() => displayFlag("map")} className={mapSelected}>Map</li>
                <li onClick = {() => displayFlag("list")} className={listSelected}>List</li>
            </ul>
        </div>
        {displayOnOff === true? 
            <div className="map_table_wrap">
                <div className="map_table">
                    <h1>관측망 현황</h1>
                    <ul>
                    {props.mapdata.map((data, index)=>(
                        <li key={index} onClick={()=>areaNameChange(data.area, data.count)}>{data.area}</li>  
                    ))}
                    {/*
                        <li></li>
                        <li></li>
                        <li></li>
                    */}

                    </ul>
                </div>
                <div className={"map_info"}>
                    <span className={"area_color"}> {areaName}</span> <span>모임 개설 수 : {crewCount} 개</span>
                </div>
            </div>:""
        }
        </div>

    )
}

export default Map;

// navermaps.LatLng()
// navermaps.LatLng()