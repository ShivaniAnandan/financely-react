import React, { useState } from "react";
import { auth, provider, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Header from "./Header";

const SignUpSignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);


  



  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="signup-signin-container">
        <label>Full Name</label>
      <input className="input-wrapper" type="text" placeholder="Enter your name" />
      <label>Email</label>
      <input className="input-wrapper" type="email" placeholder="Enter your Email" />
      <label>Password</label>
      <input className="input-wrapper" type="password" placeholder="Enter your password" />
      <label>Confirm Password</label><br/>
      <input className="input-wrapper" type="text" placeholder="Enter your password" />
      <button className="btn">Sign up with Email and Password</button>
      <p className="choice">or</p>
      <button className="btn">Sign up with Google</button>
      </div>
       
      </div>
       
    </>
  );
};

export default SignUpSignIn;