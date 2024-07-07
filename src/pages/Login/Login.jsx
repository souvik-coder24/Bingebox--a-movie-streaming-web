import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Login.css';
import logo from '../../assets/login-logo.png';

function Login() {
  const [signState, setSignState] = useState("LogIn");

  return (
    <div className='login'>
      <div className="login-form">
        <motion.img 
          src={logo} 
          alt="logo" 
          className='login-logo'
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            scale: {
              repeat: Infinity,
              duration: 1.6,
              ease: "easeInOut"
            }
          }}
        />
        <h1>{signState}</h1>
        <form action="">
          {signState === "Sign Up" ? <input type="text" placeholder='Your Name'/> : null}
          <input type="email" placeholder='Enter your email'/>
          <input type="password" placeholder='Enter your Password'/>
          <button>{signState}</button>
          {/* Conditional rendering of Forgot Password link */}
          {signState === "LogIn" && (
            <div className="forgot">
              <a href="#">Forgot Password?</a>
            </div>
          )}
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "LogIn" ? (
            <p>New to BingeBox? <span onClick={() => setSignState("Sign Up")}>Register Now</span></p>
          ) : (
            <p>Already Registered? <span onClick={() => setSignState("LogIn")}>Log-In Now</span></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
