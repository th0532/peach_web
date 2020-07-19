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
    let query = 
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
app.use('/api/crewcategory/Adventure', (req, res)=> {
    let query = "SELECT * FROM crewdata WHERE category ='Adventure';"
      connection.query(query, function(err,rows){
            res.json({crewdata:rows});
        }
    )
});

app.use('/api/crewcategory/Health', (req, res)=> {
    let query = "SELECT * FROM crewdata WHERE category ='Health';"
      connection.query(query, function(err,rows){
            res.json({crewdata:rows});
        }
    )
});

app.use('/api/crewcategory/Social', (req, res)=> {
    let query = "SELECT * FROM crewdata WHERE category ='Social';"
      connection.query(query, function(err,rows){
            res.json({crewdata:rows});
        }
    )
});

app.use('/api/crewcategory/Tech', (req, res)=> {
    let query = "SELECT * FROM crewdata WHERE category ='Tech';"
      connection.query(query, function(err,rows){
            res.json({crewdata:rows});
        }
    )
});

app.use('/api/crewcategory/Art', (req, res)=> {
    let query = "SELECT * FROM crewdata WHERE category ='Art';"
      connection.query(query, function(err,rows){
            res.json({crewdata:rows});
        }
    )
});

app.use('/api/test', (req, res)=> res.json({username:'bryan'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})