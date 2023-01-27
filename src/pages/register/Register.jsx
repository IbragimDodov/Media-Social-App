
import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom"

import './register.css'

export default function Register() {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  let navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!")
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post("/auth/register", user);
        navigate("/login")
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media App</h3>
          <span className="loginDesc">Connect with friends and the world around you on Social Media App</span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleClick} className="loginBox">
            <input ref={username} required placeholder='Username' className="loginInput" />
            <input ref={email} type="email" required placeholder='Email' className="loginInput" />
            <input ref={password} type="password" required placeholder='Password' minLength="6" className="loginInput" />
            <input ref={passwordAgain} type="password" required placeholder='Password Again' className="loginInput" />
            <button type='submit' className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}
