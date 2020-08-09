const fs = require('fs');
const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 5000;
var mysql_dbc = require('./config/db_con')();
var connection = mysql_dbc.init();
mysql_dbc.test_open(connection);

app.use(cors()); 
app.use(bodyParser.json());
// 맵 데이터
app.use('/api/main/map', (req, res) => {
    const query =   "select cd.area, count(map.area) as count, map.lat, map.lng"+
                    " from crewdata as cd"+
                    " Join mapinfo as map"+
                    " ON cd.area = map.area"+
                    " GROUP by cd.area;";
    connection.query(query, (err, rows, fields) => {
            res.json({mapAll:rows});
        }
    )
});

// 메인 NEW 데이터 
app.use('/api/main/crewdata/New', (req, res) => {
    connection.query(
        'SELECT * FROM `crewdata` order by num desc LIMIT 5',
        (err, rows, fields) => {
            res.json({crewDataNew:rows});
        }
    )
});
// 추후에 조회수로 바꾸기
app.use('/api/main/crewdata/Hot', (req, res) => {
    connection.query(
        'SELECT * FROM `crewdata` order by num asc LIMIT 5',
        (err, rows, fields) => {
            res.json({crewDataHot:rows});
        }
    )
});


// crewFind 페이지 카테고리별 데이터
app.use('/api/crewfind/crewdata', (req, res)=> {
    const query = 
    "SELECT * FROM crewdata WHERE category ='Adventure' order by num desc;"+
    "SELECT * FROM crewdata WHERE category ='Health' order by num desc;"+
    "SELECT * FROM crewdata WHERE category ='Social' order by num desc;"+
    "SELECT * FROM crewdata WHERE category ='Tech' order by num desc;"+
    "SELECT * FROM crewdata WHERE category ='Art' order by num desc;";                 
      connection.query(query, function(err,rows){
            res.json({crewdata:rows});
        }
    )
});

// crewCategory 카테고리별 페이지
app.use('/api/crewcategory:category', (req, res)=> {
    let category = req.params.category;
    let query = "SELECT * FROM crewdata WHERE category ='"+category+"' order by num desc;"
    connection.query(query, function(err,rows){
            res.json({crewdata:rows});
        }
    )
});

app.use('/api/crewdetail:categoryId', (req, res)=> {
    // params 2개 전달 받는법 추후 공부,,
    let arr = req.params.categoryId.split(":");
    let category = arr[0];
    let id = arr[1];
    
    let query = "SELECT * FROM crewdata WHERE category ='"+category+"'&&num='"+id+"'";

    connection.query(query, function(err,rows){
            res.json({crewdata:rows});
        }
    )
});
// 카테고리별 지역 데이터
app.use('/api/crewcategory/categoryAreaName:categoryAreaName', (req, res)=> {
    const arr = req.params.categoryAreaName.split(":");
    const category = arr[0];
    const area = arr[1];
    
    
    let query = "SELECT * FROM crewdata WHERE category ='"+category+"'&& area='"+area+"' order by num desc";
    if(area === "전체"){
        query = "SELECT * FROM crewdata WHERE category ='"+category+"' order by num desc";
    }
    connection.query(query, function(err,rows){
            res.json({crewdata:rows});
        }
    )
});



// 댓글 데이터
app.use('/api/crewdetail/comment:num', (req, res)=> {
    let num = req.params.num;
    
    let query = "SELECT * FROM `crew_comment` where postnum = '"+num+"'";
    connection.query(query, function(err,rows){
            res.json({comment:rows});
        }
    )
});

// 댓글 등록
app.post('/api/insert/crewdetail/comment', (req, res)=> {
   
    const num = req.query.num;
    const session_name = req.query.session_name;
    const session_id = req.query.session_id;
    const category = req.query.category;
    const time = req.query.time;
    const commentValue = req.query.commentValue;
    const query = "INSERT INTO `crew_comment`(`postnum`, `category`, `id`, `date`, `name`, `content`) VALUES "+ 
                    "("+num+",'"+category+"','"+session_id+"','"+time+"','"+session_name+"','"+commentValue+"')";

        connection.query(query, function(err,rows){
            res.json({comment:rows});
        }
    )
});


// 글 작성 (모임만들기)
app.post('/api/insert/crewcreate', (req, res)=> {
   
    const session_name = req.query.session_name;
    const session_id = req.query.session_id;
    const categoryValue = req.query.categoryValue;
    const areaValue = req.query.areaValue;
    const personnelValue = req.query.personnelValue;
    const titleValue = req.query.titleValue;
    const contentValue = req.query.contentValue;
    const imgValue = req.query.imgValue;
    const time = req.query.time;

    const query = "INSERT INTO `crewdata`(`num`, `id`, `title`, `content`, `category`, `name`, `date`, `personnel`, `img`, `area`)"+
                    "VALUES ('','"+session_id+"','"+titleValue+"','"+contentValue+"','"+categoryValue+"','"+session_name+"','"+time+"','"+personnelValue+"','"+imgValue+"','"+areaValue+"')";

    connection.query(query, function(err,rows){
            res.json({crewcreate:rows});
        }
    )
});

// 회원가입
app.post('/api/insert/signup', (req, res)=> {
   
    const name = req.query.name;
    const id = req.query.id;
    const pass = req.query.pass;
    const email = req.query.email;
    const birthday = req.query.birthday;
    const time = req.query.time;

    const query = "INSERT INTO `login`(`num`, `date`, `name`, `id`, `pass`, `email`,`birthday`) "+
                    "VALUES ('','"+time+"','"+name+"','"+id+"','"+pass+"','"+email+"','"+birthday+"')";
                    
    connection.query(query, function(err,rows){
            res.json({signup:rows});
        }
    )
});

// 로그인
app.post('/api/login', (req, res)=> {
   
    const id = req.query.id;
    const pass = req.query.pass;

    const query = "select * from login where id = '"+id+"' and pass ='"+pass+"'";
                    
    connection.query(query, function(err,rows){
            res.json({login:rows});
        }
    )
});

app.use('/api/test', (req, res)=> res.json({username:'bryan'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})