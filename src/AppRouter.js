import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import "./App.css";
import HomePage from './pages/HomePage/homepage'


class AppRouter extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Routes>
            <Route path = "/" element = {<HomePage />} exact = {true} />
            <Route path = "/dashboard" element = {<Dashboard />} exact = {true} />
            <Route path = "/login" element = {<Login />} exact = {true} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter