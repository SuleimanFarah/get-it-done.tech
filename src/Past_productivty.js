import React from 'react';

class PastProductivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weeklyReport: { /* data for weekly report */ },
      monthlyReport: { /* data for monthly report */ },
      yearlyReport: { /* data for yearly report */ },
      userComparison: { /* data for user comparison */ },
    };
  }

  render() {
    return (
      <div>
        <h2>Past Productivity</h2>
        <h3>Weekly Report</h3>
        <p>{/* display weekly report data */}</p>
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