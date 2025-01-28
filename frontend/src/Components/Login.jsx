import React from "react";
import { FcGoogle } from "react-icons/fc";
import './Login.css';

const Login=()=>{

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
                        <span id="emailfield"><input type="text" id="inp_email" placeholder="Email"></input></span>
                    </div>
                    <div className="password_field">
                        <span id="passwordfield"><input type="password" id="inp_passw" placeholder="password"></input></span>
                    </div>
                    <div className="signup_btn">
                        <button id="btnsignup">Log In</button>
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