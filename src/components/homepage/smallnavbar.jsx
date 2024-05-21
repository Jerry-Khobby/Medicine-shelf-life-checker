"use client";
import React,{useState} from 'react'
import UserIcon from './usericon';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";



const SmallViewNavbar = () => {
  const [isSidebarOpen,setIsSideopen]=useState(false);

  const toggleSidebar=()=>{
setIsSideopen(!isSidebarOpen);
  }

  const closeSidebar=()=>{
    setIsSideopen(false);
  }
  return ( 
    <div>
    <div
    style={{
      borderBottom:"2px solid #ccc",
      backgroundColor:"white",
      zIndex:"1000",
      height:"60px",
      position:'fixed',
      width:"100%",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-evenly",
      }}>
        <div>
        <GiHamburgerMenu size={25} onClick={toggleSidebar}/>
        </div>
        <div>
          <h2 className='text-2xl font-mono font-semibold'>MediCheckOverview</h2>
          </div>
        <div>
          <UserIcon/>
        </div>
        </div>
        {/** side bar overlay */}
        {isSidebarOpen&&(<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-999" onClick={closeSidebar}></div>
        )}
        <div className={`fixed top-0 left-0 w-64 h-full bg-white z-1000 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto shadow-lg`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <h2>Features</h2>
          <IoMdClose size={24} onClick={closeSidebar} className="cursor-pointer" />
        </div>
        </div>
    </div>

   );
}
 
export default SmallViewNavbar;