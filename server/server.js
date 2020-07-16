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

app.use('/api/test', (req, res)=> res.json({username:'bryan'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})