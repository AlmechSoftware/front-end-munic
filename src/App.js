import React from "react";
import "./App.css";
import EmployeeDashboard from "./Pages/EmployeeDashboard";
import { BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import SupervisorDashBoard from './Pages/SupervisorDashboard';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <EmployeeDashboard />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
