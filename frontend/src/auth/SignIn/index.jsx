import React, { useState } from "react";
import "./index.css";
import axios from "axios";
const SignIn = () => {
  const[email,setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[error, setError] = useState(false);
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/api/auth/login",{
        email,
        password,
      });
      res.data && window.location.replace("/user/home");
    } catch (error) {
      setError(true);
    }
  }
  return (
    <>
      <div className="container1">
        <form class="form" onSubmit={handleSubmit}>
          <p class="form-title">Sign In to your account</p>
          {error && <span className="text-red-500">Already have an account!.</span>}
          <div class="input-container">
            <input type="email" placeholder="Enter email" onChange={e=> setEmail(e.target.value)}/>
            <span></span>
          </div>
          <div class="input-container">
            <input type="password" placeholder="Enter password" onChange={e=> setPassword(e.target.value)} />
          </div>
          <button type="submit" class="submit">
            Sign in
          </button>

          <p class="signup-link">
            No account?
            <a href="/">Sign up</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
