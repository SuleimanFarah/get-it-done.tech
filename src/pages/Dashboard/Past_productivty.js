import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Past_productivty.css";

const PastProductivity = () => {
  const navigate = useNavigate();

  const toDashBoard = () => {
    navigate("/dashboard");
  };

  const completedGoals = {};
  /*const data = JSON.parse(localStorage.getItem("task-items"));
  for(const key of Object.keys(data))
  {
    if(data[key].length > 2)
    {
      let day_completed_goals = 0;
      for(const task of data[key])
      {
        if(data[key][task]["finished"] == true)
        {
          day_completed_goals ++;
        }
      }
      completedGoals[key] = day_completed_goals;
    }
  }*/

  return (
    <div>
      <button className="dashboard-button" onClick={toDashBoard}>Dashboard</button>
      <h2>Past Productivity</h2>
      <h3>Weekly Report</h3>
      {localStorage.getItem("task-items")}
      
      <h3>Monthly Report</h3>
      <p>{/* display monthly report data */}</p>
      <h3>Yearly Report</h3>
      <p>{/* display yearly report data */}</p>
      <h3>User Comparison</h3>
      <p>{/* display user comparison data */}</p>
    </div>
  );
};

export default PastProductivity;