import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro' // 
import {NavLink, Outlet} from 'react-router-dom'

import logo from '../../../assets/images/logo-color.png';

export default function index() {
  return (
    <div className="plane-app">
        <header>
            <div className='logo'>
                <img src={logo} alt="Finder Logo"></img>
                <span>finder</span>
            </div>
        </header>
        <Outlet />
        <footer>
            <nav>
                <NavLink to="/app" className="nav-item"><FontAwesomeIcon icon={solid('magnifying-glass')}/></NavLink>
                <NavLink to="/app/events" className="nav-item"><FontAwesomeIcon icon={solid('grip')}/></NavLink>
                <NavLink to="/app/liked-you" className="nav-item"><FontAwesomeIcon icon={regular('star')}/></NavLink>
                <NavLink to="/app/messages" className="nav-item"><FontAwesomeIcon icon={solid('message')}/></NavLink>
                <NavLink to="/app/profile" className="nav-item"><FontAwesomeIcon icon={regular('user')}/></NavLink>
            </nav>
        </footer>
    </div>
  )
}
