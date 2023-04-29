import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import AppRouter from './AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppRouter />
);

/*
import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
import Dashboard from "./pages/Dashboard/Dashboard";

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
    //{/* <ToDo /> *///}
    //</React.StrictMode>,
   // document.getElementById("root")
  //);