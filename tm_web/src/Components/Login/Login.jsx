import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export const Login = () => {

  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {

    // Dummy credentials (change later with backend)
    const validEmail = "admin@gmail.com";
    const validPassword = "1234";

    if (email === validEmail && password === validPassword) {
      navigate("/home");   // 🔥 Redirect to Home
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>

        {action === 'Login' ? null :
          <div className='input'>
            <input type='text' placeholder='Name' />
          </div>
        }

        <div className='input'>
          <input
            type='email'
            placeholder='Email Id'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='input'>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

      </div>

      {action === 'Sign Up' ? null :
        <div className='forgot-password'>
          <span>Forgot Password?</span>
        </div>
      }

      <div className='submit-container'>

        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>

        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={action === "Login" ? handleLogin : () => setAction("Login")}
        >
          Login
        </div>

      </div>
    </div>
  )
}
