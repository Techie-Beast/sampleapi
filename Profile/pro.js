const express = require('express');
const mysql = require('mysql')
const app = express();
const bodyparser= require('body-parser')

//Connection 

app.use(bodyparser.json());

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password@2019",
    database : "profile"
});



//connect db 
db.connect((err) =>{
    if(err){
    throw err;
    console.log('Error Occured');
    }else {
        console.log('Database Connected Successfully ...!!');    
    }
});

//for inserting the values into the database and Signup for
        app.post('/insert',(req,res) =>{
            console.log(JSON.stringify(req.body));
            let sql = `insert into users set ?`;
            let query = db.query(sql,(err,result) => {
            if(err){
             console.log('Error Occurred');
                throw err;               
            }else{
                console.log('Values Inserted');
                res.send('Registered Successfully')
            }
       })
        });

    
        //get the data from the database for sign in

        app.get('/get',(req,res)=>{
            let sql = `select *from users`;
            let query = db.query(sql,(err,result)=>{
                if(err){
                    console.log('Error..!!!');
                    throw err;
                }else{
                    console.log('Values Fetched Successfully ...!!');
                    res.send(result)                    
                }
            })
        });


        //To update the data
        app.get('/update',(req,res) =>{
            console.log(JSON.stringify(req.id));            
            let sql = `update users set ? where id=${id}`;
            let query =db.query(sql,(err,result) =>{
                if(err){
                    console.log('Error Occured..!!')
                    throw err;
                }else{
                    console.log('Values Fetched !!');
                    res.send(result);                    
                }
            })
        })


    app.listen(2000,() =>{
        console.log('Sever started on port : 2000');
        
    });