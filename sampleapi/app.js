const express = require('express');
const mysql = require('mysql');
const app = express();

//connection
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password@2019",
    database :"sampledb"
});

//connect db
db.connect((err) =>{
    if(err)
    throw err;
    else 
    console.log('Database connected');
    
});

app.get('/db',(req,res) =>{
    let sql = `create database sampledb`;
    let query = db.query(sql,(err,result) =>{
        if(err)
        throw err;
        else 
        console.log(result);
        res.send('New Database created Successfully');
        
    });
});

app.get('/table',(req,res) =>{
    let sql =`create table samapi(id int primary key unique auto_increment,name varchar(100),address varchar(100))`;
    let query = db.query(sql,(err,result) =>{
        if(err){
        throw err;
        console.log('SQL Error');
        }
        else
        console.log('Table created Naming samapi');
        
    });
});

app.get('/insert',(req,res) => {
    let values = {name:"Vipin", address: "Ballabhgarh"}
    let sql = `insert into samapi set ?`
    let query = db.query(sql,values,(err,result) =>{
        if(err){
            throw err;
            console.log('Incorrect Input');
        }else{
            console.log(result);
            res.send('Values Inserted Successfully...')
        }
    });
});

app.get('/get',(req,res) =>{
    let sql = `select *from samapi`;
    let query = db.query(sql,(err,result) =>{
        if (err)
        throw err;
        else 
        console.log(result);
        res.send("Data Fetched")
    });      
});


app.listen(1000,() => {
    console.log('Server Started at port 1000..'); 
});