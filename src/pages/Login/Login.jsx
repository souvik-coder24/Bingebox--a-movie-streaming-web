import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Login.css';
import logo from '../../assets/login-logo.png';
import { login, signup } from '../../firebase';

function Login() {
  const [signState, setSignState] = useState("LogIn");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    try {
      if (signState === "LogIn") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

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
        <form onSubmit={user_auth}>
          {signState === "Sign Up" ? <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name'/> : null}
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email'/>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your Password'/>
          <button type='submit'>{signState}</button>
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
