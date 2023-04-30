import React from 'react';

class PastProductivity extends React.Component {

  render() {
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
  }
}

export default PastProductivity;