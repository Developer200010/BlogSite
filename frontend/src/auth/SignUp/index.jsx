import React, { useState } from "react";
import "./index.css";
import axios from "axios";
const SignUp = () => {
  const[username, setUsername] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState(false);
  const handleSubmit = async (e) =>{
    try {
      e.preventDefault();
      setError(false)
      const res = await axios.post("/api/auth/register",{
        username,
        email,
        password
      });
      res.data && window.location.replace("/login")
    } catch (error) {
      setError(true);
    }
  
  }

  return (
    <>
      <div className="container1">
        <form class="form" onSubmit={handleSubmit}>
          <p class="form-title">Sign Up to your account</p>
          {error && <span className="text-red-600">something went wrong!</span>}
          <div class="input-container">
            <input type="text" placeholder="Enter Username"
            onChange={e=> setUsername(e.target.value)}
            />
            <span></span>
          </div>
          <div class="input-container">
            <input type="email" placeholder="Enter email" 
            onChange={e=> setEmail(e.target.value)}
            />
          </div>
          <div class="input-container">
            <input type="password" placeholder="Enter password"
            onChange={e=> setPassword(e.target.value)}
            />
          </div>
          <button type="submit" class="submit">
            Sign Up
          </button>

          <p class="signup-link">
            <a href="/login">Sign In</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
