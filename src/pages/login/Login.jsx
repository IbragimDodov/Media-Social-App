import { useContext, useRef } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material"

import './login.css'

export default function Login() {

  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({email: email.current.value, password: password.current.value}, dispatch);
  }

  console.log(user)

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media App</h3>
          <span className="loginDesc">Connect with friends and the world around you on Social Media App</span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleClick} className="loginBox">
            <input
              ref={email}
              placeholder='Email'
              type="email"
              required
              className="loginInput" />
            <input
              ref={password}
              placeholder='Password'
              type="password"
              required
              minLength={6}
              className="loginInput" />
            <button disabled={isFetching} type="submit" className="loginButton">{ isFetching ? <CircularProgress size="20px" color="secondary" /> : "Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">{ isFetching ? <CircularProgress size="20px" color="secondary" /> : "Create a New Account"}</button>
          </form>
        </div>
      </div>
    </div>
  )
}
