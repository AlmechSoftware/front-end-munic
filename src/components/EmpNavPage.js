import React from "react";
import { Routes, Route } from "react-router-dom";
import EmpDetails from '../PageComponents/Employee/EmpDetails';
import Tasks from '../PageComponents/Employee/EmpTasks';
import Leave from '../PageComponents/Employee/EmpLeave';
import EmployeeEdit from "../PageComponents/Employee/EmployeeEdit";
const EmpNavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route path='/employees/new' element={<EmployeeEdit />} />
        <Route path='/employees/:id' element={<EmployeeEdit />} />
        <Route path="/EmployeeDetails" element={<EmpDetails />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/Leave" element={<Leave />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default EmpNavPage;
