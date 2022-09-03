import React from 'react'
import {SidebarData} from '../data/SidebarData'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const activeLink = 'hover:bg-red-500 mt-2 pl-1 w-full h-10 flex justify-start items-center text-white text-1xl space-x-1 font-bold bg-red-500'
    const normalLink = 'hover:bg-red-500 pl-2 mt-1 w-full h-10 flex justify-start items-center text-white text-1xl space-x-1'

  return (
    <React.Fragment>
    <section>
      <div className="text-white">
          {
               SidebarData.map((item, index)=>{
                return(
                    <div key={index}>
                        <NavLink to={item.path}
                        className={({ isActive }) =>
                        isActive ? activeLink: normalLink}
                      
                         >
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                        </NavLink>
                        
                    </div>
                )
              })
          }
  
      </div>
    </section>
  </React.Fragment>
  )
}

export default Sidebar