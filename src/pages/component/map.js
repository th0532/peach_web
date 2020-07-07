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
            lat:"37.551229",
            lng:"126.988205"
        },
        {
            lat:"37.592128",
            lng:"126.97942"
        },
        {
            lat:"37.557335",
            lng:"126.981987"
        },
        {
            lat:"37.54824",
            lng:"127.043114"
        },
        {
            lat:"37.543059",
            lng:"127.088351"
        },
        {
            lat:"37.556708",
            lng:"126.910326"
        },
    ]
    return (
        <NaverMap 
            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
            style={{
                width: '100%', // 네이버지도 가로 길이
                height: '100%' // 네이버지도 세로 길이
            }}
            defaultCenter={{ lat: 37.562528, lng: 126.970833 }} // 지도 초기 위치
            defaultZoom={12} // 지도 초기 확대 배율
            zoomControl={true}
            scrollWheel={false}
        >
        {mapData.map((data, key) =>{
            return(
            <Marker
                key={key}
                position={{lat:data.lat , lng:data.lng}}
                animation={2}
                onClick={() => {alert('테스트중입니다.');}}
            />
            );
        })}
        
      </NaverMap>
    );
  }

export default Map;

// navermaps.LatLng()
// navermaps.LatLng()