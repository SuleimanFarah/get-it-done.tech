import React from "react";
import "./homepage.css";
import background from './background.gif';
import { useNavigate } from "react-router-dom";

        
function HomePage() {
const navigate = useNavigate();
const toLoginPage = () =>{
        navigate("/login");
}
  return (
    <div className="homepage-container">
      <div className="homepage-header">
      <button className="homepage-button" onClick={toLoginPage}>Login / Register</button>



      </div>
      <div className="homepage-divider"></div>  
      <div className="homepage-background">
        <img src={background} alt="Get-it-Done ToDo List" />
        <h1>Get It Done With</h1>
      </div>
    </div>
  );
}

export default HomePage;