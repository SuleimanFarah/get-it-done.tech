import React from "react";
import "./homepage.css";
import background from './background.gif';
import { useNavigate } from "react-router-dom";


  
        
function HomePage() {
const navigate = useNavigate();
const toLoginPage = () =>{
        console.log("button works")
        //navigate("/dashboard");
}
  return (
    <div className="homepage-container">
      <div className="homepage-header">
      <input type="button" name="Login / Register" id="Login" value={"LOGIN"} onClick={toLoginPage}/>
       <button className="homepage-button">Login / Register</button>
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