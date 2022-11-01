import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';

export default function Login() {
  return (
    <div className="login">
      <div className="logo">
        <div className="img">
          <img src={logo} alt="Finder Logo"></img>
        </div>
        <span></span><h1>finder</h1>
      </div>
      <div className="login-section">
          <span>By clicking "Log in", you agree with our <a href="#">Terms</a>. Learn how we process your data in our <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy.</a></span>
          <div className="buttons">
            <button className="login-button google">
              Log in with Google
            </button>
            <button className="login-button facebook">
              Log in with Facebook
            </button>
            <NavLink to="/Login" className="login-button email">
              Log in with Email
            </NavLink>
          </div>
          <a href="#" className="login-trouble">Trouble logging in?</a>
      </div>
    </div>
  )
}
