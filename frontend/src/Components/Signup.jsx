import React from "react";
import './Signup.css';
import { FcGoogle } from "react-icons/fc";


const Signup=()=>{
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
                    <span id="fname"><input type="text" id="inp_fname" placeholder="firstname..."></input></span>
                    <span id="lname"><input type="text" id="inp_lname" placeholder="lastname..."></input></span>
                </div>
                <div className="email_field">
                    <span id="emailfield"><input type="text" id="inp_email" placeholder="Email"></input></span>
                </div>
                <div className="ph_field">
                    <span id="phfield"><input type="text" id="inp_ph" placeholder="Phone number"></input></span>
                </div>
                <div className="password_field">
                    <span id="passwordfield"><input type="password" id="inp_passw" placeholder="password"></input></span>
                </div>
                <div className="signup_btn">
                    <button id="btnsignup">Sign Up</button>
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
