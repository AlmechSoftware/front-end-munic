import React from "react";
import Navbar from "../components/Navbar";
import NavPage from "../components/EmpNavPage";
import Sidebar from '../components/EmpSidebar';

const EmployeeDashboard = () => {
  return (
    <React.Fragment>
      {/* heading section */}
      <section>
        <div>
          <Navbar />
        </div>
      </section>

      {/* sidebar section */}
      <section>
        <div className='grid grid-cols-12'>
          <div className='col-span-3 bg-black h-screen pl-2 md:col-span-2'>
              <Sidebar/>
          </div>


          <div className='col-span-9 h-screen pl-2 md:col-span-10'>
              <NavPage/>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default EmployeeDashboard;
