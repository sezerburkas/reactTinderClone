import React from 'react'
import logo from '../assets/images/logo.svg';

export default function App() {
  return (
    <div class="login">
      <div class="logo">
        <div class="img">
          <img src={logo} alt="Finder Logo"></img>
        </div>
        <span></span><h1>finder</h1>
      </div>
      <div class="login-section">
          <span>By clicking "Log in", you agree with our <a href="#">Terms</a>. Learn how we process your data in our <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy.</a></span>
          <div class="buttons">
            <button class="login-button google">
              Log in with Google
            </button>
            <button class="login-button facebook">
              Log in with Facebook
            </button>
            <button class="login-button email">
              Log in with Email
            </button>
          </div>
          <a href="#" class="login-trouble">Trouble logging in?</a>
      </div>
    </div>
  )
}
