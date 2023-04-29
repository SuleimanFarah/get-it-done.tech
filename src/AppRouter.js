import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import "./App.css";


class AppRouter extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Routes>
            <Route path = "/" element = {<Login />} exact = {true} />
            <Route path = "/dashboard" element = {<Dashboard />} exact = {true} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter