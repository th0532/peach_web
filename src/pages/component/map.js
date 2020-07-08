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
            lat:"37.6658609",    
            lng:"127.0317674"
        },
        {
            lat:"37.6176125",
            lng:"126.9227004"
        },
        {
            lat:"37.5838012",
            lng:"127.0507003" 
        },
        {
            lat:"37.4965037",
            lng:"126.9443073" 
        },
        {
            lat:"37.4600969",
            lng:"126.9001546" 
        },
        {
            lat:"37.4954856",
            lng:"126.858121" 
        },

        {
            lat:"37.5990998",
            lng:"126.9861493" 
        }, 
        {
            lat:"37.6469954",
            lng:"127.0147158"   	
        }, 
        {
            lat:"37.5953795",
            lng:"127.0939669"  
        }, 
        {
            lat:"37.4959854",
            lng:"127.0664091"   	
        }, 
        {
            lat:"37.5657617",
            lng:"126.8226561"  
        }, 
        {
            lat:"37.5579452",
            lng:"126.9941904"
        },
        {
            lat:"37.5492077",
            lng:"127.1464824"   
        },
        {
            lat:"37.5481445",
            lng:"127.0857528" 
        },
        {
            lat:"37.5622906",
        lng:"126.9087803" 
        },
        {
            lat:"37.4769528",
            lng:"127.0378103" 
        },
        {
            lat:"37.606991" ,
            lng:"127.0232185"  
        },
        {
            lat:"37.655264" ,
            lng:"127.0771201"
        },
        {
            lat:"37.5048534",
            lng:"127.1144822" 
        },
        {
            lat:"37.5820369",
            lng:"126.9356665"   
        },
        {
            lat:"37.5270616",
            lng:"126.8561534"  
        },
        {
            lat:"37.520641" ,
            lng:"126.9139242"   
        },
        {
            lat:"37.4653993",
            lng:"126.9438071" 
        },
        {
            lat:"37.5506753",
            lng:"127.0409622"  
        },
        {
            lat:"37.5311008",
            lng:"126.9810742"
        }
    ]
    const [displayOnOff, setdisplayFlag] = useState(false);

    const displayOn = () =>{
        alert("asd");
    }
    const displayFlag = (type) =>{
        if(type === "map"){
            setdisplayFlag(false)
        }else{
            setdisplayFlag(true);
        }
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
                onClick={() => {displayOn();}}
            />
            );
        })}
        <div className="display_type">
            <ul>
                <li onClick = {() => displayFlag("map")}>Map</li>
                <li onClick = {() => displayFlag("list")}>List</li>
            </ul>
        </div>
        {displayOnOff === true? 
            <div className="map_table_wrap">
                <div className="map_table">
                    <h1>관측망 현황</h1>
                    <ul>
                        <li>강남구</li>               
                        <li>강동구</li>
                        <li>강북구</li>
                        <li>강서구</li>
                    </ul>
                    <ul>
                        <li>관악구</li>
                        <li>광진구</li>
                        <li>구로구</li>
                        <li>금천구</li>
                    </ul>
                    <ul>
                        <li>노원구</li>
                        <li>도봉구</li>
                        <li>동대문구</li>
                        <li>동작구</li>
                    </ul>
                    <ul>
                        <li>마포구</li>
                        <li>서대문구</li>
                        <li>서초구</li>
                        <li>성동구</li>
                    </ul>
                    <ul>
                        <li>성북구</li>
                        <li>송파구</li>
                        <li>양천구</li>
                        <li>영등포구</li>
                    </ul>
                    <ul>
                        <li>용산구</li>
                        <li>은평구</li>
                        <li>종로구</li>
                        <li>중구</li>
                    </ul>
                    <ul>
                        <li>중랑구</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className={"map_info"}>
                    <span> OO구 모임 개설 수 : 12 개</span>
                </div>
            </div>:""
        }
        
      </NaverMap>
    );
  }

export default Map;

// navermaps.LatLng()
// navermaps.LatLng()