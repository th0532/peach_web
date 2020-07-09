import React,{useState} from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker  } from 'react-naver-maps'; // 패키지 불러오기
import "./componentCss/map.css";

const Map = () => {
    return (
        <div className ={"map"}>
            <RenderAfterNavermapsLoaded
                ncpClientId={'x81jfsrutc'} // 자신의 네이버 계정에서 발급받은 Client ID
                error={<p>Maps Load Error</p>}
                loading={<p>지도를 불러오고 있습니다.</p>}
            >
            <NaverMapAPI />
            </RenderAfterNavermapsLoaded>
        </div>
        )
}

function NaverMapAPI() {
    const navermaps = window.naver.maps;
    const mapData = [
        {
            area:"강남구",
            crewCount:"42",
            lat:"37.6658609",    
            lng:"127.0317674"
        },
        {
            area:"강동구",
            crewCount:"22",
            lat:"37.6176125",
            lng:"126.9227004"
        },
        {
            area:"강북구",
            crewCount:"35",
            lat:"37.5838012",
            lng:"127.0507003" 
        },
        {
            area:"강서구",
            crewCount:"21",
            lat:"37.4965037",
            lng:"126.9443073" 
        },
        {
            area:"관악구",
            crewCount:"46",
            lat:"37.4600969",
            lng:"126.9001546" 
        },
        {
            area:"광진구",
            crewCount:"33",
            lat:"37.4954856",
            lng:"126.858121" 
        },

        {
            area:"구로구",
            crewCount:"26",
            lat:"37.5990998",
            lng:"126.9861493" 
        }, 
        {
            area:"금천구",
            crewCount:"31",
            lat:"37.6469954",
            lng:"127.0147158"   	
        }, 
        {
            area:"노원구",
            crewCount:"18",
            lat:"37.5953795",
            lng:"127.0939669"  
        }, 
        {
            area:"도봉구",
            crewCount:"26",
            lat:"37.4959854",
            lng:"127.0664091"   	
        }, 
        {
            area:"동대문구",
            crewCount:"38",
            lat:"37.5657617",
            lng:"126.8226561"  
        }, 
        {
            area:"동작구",
            crewCount:"37",
            lat:"37.5579452",
            lng:"126.9941904"
        },
        {
            area:"마포구",
            crewCount:"54",
            lat:"37.5492077",
            lng:"127.1464824"   
        },
        {
            area:"서대문구",
            crewCount:"21",
            lat:"37.5481445",
            lng:"127.0857528" 
        },
        {
            area:"서초구",
            crewCount:"24",
            lat:"37.5622906",
            lng:"126.9087803" 
        },
        {
            area:"성동구",
            crewCount:"19",
            lat:"37.4769528",
            lng:"127.0378103" 
        },
        {
            area:"성북구",
            crewCount:"17",
            lat:"37.606991" ,
            lng:"127.0232185"  
        },
        {
            area:"송파구",
            crewCount:"32",
            lat:"37.655264" ,
            lng:"127.0771201"
        },
        {
            area:"양천구",
            crewCount:"16",
            lat:"37.5048534",
            lng:"127.1144822" 
        },
        {
            area:"영등포구",
            crewCount:"24",
            lat:"37.5820369",
            lng:"126.9356665"   
        },
        {
            area:"용산구",
            crewCount:"27",
            lat:"37.5270616",
            lng:"126.8561534"  
        },
        {
            area:"은평구",
            crewCount:"32",
            lat:"37.520641" ,
            lng:"126.9139242"   
        },
        {
            area:"종로구",
            crewCount:"36",
            lat:"37.4653993",
            lng:"126.9438071" 
        },
        {
            area:"중구",
            crewCount:"21",
            lat:"37.5506753",
            lng:"127.0409622"  
        },
        {
            area:"중랑구",
            crewCount:"33",
            lat:"37.5311008",
            lng:"126.9810742"
        }
    ]

    const [displayOnOff, setdisplayFlag] = useState(false);
    const [mapSelected, setMapSelected] = useState("map_selected");
    const [listSelected, setListSelected] = useState("list_notSelected");
    const [areaName, setAreaName] = useState(mapData[0].area);
    const [crewCount, setCrewCount] = useState(mapData[0].crewCount);
    
    const displayOn = (areaName, crewCount) =>{
        alert(areaName + " 개설현황 : " + crewCount);
    }
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
        {mapData.map((data, key) =>{
            return(
            <Marker
                key={key}
                position={{lat:data.lat , lng:data.lng}}
                animation={2}
                onClick={() => {displayOn(data.area, data.crewCount);}}
            />
            );
        })}
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
                    {mapData.map((data, index)=>(
                        <li key={index} onClick={()=>areaNameChange(data.area,data.crewCount)}>{data.area}</li>  
                    ))}
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className={"map_info"}>
                    <span className={"area_color"}> {areaName}</span> <span>모임 개설 수 : {crewCount} 개</span>
                </div>
            </div>:""
        }
        
      </NaverMap>
    );
  }

export default Map;

// navermaps.LatLng()
// navermaps.LatLng()