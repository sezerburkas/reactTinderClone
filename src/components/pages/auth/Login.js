import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // 
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <div className="plane">
      <h1>My email is</h1>
      <div className="form-control">
          <input type="email" placeholder="Email Address"></input>
      </div>
      <span>When you tap Continue, Finder will send a email with verification code. The verified email adress can be use to log in.</span>
      <button className='btn btn-primary'>Continue</button>

      <div className="back-button">
        <NavLink to="/" className="back"><FontAwesomeIcon icon={solid('arrow-left')} /></NavLink>
      </div>
    </div>
  )
}
