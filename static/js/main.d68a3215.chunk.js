(this.webpackJsonppeach_web=this.webpackJsonppeach_web||[]).push([[0],{15:function(e,t,a){},30:function(e,t,a){e.exports=a(57)},35:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(26),i=a.n(c),r=(a(35),a(4)),o=a(2),m=a(3),s=(a(36),function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(!1),s=Object(m.a)(o,2),p=s[0],d=s[1],u=Object(n.useState)(!1),g=Object(m.a)(u,2),_=g[0],E=g[1],h=Object(n.useState)(!1),b=Object(m.a)(h,2),v=b[0],f=b[1],y=function(e){"naviToggle1"===e?(i(!0),d(!1),E(!1),f(!1)):"naviToggle2"===e?(i(!1),d(!0),E(!1),f(!1)):"naviToggle3"===e?(i(!1),d(!1),E(!0),f(!1)):"naviToggle4"===e&&(i(!1),d(!1),E(!1),f(!0))};return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"top"},l.a.createElement("div",{className:"logo"},l.a.createElement(r.b,{to:"/",onClick:function(){return y("naviToggle1")}},"Peach")),l.a.createElement("div",{className:"navigation"},l.a.createElement("div",{className:"pc_navigation"},l.a.createElement("ul",null,l.a.createElement("li",{className:c&&"navi_click"},l.a.createElement(r.b,{to:"/",onClick:function(){return y("naviToggle1")}},"Home")),l.a.createElement("li",{className:p&&"navi_click"},l.a.createElement(r.b,{to:"/crewfind",onClick:function(){return y("naviToggle2")}},"\ubaa8\uc784\ud0d0\uc0c9")),l.a.createElement("li",{className:_&&"navi_click"},l.a.createElement(r.b,{to:"/crewcreate",onClick:function(){return y("naviToggle3")}},"\ubaa8\uc784\ub9cc\ub4e4\uae30")),l.a.createElement("li",{className:v&&"navi_click"},l.a.createElement(r.b,{to:"/login",onClick:function(){return y("naviToggle4")}},"\ub85c\uadf8\uc778")))))))}),p=(a(41),function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(!1),s=Object(m.a)(o,2),p=s[0],d=s[1],u=Object(n.useState)(!1),g=Object(m.a)(u,2),_=g[0],E=g[1],h=Object(n.useState)(!1),b=Object(m.a)(h,2),v=b[0],f=b[1],y=function(e){"naviToggle1"===e?(i(!0),d(!1),E(!1),f(!1)):"naviToggle2"===e?(i(!1),d(!0),E(!1),f(!1)):"naviToggle3"===e?(i(!1),d(!1),E(!0),f(!1)):"naviToggle4"===e&&(i(!1),d(!1),E(!1),f(!0))};return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"pc_footer"},l.a.createElement("div",{className:"copyright"},l.a.createElement("p",null,"\xa9 2020 LeeTaeHee, Inc. All rights reserved")),l.a.createElement("div",{className:"sitemap"},l.a.createElement("ul",null,l.a.createElement("li",null,"\uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68"),l.a.createElement("li",null,"\uc774\uc6a9\uc57d\uad00"),l.a.createElement("li",null,"\uc0ac\uc774\ud2b8\ub9f5"),l.a.createElement("li",null,"\ud658\ubd88\uc815\ucc45"))),l.a.createElement("div",{className:"SNS"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.b,{to:"#"},l.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_960_720.png",width:"30px",height:"30px",alt:"facebook"}))),l.a.createElement("li",null,l.a.createElement(r.b,{to:"#"},l.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_960_720.png",width:"30px",height:"30px",alt:"instagram"}))),l.a.createElement("li",null,l.a.createElement(r.b,{to:"#"},l.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_960_720.png",width:"30px",height:"30px",alt:"youtube"})))))),l.a.createElement("div",{className:"mob_menu"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.b,{to:"/",className:c&&"mobile_navi_click",onClick:function(){return y("naviToggle1")}},"Home")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/crewFind",className:p&&"mobile_navi_click",onClick:function(){return y("naviToggle2")}},"\ubaa8\uc784\ud0d0\uc0c9")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/crewCreate",className:_&&"mobile_navi_click",onClick:function(){return y("naviToggle3")}},"\ubaa8\uc784\ub9cc\ub4e4\uae30")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/login",className:v&&"mobile_navi_click",onClick:function(){return y("naviToggle4")}},"\ub85c\uadf8\uc778")))))}),d=a(13);a(51);function u(){window.naver.maps;var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)("map_selected"),r=Object(m.a)(i,2),o=r[0],s=r[1],p=Object(n.useState)("list_notSelected"),u=Object(m.a)(p,2),g=u[0],_=u[1],E=function(e){"map"===e?(c(!1),s("map_selected"),_("list_notSelected")):(c(!0),s("map_notSelected"),_("list_selected"))};return l.a.createElement(d.b,{mapDivId:"maps-getting-started-uncontrolled",style:{width:"100%",height:"100%"},defaultCenter:{lat:37.562528,lng:126.970833},defaultZoom:11,zoomControl:!0,scrollWheel:!1},[{lat:"37.6658609",lng:"127.0317674"},{lat:"37.6176125",lng:"126.9227004"},{lat:"37.5838012",lng:"127.0507003"},{lat:"37.4965037",lng:"126.9443073"},{lat:"37.4600969",lng:"126.9001546"},{lat:"37.4954856",lng:"126.858121"},{lat:"37.5990998",lng:"126.9861493"},{lat:"37.6469954",lng:"127.0147158"},{lat:"37.5953795",lng:"127.0939669"},{lat:"37.4959854",lng:"127.0664091"},{lat:"37.5657617",lng:"126.8226561"},{lat:"37.5579452",lng:"126.9941904"},{lat:"37.5492077",lng:"127.1464824"},{lat:"37.5481445",lng:"127.0857528"},{lat:"37.5622906",lng:"126.9087803"},{lat:"37.4769528",lng:"127.0378103"},{lat:"37.606991",lng:"127.0232185"},{lat:"37.655264",lng:"127.0771201"},{lat:"37.5048534",lng:"127.1144822"},{lat:"37.5820369",lng:"126.9356665"},{lat:"37.5270616",lng:"126.8561534"},{lat:"37.520641",lng:"126.9139242"},{lat:"37.4653993",lng:"126.9438071"},{lat:"37.5506753",lng:"127.0409622"},{lat:"37.5311008",lng:"126.9810742"}].map((function(e,t){return l.a.createElement(d.a,{key:t,position:{lat:e.lat,lng:e.lng},animation:2,onClick:function(){alert("asd")}})})),l.a.createElement("div",{className:"display_type"},l.a.createElement("ul",null,l.a.createElement("li",{onClick:function(){return E("map")},className:o},"Map"),l.a.createElement("li",{onClick:function(){return E("list")},className:g},"List"))),!0===a?l.a.createElement("div",{className:"map_table_wrap"},l.a.createElement("div",{className:"map_table"},l.a.createElement("h1",null,"\uad00\uce21\ub9dd \ud604\ud669"),l.a.createElement("ul",null,l.a.createElement("li",null,"\uac15\ub0a8\uad6c"),l.a.createElement("li",null,"\uac15\ub3d9\uad6c"),l.a.createElement("li",null,"\uac15\ubd81\uad6c"),l.a.createElement("li",null,"\uac15\uc11c\uad6c")),l.a.createElement("ul",null,l.a.createElement("li",null,"\uad00\uc545\uad6c"),l.a.createElement("li",null,"\uad11\uc9c4\uad6c"),l.a.createElement("li",null,"\uad6c\ub85c\uad6c"),l.a.createElement("li",null,"\uae08\ucc9c\uad6c")),l.a.createElement("ul",null,l.a.createElement("li",null,"\ub178\uc6d0\uad6c"),l.a.createElement("li",null,"\ub3c4\ubd09\uad6c"),l.a.createElement("li",null,"\ub3d9\ub300\ubb38\uad6c"),l.a.createElement("li",null,"\ub3d9\uc791\uad6c")),l.a.createElement("ul",null,l.a.createElement("li",null,"\ub9c8\ud3ec\uad6c"),l.a.createElement("li",null,"\uc11c\ub300\ubb38\uad6c"),l.a.createElement("li",null,"\uc11c\ucd08\uad6c"),l.a.createElement("li",null,"\uc131\ub3d9\uad6c")),l.a.createElement("ul",null,l.a.createElement("li",null,"\uc131\ubd81\uad6c"),l.a.createElement("li",null,"\uc1a1\ud30c\uad6c"),l.a.createElement("li",null,"\uc591\ucc9c\uad6c"),l.a.createElement("li",null,"\uc601\ub4f1\ud3ec\uad6c")),l.a.createElement("ul",null,l.a.createElement("li",null,"\uc6a9\uc0b0\uad6c"),l.a.createElement("li",null,"\uc740\ud3c9\uad6c"),l.a.createElement("li",null,"\uc885\ub85c\uad6c"),l.a.createElement("li",null,"\uc911\uad6c")),l.a.createElement("ul",null,l.a.createElement("li",null,"\uc911\ub791\uad6c"),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null))),l.a.createElement("div",{className:"map_info"},l.a.createElement("span",null," OO\uad6c \ubaa8\uc784 \uac1c\uc124 \uc218 : 12 \uac1c"))):"")}var g=function(){return l.a.createElement("div",{className:"map"},l.a.createElement(d.c,{ncpClientId:"x81jfsrutc",error:l.a.createElement("p",null,"Maps Load Error"),loading:l.a.createElement("p",null,"\uc9c0\ub3c4\ub97c \ubd88\ub7ec\uc624\uace0 \uc788\uc2b5\ub2c8\ub2e4.")},l.a.createElement(u,null)))},_=(a(52),a(15),a(53),function(e){var t=e.listdata.path.path;return console.log(e),l.a.createElement("div",{className:"crewCard"},l.a.createElement("h1",{className:"category_title"},e.listdata.categoryTitle),l.a.createElement(r.b,{to:"/"===t?"/crewfind/":"/crewCategory/:"+e.listdata.categoryTitle},"/crewcategory"===t?"":l.a.createElement("span",{className:"category_more"},"more")),l.a.createElement("div",{className:"crewCard_item_wrap"},void 0!==e.listdata.listdata&&e.listdata.listdata.map((function(t,a){return l.a.createElement("div",{key:a,className:"crewCard_item"},l.a.createElement(r.b,{to:"/crewdetail/"+e.listdata.categoryTitle+"/"+t.list_index},l.a.createElement("div",{className:"crewCard_img"},l.a.createElement("img",{src:t.imgLink,alt:"crewCard_img"})),l.a.createElement("div",{className:"crewCard_desc"},l.a.createElement("dl",null,l.a.createElement("dt",null,t.desc_title),l.a.createElement("dd",null,t.desc_content)))))}))))}),E=function(e){return l.a.createElement("div",{className:"crew_category_item"},l.a.createElement("div",{className:"crew_list_wrap"},l.a.createElement(_,{path:e.path,listdata:e})))},h=function(e){var t={category1:[{imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2017/01/13/09/23/magic-cube-1976725__340.jpg",desc_title:"\ud050\ube0c \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c\uc788\ub098\uc694",desc_content:"\ud050\ube0c \uac19\uc774 \ud560\uc0ac\ub78c \uad6c\ud574\uc694",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2020/06/09/03/08/craft-5276736__340.jpg",desc_title:"\uac19\uc774 \ub9c8\ud3ec\uad6c \ub3c4\uc608\uc218\uc5c5 \ub4e4\uc744 \uc0ac\ub78c \uc788\uc744\uae4c\uc694",desc_content:"\ud1a0\uc694\uc77c \uc624\ud6c4 \ub2e4\ub2d0 \uc0ac\ub78c \uad6c\ud569\ub2c8\ub2e4.",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2}],category2:[{imgLink:"https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2016/03/05/22/53/amateur-1239387__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2016/03/27/19/54/golf-1284011__340.jpg",desc_title:"\uace8\ud504 \uce58\ub7ec \uac08 \uc0ac\ub78c \uad6c\ud574\uc694",desc_content:"\uc77c\uc694\uc77c \uc624\uc804\uc5d0 \ucd9c\ubc1c\ud558\uc2e4\uc218 \uc788\ub294\uc0ac\ub78c \uad6c\ud569\ub2c8\ub2e4",list_index:2}]};return l.a.createElement("div",{className:"crewFind"},l.a.createElement("div",{className:"crew_wrap"},l.a.createElement(E,{path:e.path,categoryTitle:"NEW",listdata:t.category1}),l.a.createElement(E,{path:e.path,categoryTitle:"HOT",listdata:t.category2})))},b=function(e){return l.a.createElement("div",{className:"content"},l.a.createElement(g,null),l.a.createElement(h,{path:e.path}))},v=function(e){var t=e.match;return l.a.createElement("div",null,l.a.createElement(b,{path:t}))},f=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"login"))},y=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"SignUp"))},x=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],i=a[1];console.log(c);return l.a.createElement("div",{className:"crew_category_item"},l.a.createElement("div",{className:"crew_category"},l.a.createElement("h1",null,"\uc9c0\uc5ed"),l.a.createElement("select",{onChange:function(){i(!0)}},l.a.createElement("option",null,"\uc9c0\uc5ed\uc120\ud0dd"),l.a.createElement("option",null,"\uc11c\uc6b8"),l.a.createElement("option",null,"\uacbd\uae30"),l.a.createElement("option",null,"\uc778\ucc9c"),l.a.createElement("option",null,"\ub300\uc804")),!0===c?l.a.createElement("div",{className:"area2"},l.a.createElement("h1",null,"\uc9c0\uc5ed 2"),l.a.createElement("select",null,l.a.createElement("option",null,"\uc885\ub85c\uad6c"),l.a.createElement("option",null,"\ub9c8\ud3ec\uad6c"),l.a.createElement("option",null,"\ub3d9\uc791\uad6c"))):""),l.a.createElement("div",{className:"crew_list_wrap"},l.a.createElement(_,{listdata:e})))},w=function(e){return l.a.createElement("div",{className:"crewFind"},l.a.createElement("div",{className:"crew_wrap"},l.a.createElement(x,{path:e.path,categoryTitle:"Adventure",listdata:[{imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2}]})))},O=function(e){var t=e.match;return l.a.createElement("div",{className:"content"},l.a.createElement(w,{path:t}))},j=function(e){return l.a.createElement("div",{className:"crew_category_item"},l.a.createElement("div",{className:"crew_list_wrap"},l.a.createElement(_,{path:e.path,listdata:e})))},k=function(e){var t={category1:[{imgLink:"https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989__340.jpg",desc_title:"\uce74\ub204 \ubaa8\uc784",desc_content:"\uce74\ub204 \uc990\uaca8\ud0c0\ub294 \uc0ac\ub78c \uc788\ub098\uc694",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2016/11/29/09/49/adventure-1868817__340.jpg",desc_title:"\uc5ec\ud589 \uac08 \uc0ac\ub78c",desc_content:"7\uc6d4 21\uc77c \uc5ec\ud589 \uac08 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2016/08/14/18/27/sailing-boat-1593613__340.jpg",desc_title:"\uc694\ud2b8 \ud328\ud0a4\uc9c0 \uc5ec\ud589 \uac08\uc0ac\ub78c \uad6c\ud574\uc694",desc_content:"\ud328\ud0a4\uc9c0 \uc5ec\ud589 \uac08 \uc0ac\ub78c \uad6c\ud569\ub2c8\ub2e4",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2014/09/21/17/56/wanderer-455338__340.jpg",desc_title:"\ub4f1\uc0b0 \ubaa8\uc784 \uad6c\ud569\ub2c8\ub2e4",desc_content:"\ub4f1\uc0b0 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud574\uc694",list_index:2}],category2:[{imgLink:"https://cdn.pixabay.com/photo/2017/08/02/20/24/people-2573216__340.jpg",desc_title:"\uc694\uac00 \ub2e4\ub2d0 \uc0ac\ub78c",desc_content:"\uac19\uc774 \ub3c4\ubd09\uad6c\uc5d0\uc11c \uc694\uac00 \ub2e4\ub2d0\uc0ac\ub78c \uc788\ub098\uc694",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149__340.jpg",desc_title:"\ud5ec\uc2a4 \uafb8\uc900\ud788 \uac19\uc774 \ud560\uc0ac\ub78c \uad6c\ud574\uc694",desc_content:"\ud5ec\uc2a4 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2}],category3:[{imgLink:"https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2016/03/27/19/54/golf-1284011__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2016/06/28/01/42/chess-1483735__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2015/04/20/17/38/photography-731891__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2}],category4:[{imgLink:"https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2016/03/05/22/53/amateur-1239387__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2}],category5:[{imgLink:"https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2016/03/05/22/53/amateur-1239387__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2}]};return l.a.createElement("div",{className:"crewFind"},l.a.createElement("div",{className:"crew_wrap"},l.a.createElement(j,{path:e.path,categoryTitle:"Adventure",listdata:t.category1}),l.a.createElement(j,{path:e.path,categoryTitle:"Health",listdata:t.category2}),l.a.createElement(j,{path:e.path,categoryTitle:"Social",listdata:t.category3}),l.a.createElement(j,{path:e.path,categoryTitle:"Tech",listdata:t.category4}),l.a.createElement(j,{path:e.path,categoryTitle:"Art",listdata:t.category5})))},N=function(e){var t=e.match;return l.a.createElement("div",{className:"content"},l.a.createElement(k,{path:t}))},T=(a(54),function(e){return l.a.createElement("div",{className:"crewDetail"},l.a.createElement("div",{className:"crewDetail_wrap"},l.a.createElement("h1",null,"crew \uac8c\uc2dc\uae00 \uc0c1\uc138 \ud398\uc774\uc9c0 \uc900\ube44\uc911 \uc785\ub2c8\ub2e4")))}),L=function(e){var t=e.match;return l.a.createElement("div",{className:"content"},l.a.createElement(T,{path:t}))},C=(a(55),function(){return l.a.createElement("div",{className:"category"},l.a.createElement("h1",null,"\ubd84\uc57c"),l.a.createElement("select",null,l.a.createElement("option",null,"1\ucc28\uc120\ud0dd"),l.a.createElement("option",null,"1\ucc28\uc120\ud0dd_1")),l.a.createElement("select",null,l.a.createElement("option",null,"2\ucc28\uc120\ud0dd"),l.a.createElement("option",null,"2\ucc28\uc120\ud0dd_1")))}),S=function(){return l.a.createElement("div",{className:"area"},l.a.createElement("h1",null,"\uc9c0\uc5ed"),l.a.createElement("select",null,l.a.createElement("option",null,"1\ucc28\uc120\ud0dd"),l.a.createElement("option",null,"1\ucc28\uc120\ud0dd_1")),l.a.createElement("select",null,l.a.createElement("option",null,"2\ucc28\uc120\ud0dd"),l.a.createElement("option",null,"2\ucc28\uc120\ud0dd_1")),l.a.createElement("select",null,l.a.createElement("option",null,"3\ucc28\uc120\ud0dd"),l.a.createElement("option",null,"3\ucc28\uc120\ud0dd_1")))},U=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),r=Object(m.a)(i,2),o=r[0],s=r[1],p=function(e){"personnel"===e?c(!a):"mettingDate"===e&&s(!o)};return l.a.createElement("div",{className:"recruit"},l.a.createElement("div",{className:"personnel"},l.a.createElement("h1",null,"\uc778\uc6d0"),"\uc81c\ud55c \uc5c6\uc74c",l.a.createElement("input",{type:"checkbox",onClick:function(){return p("personnel")}}),!1===a&&l.a.createElement("input",{type:"range",min:"0",max:"50"})),l.a.createElement("div",{className:"metting_date"},l.a.createElement("h1",null,"\ubaa8\uc784\ub0a0\uc9dc"),"\ubbf8\uc815",l.a.createElement("input",{type:"checkbox",onClick:function(){return p("mettingDate")}}),!1===o&&l.a.createElement("input",{type:"date",placeholder:"\uc5f0\ub3c4-\uc6d4-\uc77c"})))},D=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(""),i=Object(m.a)(c,2),r=i[0],o=i[1];return l.a.createElement("div",{className:"writing"},l.a.createElement("div",{className:"writing_title"},l.a.createElement("h1",null,"\uc81c\ubaa9"),l.a.createElement("input",{type:"text",placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"})),l.a.createElement("div",{className:"writing_desc"},l.a.createElement("h1",null,"\uc124\uba85"),l.a.createElement("textarea",{type:"text",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"})),l.a.createElement("div",{className:"thumbnail"},l.a.createElement("h1",null,"\uc378\ub124\uc77c \uc774\ubbf8\uc9c0 (\uc120\ud0dd)"),l.a.createElement("input",{type:"file",accept:"image/jpg,impge/png,image/jpeg,image/gif",name:"profile_img",onChange:function(e){e.preventDefault();var t=new FileReader,n=e.target.files[0];t.onloadend=function(){a(n),o(t.result)},t.readAsDataURL(n)}}),""===r?"":l.a.createElement("img",{className:"profile_preview",src:r,alt:"thumbnail"})),l.a.createElement("div",{className:"submit_button"},l.a.createElement("button",null,"\ub4f1\ub85d")))},A=function(){return l.a.createElement("div",{className:"crewCreate"},l.a.createElement(C,null),l.a.createElement(S,null),l.a.createElement(U,null),l.a.createElement(D,null))},F=function(){return l.a.createElement("div",{className:"content"},l.a.createElement(A,null))},H=Object(o.e)((function(e){var t=e.children,a=e.location.pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[a]),t}));a(56);var I=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(r.a,null,l.a.createElement(H,null,l.a.createElement(s,null),l.a.createElement(o.a,{onUpdate:function(){return window.scrollTo(0,0)},exact:!0,path:"/",component:v}),l.a.createElement(o.a,{onUpdate:function(){return window.scrollTo(0,0)},path:"/login/",component:f}),l.a.createElement(o.a,{onUpdate:function(){return window.scrollTo(0,0)},path:"/signup",component:y}),l.a.createElement(o.a,{onUpdate:function(){return window.scrollTo(0,0)},path:"/crewcategory",component:O}),l.a.createElement(o.a,{onUpdate:function(){return window.scrollTo(0,0)},path:"/crewfind",component:N}),l.a.createElement(o.a,{onUpdate:function(){return window.scrollTo(0,0)},path:"/crewdetail",component:L}),l.a.createElement(o.a,{onUpdate:function(){return window.scrollTo(0,0)},path:"/crewcreate",component:F}),l.a.createElement(p,null))))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.d68a3215.chunk.js.map