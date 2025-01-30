import React, {useState} from "react";
import axios from "axios";
import './Signup.css';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Signup=()=>{


const [fname, setFname]=useState("");
const [lname, setLname]=useState("");
const [email, setEmail]=useState("");     
const [phno, setPhno]=useState("");
const [pass,setPass]=useState("");

const navigate=useNavigate();

console.log(fname);

const handleSubmit=()=>{

    
    if(!fname||!lname||!email||!phno||!pass){
        alert("Fields are empty!");
    }
    else{
        navigate("/main");
    }


    const userData={firstname:fname,lastname:lname,email:email,phonenumber:phno,password:pass};

  axios.post('http://localhost:4000/signup', userData)
  .then(response=>{
    console.log(response.data);
    //navigate('/main');
  })
  .catch(
    error=>{
        console.error(`${error} error occurred!`);
       // navigate("/main"); // Navigate even if there's an error
    }
  )
}

    return (
        <>
<div className="mainpage">

        <div className="signup_main">

            <div className="signup_title">
                <span id="signup_title1">Create an Account</span>
                <span id="signup_title2">Welcome! please login or signup to our page</span>
            </div>

            <div className="signup_form">
                <div className="name_fields">
                    <span id="fname"><input type="text" id="inp_fname" value={fname} onChange={(e)=>{setFname(e.target.value)}} placeholder="firstname..."></input></span>
                    <span id="lname"><input type="text" id="inp_lname" value={lname} onChange={(e)=>{setLname(e.target.value)}} placeholder="lastname..."></input></span>
                </div>
                <div className="email_field">
                    <span id="emailfield"><input type="text" id="inp_email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"></input></span>
                </div>
                <div className="ph_field">
                    <span id="phfield"><input type="text" id="inp_ph" value={phno} onChange={(e)=>{setPhno(e.target.value)}} placeholder="Phone number"></input></span>
                </div>
                <div className="password_field">
                    <span id="passwordfield"><input type="password" id="inp_passw" value={pass} onChange={(e)=>{setPass(e.target.value)}} placeholder="password"></input></span>
                </div>
                <div className="signup_btn">
                    <button id="btnsignup" onClick={handleSubmit}>Sign Up</button>
                </div>

                <div className="ortext">Or</div>
             
                <div className="googlesignup_btn">
                    <button id="btnsignupgoogle"><span id="googleicon"><FcGoogle/></span><span id="signup_googletext">Sign Up with Google</span></button>
                </div>

                <div className="alreadymaintext"><span id="alreadytext">Already have an account?</span><a href="http://localhost:3000/login"><button id="logtext">Login In</button></a></div>

            </div>

        </div>

        <img id="mapicon_image" src="/mapicon.png"/>

        </div>
        </>
    )
};

export default Signup;
