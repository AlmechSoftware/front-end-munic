import React from "react";
import { Routes, Route } from "react-router-dom";
import Angular from '../PageComponents/Angular';
import Css from '../PageComponents/Css';
import Figma from '../PageComponents/Figma';
import Git from '../PageComponents/Git';
import Home from '../PageComponents/Home';
import Java from '../PageComponents/Java';
import Node from '../PageComponents/Node';
import Php from '../PageComponents/Php';
import PageReact from '../PageComponents/PageReact';
import EmpDetails from '../PageComponents/Employee/EmpDetails';
import Tasks from '../PageComponents/Employee/Tasks';
import Leave from '../PageComponents/Employee/Leave';

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/java" element={<Java />} />
        <Route path="/css" element={<Css />} />
        <Route path="/php" element={<Php />} />
        <Route path="/figma" element={<Figma />} />
        <Route path="/git" element={<Git />} />
        <Route path="/node" element={<Node />} />
        <Route path="/react" element={<PageReact />} />
        <Route path="/angular" element={<Angular />} />
        <Route path="/EmployeeDetails" element={<EmpDetails />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/Leave" element={<Leave />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
