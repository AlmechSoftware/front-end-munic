import React from "react";
import { Routes, Route } from "react-router-dom";
import SprDetails from '../PageComponents/Supervisor/SprEmpDetails';
import SprTasks from '../PageComponents/Supervisor/SprEmpTasks';
import SprLeave from '../PageComponents/Supervisor/SprEmpLeave';

const SprNavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route path="/SupervisorEmployeeDetails" element={<SprDetails />} />
        <Route path="/SupervisorEmployeeTasks" element={<SprTasks />} />
        <Route path="/SupervisorEmployeeLeave" element={<SprLeave />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default SprNavPage;