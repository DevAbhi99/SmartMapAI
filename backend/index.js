const express=require('express');
const mysql2=require('mysql2');
const cors=require('cors');
const bodyparser=require('body-parser');
const app=express();

app.use(express.json());

app.use(bodyparser.urlencoded({encoded:false}));


app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
  }));

  //mysql connection setup

  const connection=mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'Trishala@99',
    database:'smartmapdatabase'
  });

  connection.connect((err)=>{
    if(err){
        console.log(`Could not connect to database due to ${err}`);
    }

    console.log('Successfully connected to database');
  })


  //Creating apis

app.use('/',(req,res)=>{
    res.send('Listening on port 4000');
})

const port=4000;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

