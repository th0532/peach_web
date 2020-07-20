const fs = require('fs');
const express = require('express');
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
    console.log(query)
    connection.query(query, (err, rows, fields) => {
            res.json({mapAll:rows});
        }
    )
});

// 메인 NEW 데이터 
app.use('/api/main/crewdata/New', (req, res) => {
    connection.query(
        'SELECT * FROM `crewdata` order by date desc LIMIT 5',
        (err, rows, fields) => {
            res.json({crewDataNew:rows});
        }
    )
});
// 추후에 조회수로 바꾸기
app.use('/api/main/crewdata/Hot', (req, res) => {
    connection.query(
        'SELECT * FROM `crewdata` order by date asc LIMIT 5',
        (err, rows, fields) => {
            res.json({crewDataHot:rows});
        }
    )
});


// crewFind 페이지 카테고리별 데이터
app.use('/api/crewfind/crewdata', (req, res)=> {
    const query = 
    "SELECT * FROM crewdata WHERE category ='Adventure';"+
    "SELECT * FROM crewdata WHERE category ='Health';"+
    "SELECT * FROM crewdata WHERE category ='Social';"+
    "SELECT * FROM crewdata WHERE category ='Tech';"+
    "SELECT * FROM crewdata WHERE category ='Art';";                 
      connection.query(query, function(err,rows){
            res.json({crewdata:rows});
        }
    )
});

// crewCategory 카테고리별 페이지
app.use('/api/crewcategory:category', (req, res)=> {
    let category = req.params.category;
    let query = "SELECT * FROM crewdata WHERE category ='"+category+"';"
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


app.use('/api/test', (req, res)=> res.json({username:'bryan'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})