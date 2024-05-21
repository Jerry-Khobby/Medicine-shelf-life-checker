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
        {isSidebarOpen&&(
          <div>
            
          </div>
        )}
    </div>

   );
}
 
export default SmallViewNavbar;