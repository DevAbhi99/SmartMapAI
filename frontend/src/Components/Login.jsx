import React, {useState} from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import './Login.css';
import { useNavigate } from "react-router-dom";


const Login=()=>{

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate=useNavigate();

const handleSubmit=()=>{

if(!email||!password){
    alert("Fill in details");
}
else{
    navigate("/main");
}

const userData={email:email, password:password};

axios.post('http://localhost:4000/login',userData)
.then(response=>{
    console.log(response.data);
})
.catch(error=>{
    console.log(`Error occurred due to ${error}`);
})


}


return (
    <>
    <div className="mainpage">
    
            <div className="signup_main">
    
                <div className="signup_title">
                    <span id="signup_title1">Log In to your Account</span>
                    <span id="login_title2">Welcome back! Please enter your details</span>
                </div>
    
                <div className="login_form">
                    <div className="email_field">
                        <span id="emailfield"><input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="inp_email" placeholder="Email"></input></span>
                    </div>
                    <div className="password_field">
                        <span id="passwordfield"><input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="inp_passw" placeholder="password"></input></span>
                    </div>
                    <div className="signup_btn">
                        <button id="btnsignup" onClick={handleSubmit} >Log In</button>
                    </div>
    
                    <div className="ortext">Or</div>
                 
                    <div className="googlesignup_btn">
                        <button id="btnsignupgoogle"><span id="googleicon"><FcGoogle/></span><span id="signup_googletext">Log In with Google</span></button>
                    </div>
    
                    <div className="loginalreadymaintext"><span id="alreadytext">Dont have an account?</span><a href="http://localhost:3000/signup"><button id="logtext">Sign Up</button></a></div>
    
                </div>
    
            </div>
    
            <img id="mapicon_image" src="/mapicon.png"/>
    
            </div>
    </>
)

}

export default Login;