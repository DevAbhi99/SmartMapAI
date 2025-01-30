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

  app.post('/signup', (req,res)=>{

   const {firstname, lastname, email, phonenumber, password}=req.body;

  if(!firstname||!lastname||!email||!phonenumber||!password){
    res.status(400).send("Data should not be empty!");
  }


   const query="insert into signup(firstname, lastname, email, phonenumber, password) values(?,?,?,?,?);";

   connection.query(query, [firstname,lastname,email,phonenumber,password], (error,results)=>{
         if(error){
          //res.status(500).send("Could not enter data");
          console.log(`${error} error occurred`);
         }

        // results.json({message:"data sent"});
          console.log("successfully inserted!");
  })
});


//login logic

app.post('/login', (req,res)=>{

  const {email, password}=req.body;

  if(!email||!password){
    res.send("Please insert details!");
  }

  const query="select email, password from signup where email=? and password=?;";

  connection.query(query,[email,password], (error,result)=>{
    if(error){
      console.log(`error ${error} occured`);
    }

    if(result.length>0){
      res.status(200).send("validated successfully");
    }
    else{
      res.status(401).send("could not validate successfully");
    }
  })
})



app.use('/',(req,res)=>{
    res.send('Listening on port 4000');
})

const port=4000;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

