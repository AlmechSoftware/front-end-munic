import React from "react";
import Navbar from "../components/Navbar";
import SprNavPage from "../components/SprNavPage";
import Sidebar from '../components/SprSidebar';

const SupervisorDashboard = () => {
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
              <SprNavPage/>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SupervisorDashboard;
