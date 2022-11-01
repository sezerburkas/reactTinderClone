import React from 'react'
import {Routes, Route, Link, NavLink} from "react-router-dom"

import Index from './pages/auth'
import Login from './pages/auth/Login'

import AppLayout from './pages/app'
import Swap from './pages/app/Swap'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/Login" element={<Login />}></Route>

      <Route path="/app" element={<AppLayout />}>
          <Route index={true} element={<Swap />} />
      </Route>
    </Routes>
  )
}
