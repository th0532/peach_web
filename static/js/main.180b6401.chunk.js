(this.webpackJsonppeach_web=this.webpackJsonppeach_web||[]).push([[0],{15:function(e,t,a){},30:function(e,t,a){e.exports=a(57)},35:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(26),i=a.n(l),r=(a(35),a(4)),o=a(2),m=a(3),s=(a(36),function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),l=a[0],i=a[1],o=Object(n.useState)(!1),s=Object(m.a)(o,2),p=s[0],d=s[1],u=Object(n.useState)(!1),g=Object(m.a)(u,2),_=g[0],E=g[1],h=Object(n.useState)(!1),b=Object(m.a)(h,2),v=b[0],w=b[1],f=function(e){"naviToggle1"===e?(i(!0),d(!1),E(!1),w(!1)):"naviToggle2"===e?(i(!1),d(!0),E(!1),w(!1)):"naviToggle3"===e?(i(!1),d(!1),E(!0),w(!1)):"naviToggle4"===e&&(i(!1),d(!1),E(!1),w(!0))};return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"top"},c.a.createElement("div",{className:"logo"},c.a.createElement(r.b,{to:"/",onClick:function(){return f("naviToggle1")}},"Peach")),c.a.createElement("div",{className:"navigation"},c.a.createElement("div",{className:"pc_navigation"},c.a.createElement("ul",null,c.a.createElement("li",{className:l&&"navi_click"},c.a.createElement(r.b,{to:"/",onClick:function(){return f("naviToggle1")}},"Home")),c.a.createElement("li",{className:p&&"navi_click"},c.a.createElement(r.b,{to:"/crewfind",onClick:function(){return f("naviToggle2")}},"\ubaa8\uc784\ud0d0\uc0c9")),c.a.createElement("li",{className:_&&"navi_click"},c.a.createElement(r.b,{to:"/crewcreate",onClick:function(){return f("naviToggle3")}},"\ubaa8\uc784\ub9cc\ub4e4\uae30")),c.a.createElement("li",{className:v&&"navi_click"},c.a.createElement(r.b,{to:"/login",onClick:function(){return f("naviToggle4")}},"\ub85c\uadf8\uc778")))))))}),p=(a(41),function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),l=a[0],i=a[1],o=Object(n.useState)(!1),s=Object(m.a)(o,2),p=s[0],d=s[1],u=Object(n.useState)(!1),g=Object(m.a)(u,2),_=g[0],E=g[1],h=Object(n.useState)(!1),b=Object(m.a)(h,2),v=b[0],w=b[1],f=function(e){"naviToggle1"===e?(i(!0),d(!1),E(!1),w(!1)):"naviToggle2"===e?(i(!1),d(!0),E(!1),w(!1)):"naviToggle3"===e?(i(!1),d(!1),E(!0),w(!1)):"naviToggle4"===e&&(i(!1),d(!1),E(!1),w(!0))};return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"pc_footer"},c.a.createElement("div",{className:"copyright"},c.a.createElement("p",null,"\xa9 2020 LeeTaeHee, Inc. All rights reserved")),c.a.createElement("div",{className:"sitemap"},c.a.createElement("ul",null,c.a.createElement("li",null,"\uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68"),c.a.createElement("li",null,"\uc774\uc6a9\uc57d\uad00"),c.a.createElement("li",null,"\uc0ac\uc774\ud2b8\ub9f5"),c.a.createElement("li",null,"\ud658\ubd88\uc815\ucc45"))),c.a.createElement("div",{className:"SNS"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(r.b,{to:"#"},c.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_960_720.png",width:"30px",height:"30px",alt:"facebook"}))),c.a.createElement("li",null,c.a.createElement(r.b,{to:"#"},c.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_960_720.png",width:"30px",height:"30px",alt:"instagram"}))),c.a.createElement("li",null,c.a.createElement(r.b,{to:"#"},c.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_960_720.png",width:"30px",height:"30px",alt:"youtube"})))))),c.a.createElement("div",{className:"mob_menu"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(r.b,{to:"/",className:l&&"mobile_navi_click",onClick:function(){return f("naviToggle1")}},"Home")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"/crewFind",className:p&&"mobile_navi_click",onClick:function(){return f("naviToggle2")}},"\ubaa8\uc784\ud0d0\uc0c9")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"/crewCreate",className:_&&"mobile_navi_click",onClick:function(){return f("naviToggle3")}},"\ubaa8\uc784\ub9cc\ub4e4\uae30")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"/login",className:v&&"mobile_navi_click",onClick:function(){return f("naviToggle4")}},"\ub85c\uadf8\uc778")))))}),d=a(13);a(51);function u(){window.naver.maps;var e=[{area:"\uac15\ub0a8\uad6c",crewCount:"42",lat:"37.6658609",lng:"127.0317674"},{area:"\uac15\ub3d9\uad6c",crewCount:"22",lat:"37.6176125",lng:"126.9227004"},{area:"\uac15\ubd81\uad6c",crewCount:"35",lat:"37.5838012",lng:"127.0507003"},{area:"\uac15\uc11c\uad6c",crewCount:"21",lat:"37.4965037",lng:"126.9443073"},{area:"\uad00\uc545\uad6c",crewCount:"46",lat:"37.4600969",lng:"126.9001546"},{area:"\uad11\uc9c4\uad6c",crewCount:"33",lat:"37.4954856",lng:"126.858121"},{area:"\uad6c\ub85c\uad6c",crewCount:"26",lat:"37.5990998",lng:"126.9861493"},{area:"\uae08\ucc9c\uad6c",crewCount:"31",lat:"37.6469954",lng:"127.0147158"},{area:"\ub178\uc6d0\uad6c",crewCount:"18",lat:"37.5953795",lng:"127.0939669"},{area:"\ub3c4\ubd09\uad6c",crewCount:"26",lat:"37.4959854",lng:"127.0664091"},{area:"\ub3d9\ub300\ubb38\uad6c",crewCount:"38",lat:"37.5657617",lng:"126.8226561"},{area:"\ub3d9\uc791\uad6c",crewCount:"37",lat:"37.5579452",lng:"126.9941904"},{area:"\ub9c8\ud3ec\uad6c",crewCount:"54",lat:"37.5492077",lng:"127.1464824"},{area:"\uc11c\ub300\ubb38\uad6c",crewCount:"21",lat:"37.5481445",lng:"127.0857528"},{area:"\uc11c\ucd08\uad6c",crewCount:"24",lat:"37.5622906",lng:"126.9087803"},{area:"\uc131\ub3d9\uad6c",crewCount:"19",lat:"37.4769528",lng:"127.0378103"},{area:"\uc131\ubd81\uad6c",crewCount:"17",lat:"37.606991",lng:"127.0232185"},{area:"\uc1a1\ud30c\uad6c",crewCount:"32",lat:"37.655264",lng:"127.0771201"},{area:"\uc591\ucc9c\uad6c",crewCount:"16",lat:"37.5048534",lng:"127.1144822"},{area:"\uc601\ub4f1\ud3ec\uad6c",crewCount:"24",lat:"37.5820369",lng:"126.9356665"},{area:"\uc6a9\uc0b0\uad6c",crewCount:"27",lat:"37.5270616",lng:"126.8561534"},{area:"\uc740\ud3c9\uad6c",crewCount:"32",lat:"37.520641",lng:"126.9139242"},{area:"\uc885\ub85c\uad6c",crewCount:"36",lat:"37.4653993",lng:"126.9438071"},{area:"\uc911\uad6c",crewCount:"21",lat:"37.5506753",lng:"127.0409622"},{area:"\uc911\ub791\uad6c",crewCount:"33",lat:"37.5311008",lng:"126.9810742"}],t=Object(n.useState)(!1),a=Object(m.a)(t,2),l=a[0],i=a[1],r=Object(n.useState)("map_selected"),o=Object(m.a)(r,2),s=o[0],p=o[1],u=Object(n.useState)("list_notSelected"),g=Object(m.a)(u,2),_=g[0],E=g[1],h=Object(n.useState)(e[0].area),b=Object(m.a)(h,2),v=b[0],w=b[1],f=Object(n.useState)(e[0].crewCount),y=Object(m.a)(f,2),x=y[0],j=y[1],O=function(e){"map"===e?(i(!1),p("map_selected"),E("list_notSelected")):(i(!0),p("map_notSelected"),E("list_selected"))};return c.a.createElement(d.b,{mapDivId:"maps-getting-started-uncontrolled",style:{width:"100%",height:"100%"},defaultCenter:{lat:37.562528,lng:126.970833},defaultZoom:11,zoomControl:!0,scrollWheel:!1},e.map((function(e,t){return c.a.createElement(d.a,{key:t,position:{lat:e.lat,lng:e.lng},animation:2,onClick:function(){!function(e,t){alert(e+" \uac1c\uc124\ud604\ud669 : "+t)}(e.area,e.crewCount)}})})),c.a.createElement("div",{className:"display_type"},c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){return O("map")},className:s},"Map"),c.a.createElement("li",{onClick:function(){return O("list")},className:_},"List"))),!0===l?c.a.createElement("div",{className:"map_table_wrap"},c.a.createElement("div",{className:"map_table"},c.a.createElement("h1",null,"\uad00\uce21\ub9dd \ud604\ud669"),c.a.createElement("ul",null,e.map((function(e,t){return c.a.createElement("li",{key:t,onClick:function(){return function(e,t){w(e),j(t)}(e.area,e.crewCount)}},e.area)})),c.a.createElement("li",null),c.a.createElement("li",null),c.a.createElement("li",null))),c.a.createElement("div",{className:"map_info"},c.a.createElement("span",{className:"area_color"}," ",v)," ",c.a.createElement("span",null,"\ubaa8\uc784 \uac1c\uc124 \uc218 : ",x," \uac1c"))):"")}var g=function(){return c.a.createElement("div",{className:"map"},c.a.createElement(d.c,{ncpClientId:"x81jfsrutc",error:c.a.createElement("p",null,"Maps Load Error"),loading:c.a.createElement("p",null,"\uc9c0\ub3c4\ub97c \ubd88\ub7ec\uc624\uace0 \uc788\uc2b5\ub2c8\ub2e4.")},c.a.createElement(u,null)))},_=(a(52),a(15),a(53),function(e){var t=e.listdata.path.path;return console.log(e),c.a.createElement("div",{className:"crewCard"},c.a.createElement("h1",{className:"category_title"},e.listdata.categoryTitle),c.a.createElement(r.b,{to:"/"===t?"/crewfind/":"/crewCategory/:"+e.listdata.categoryTitle},"/crewcategory"===t?"":c.a.createElement("span",{className:"category_more"},"more")),c.a.createElement("div",{className:"crewCard_item_wrap"},void 0!==e.listdata.listdata&&e.listdata.listdata.map((function(t,a){return c.a.createElement("div",{key:a,className:"crewCard_item"},c.a.createElement(r.b,{to:"/crewdetail/"+e.listdata.categoryTitle+"/"+t.list_index},c.a.createElement("div",{className:"crewCard_img"},c.a.createElement("img",{src:t.imgLink,alt:"crewCard_img"})),c.a.createElement("div",{className:"crewCard_desc"},c.a.createElement("dl",null,c.a.createElement("dt",null,t.desc_title),c.a.createElement("dd",null,t.desc_content)))))}))))}),E=function(e){return c.a.createElement("div",{className:"crew_category_item"},c.a.createElement("div",{className:"crew_list_wrap"},c.a.createElement(_,{path:e.path,listdata:e})))},h=function(e){var t={category1:[{imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2017/01/13/09/23/magic-cube-1976725__340.jpg",desc_title:"\ud050\ube0c \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c\uc788\ub098\uc694",desc_content:"\ud050\ube0c \uac19\uc774 \ud560\uc0ac\ub78c \uad6c\ud574\uc694",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2020/06/09/03/08/craft-5276736__340.jpg",desc_title:"\uac19\uc774 \ub9c8\ud3ec\uad6c \ub3c4\uc608\uc218\uc5c5 \ub4e4\uc744 \uc0ac\ub78c \uc788\uc744\uae4c\uc694",desc_content:"\ud1a0\uc694\uc77c \uc624\ud6c4 \ub2e4\ub2d0 \uc0ac\ub78c \uad6c\ud569\ub2c8\ub2e4.",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2}],category2:[{imgLink:"https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2016/03/05/22/53/amateur-1239387__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2016/03/27/19/54/golf-1284011__340.jpg",desc_title:"\uace8\ud504 \uce58\ub7ec \uac08 \uc0ac\ub78c \uad6c\ud574\uc694",desc_content:"\uc77c\uc694\uc77c \uc624\uc804\uc5d0 \ucd9c\ubc1c\ud558\uc2e4\uc218 \uc788\ub294\uc0ac\ub78c \uad6c\ud569\ub2c8\ub2e4",list_index:2}]};return c.a.createElement("div",{className:"crewFind"},c.a.createElement("div",{className:"crew_wrap"},c.a.createElement(E,{path:e.path,categoryTitle:"NEW",listdata:t.category1}),c.a.createElement(E,{path:e.path,categoryTitle:"HOT",listdata:t.category2})))},b=function(e){return c.a.createElement("div",{className:"content"},c.a.createElement(g,null),c.a.createElement(h,{path:e.path}))},v=function(e){var t=e.match;return c.a.createElement("div",null,c.a.createElement(b,{path:t}))},w=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"login"))},f=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"SignUp"))},y=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),l=a[0],i=a[1];console.log(l);return c.a.createElement("div",{className:"crew_category_item"},c.a.createElement("div",{className:"crew_category"},c.a.createElement("h1",null,"\uc9c0\uc5ed"),c.a.createElement("select",{onChange:function(){i(!0)}},c.a.createElement("option",null,"\uc9c0\uc5ed\uc120\ud0dd"),c.a.createElement("option",null,"\uc11c\uc6b8"),c.a.createElement("option",null,"\uacbd\uae30"),c.a.createElement("option",null,"\uc778\ucc9c"),c.a.createElement("option",null,"\ub300\uc804")),!0===l?c.a.createElement("div",{className:"area2"},c.a.createElement("h1",null,"\uc9c0\uc5ed 2"),c.a.createElement("select",null,c.a.createElement("option",null,"\uc885\ub85c\uad6c"),c.a.createElement("option",null,"\ub9c8\ud3ec\uad6c"),c.a.createElement("option",null,"\ub3d9\uc791\uad6c"))):""),c.a.createElement("div",{className:"crew_list_wrap"},c.a.createElement(_,{listdata:e})))},x=function(e){return c.a.createElement("div",{className:"crewFind"},c.a.createElement("div",{className:"crew_wrap"},c.a.createElement(y,{path:e.path,categoryTitle:"Adventure",listdata:[{imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2}]})))},j=function(e){var t=e.match;return c.a.createElement("div",{className:"content"},c.a.createElement(x,{path:t}))},O=function(e){return c.a.createElement("div",{className:"crew_category_item"},c.a.createElement("div",{className:"crew_list_wrap"},c.a.createElement(_,{path:e.path,listdata:e})))},k=function(e){var t={category1:[{imgLink:"https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989__340.jpg",desc_title:"\uce74\ub204 \ubaa8\uc784",desc_content:"\uce74\ub204 \uc990\uaca8\ud0c0\ub294 \uc0ac\ub78c \uc788\ub098\uc694",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2016/11/29/09/49/adventure-1868817__340.jpg",desc_title:"\uc5ec\ud589 \uac08 \uc0ac\ub78c",desc_content:"7\uc6d4 21\uc77c \uc5ec\ud589 \uac08 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2016/08/14/18/27/sailing-boat-1593613__340.jpg",desc_title:"\uc694\ud2b8 \ud328\ud0a4\uc9c0 \uc5ec\ud589 \uac08\uc0ac\ub78c \uad6c\ud574\uc694",desc_content:"\ud328\ud0a4\uc9c0 \uc5ec\ud589 \uac08 \uc0ac\ub78c \uad6c\ud569\ub2c8\ub2e4",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2014/09/21/17/56/wanderer-455338__340.jpg",desc_title:"\ub4f1\uc0b0 \ubaa8\uc784 \uad6c\ud569\ub2c8\ub2e4",desc_content:"\ub4f1\uc0b0 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud574\uc694",list_index:2}],category2:[{imgLink:"https://cdn.pixabay.com/photo/2017/08/02/20/24/people-2573216__340.jpg",desc_title:"\uc694\uac00 \ub2e4\ub2d0 \uc0ac\ub78c",desc_content:"\uac19\uc774 \ub3c4\ubd09\uad6c\uc5d0\uc11c \uc694\uac00 \ub2e4\ub2d0\uc0ac\ub78c \uc788\ub098\uc694",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149__340.jpg",desc_title:"\ud5ec\uc2a4 \uafb8\uc900\ud788 \uac19\uc774 \ud560\uc0ac\ub78c \uad6c\ud574\uc694",desc_content:"\ud5ec\uc2a4 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2}],category3:[{imgLink:"https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2016/03/27/19/54/golf-1284011__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2016/06/28/01/42/chess-1483735__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2015/04/20/17/38/photography-731891__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2}],category4:[{imgLink:"https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2016/03/05/22/53/amateur-1239387__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2}],category5:[{imgLink:"https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2016/03/05/22/53/amateur-1239387__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2},{imgLink:"https://cdn.pixabay.com/photo/2016/08/19/14/45/books-1605416__340.jpg",desc_title:"\uc2a4\ud130\ub514 \ubaa8\uc784",desc_content:"\ub9e4\uc8fc \ubaa9\uc694\uc77c 7\uc2dc OOO \uc2a4\ud130\ub514 \ud560\uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4.",list_index:1},{imgLink:"https://cdn.pixabay.com/photo/2019/12/29/15/45/paragliding-4727377__340.jpg",desc_title:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \ud558\ub7ec \uac08 \uc0ac\ub78c~",desc_content:"\ud328\ub7ec \uae00\ub77c\uc774\ub529 \uad00\uc2ec\uc788\ub294 \uc0ac\ub78c \ubaa8\uc9d1\ud569\ub2c8\ub2e4~",list_index:2}]};return c.a.createElement("div",{className:"crewFind"},c.a.createElement("div",{className:"crew_wrap"},c.a.createElement(O,{path:e.path,categoryTitle:"Adventure",listdata:t.category1}),c.a.createElement(O,{path:e.path,categoryTitle:"Health",listdata:t.category2}),c.a.createElement(O,{path:e.path,categoryTitle:"Social",listdata:t.category3}),c.a.createElement(O,{path:e.path,categoryTitle:"Tech",listdata:t.category4}),c.a.createElement(O,{path:e.path,categoryTitle:"Art",listdata:t.category5})))},N=function(e){var t=e.match;return c.a.createElement("div",{className:"content"},c.a.createElement(k,{path:t}))},C=(a(54),function(e){return c.a.createElement("div",{className:"crewDetail"},c.a.createElement("div",{className:"crewDetail_wrap"},c.a.createElement("h1",null,"crew \uac8c\uc2dc\uae00 \uc0c1\uc138 \ud398\uc774\uc9c0 \uc900\ube44\uc911 \uc785\ub2c8\ub2e4")))}),T=function(e){var t=e.match;return c.a.createElement("div",{className:"content"},c.a.createElement(C,{path:t}))},L=(a(55),function(){return c.a.createElement("div",{className:"category"},c.a.createElement("h1",null,"\ubd84\uc57c"),c.a.createElement("select",null,c.a.createElement("option",null,"1\ucc28\uc120\ud0dd"),c.a.createElement("option",null,"1\ucc28\uc120\ud0dd_1")),c.a.createElement("select",null,c.a.createElement("option",null,"2\ucc28\uc120\ud0dd"),c.a.createElement("option",null,"2\ucc28\uc120\ud0dd_1")))}),S=function(){return c.a.createElement("div",{className:"area"},c.a.createElement("h1",null,"\uc9c0\uc5ed"),c.a.createElement("select",null,c.a.createElement("option",null,"1\ucc28\uc120\ud0dd"),c.a.createElement("option",null,"1\ucc28\uc120\ud0dd_1")),c.a.createElement("select",null,c.a.createElement("option",null,"2\ucc28\uc120\ud0dd"),c.a.createElement("option",null,"2\ucc28\uc120\ud0dd_1")),c.a.createElement("select",null,c.a.createElement("option",null,"3\ucc28\uc120\ud0dd"),c.a.createElement("option",null,"3\ucc28\uc120\ud0dd_1")))},U=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(!1),r=Object(m.a)(i,2),o=r[0],s=r[1],p=function(e){"personnel"===e?l(!a):"mettingDate"===e&&s(!o)};return c.a.createElement("div",{className:"recruit"},c.a.createElement("div",{className:"personnel"},c.a.createElement("h1",null,"\uc778\uc6d0"),"\uc81c\ud55c \uc5c6\uc74c",c.a.createElement("input",{type:"checkbox",onClick:function(){return p("personnel")}}),!1===a&&c.a.createElement("input",{type:"range",min:"0",max:"50"})),c.a.createElement("div",{className:"metting_date"},c.a.createElement("h1",null,"\ubaa8\uc784\ub0a0\uc9dc"),"\ubbf8\uc815",c.a.createElement("input",{type:"checkbox",onClick:function(){return p("mettingDate")}}),!1===o&&c.a.createElement("input",{type:"date",placeholder:"\uc5f0\ub3c4-\uc6d4-\uc77c"})))},D=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=(t[0],t[1]),l=Object(n.useState)(""),i=Object(m.a)(l,2),r=i[0],o=i[1];return c.a.createElement("div",{className:"writing"},c.a.createElement("div",{className:"writing_title"},c.a.createElement("h1",null,"\uc81c\ubaa9"),c.a.createElement("input",{type:"text",placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"})),c.a.createElement("div",{className:"writing_desc"},c.a.createElement("h1",null,"\uc124\uba85"),c.a.createElement("textarea",{type:"text",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"})),c.a.createElement("div",{className:"thumbnail"},c.a.createElement("h1",null,"\uc378\ub124\uc77c \uc774\ubbf8\uc9c0 (\uc120\ud0dd)"),c.a.createElement("input",{type:"file",accept:"image/jpg,impge/png,image/jpeg,image/gif",name:"profile_img",onChange:function(e){e.preventDefault();var t=new FileReader,n=e.target.files[0];t.onloadend=function(){a(n),o(t.result)},t.readAsDataURL(n)}}),""===r?"":c.a.createElement("img",{className:"profile_preview",src:r,alt:"thumbnail"})),c.a.createElement("div",{className:"submit_button"},c.a.createElement("button",null,"\ub4f1\ub85d")))},A=function(){return c.a.createElement("div",{className:"crewCreate"},c.a.createElement(L,null),c.a.createElement(S,null),c.a.createElement(U,null),c.a.createElement(D,null))},F=function(){return c.a.createElement("div",{className:"content"},c.a.createElement(A,null))},H=Object(o.e)((function(e){var t=e.children,a=e.location.pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[a]),t}));a(56);var I=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(r.a,null,c.a.createElement(H,null,c.a.createElement(s,null),c.a.createElement(o.a,{onUpdate:function(){return window.scrollTo(0,0)},exact:!0,path:"/",component:v}),c.a.createElement(o.a,{onUpdate:function(){return window.scrollTo(0,0)},path:"/login/",component:w}),c.a.createElement(o.a,{onUpdate:function(){return window.scrollTo(0,0)},path:"/signup",component:f}),c.a.createElement(o.a,{onUpdate:function(){return window.scrollTo(0,0)},path:"/crewcategory",component:j}),c.a.createElement(o.a,{onUpdate:function(){return window.scrollTo(0,0)},path:"/crewfind",component:N}),c.a.createElement(o.a,{onUpdate:function(){return window.scrollTo(0,0)},path:"/crewdetail",component:T}),c.a.createElement(o.a,{onUpdate:function(){return window.scrollTo(0,0)},path:"/crewcreate",component:F}),c.a.createElement(p,null))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.180b6401.chunk.js.map