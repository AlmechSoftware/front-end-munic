import React from "react";
import {BsBuilding} from 'react-icons/bs'


const Navbar = () => {
  return (
    <React.Fragment>
      <section>
        <div className='bg-black h-12 flex'>
          <div className="w-full flex items-center pl-0 space-x-4">
            <div >
            <BsBuilding className='text-white text-3xl'/>
            </div>
          
            <div >
            <p className='text-white text-2xl'>Tepebaşı Belediyesi</p>
            </div>
          </div>
          
            <div className="flex items-left px-3">
            <button href='#' className='text-white text-1xl'>Çıkış</button>
            </div>
          
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
