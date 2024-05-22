"use client";
import React,{useState} from 'react'
import UserIcon from './usericon';
import { GiHamburgerMenu,GiMedicinePills  } from "react-icons/gi";
import { FaBell,FaCog, FaSignOutAlt } from 'react-icons/fa';
import { FaComments, FaHouse } from "react-icons/fa6";
import { FcExpired } from "react-icons/fc";
import { MdUpcoming } from "react-icons/md";
import { BsBookshelf } from "react-icons/bs";
import { CiBarcode } from "react-icons/ci";





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
      justifyContent:"space-between",
      padding:"2px 6px",
      }}>       
          <div>
        <GiHamburgerMenu size={25} onClick={toggleSidebar}/>
        </div>
        <div>
        <div className='flex flex-row items-center justify-center gap-2'>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/002/685/731/small/medical-caduceus-symbol-design-illustration-eps-format-suitable-for-your-design-needs-logo-illustration-animation-etc-vector.jpg" alt="Logo " height={30} width={30}/>
          <h2 className='text-lg font-mono font-semibold'>MediCheck overview</h2>
          </div> 
        </div>
        <div>
          <UserIcon/>
        </div>

        </div>
        {/** side bar overlay */}
        {isSidebarOpen&&(<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-999" onClick={closeSidebar}></div>
        )}
        {/** sidebar */}
        <div className={`fixed top-0 left-0 w-64 h-full bg-white z-1000 transition-transform transform pt-16 px-5 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto shadow-lg`}>
        <div className="flex  items-center pb-3 border-b border-gray-300 flex-row">
        <FaComments className='mr-3 text-black' size={35} />
          <h2>Features</h2>
        </div>
        <ul className='space-y-4 flex-grow'>
        <li className='flex items-center cursor-pointer hover:bg-gray-400 p-2 rounded'>
          <FaHouse className='mr-3 text-black' />
          Home
        </li>
        <li className='flex items-center cursor-pointer hover:bg-gray-400 p-2 rounded'>
          <GiMedicinePills className='mr-3 text-black' />
          All Medicines
        </li>
        <li className='flex items-center cursor-pointer hover:bg-gray-400 p-2 rounded'>
          <FaBell className='mr-3 text-black' />
          Notification
        </li>
        <li className='flex items-center cursor-pointer hover:bg-gray-400 p-2 rounded'>
          <FcExpired className='mr-3 text-black' />
          Expired Drugs
        </li>
        <li className='flex items-center cursor-pointer hover:bg-gray-400 p-2 rounded'>
          <MdUpcoming className='mr-3 text-black' />
          About Expiring
        </li>
        <li className='flex items-center cursor-pointer hover:bg-gray-400 p-2 rounded'>
          <BsBookshelf className='mr-3 text-black' />
          Shelf Numbers
        </li>
        <li className='flex items-center cursor-pointer hover:bg-gray-400 p-2 rounded'>
          <CiBarcode className='mr-3 text-black' />
          Scan Barcode
        </li>
        <li className='flex items-center cursor-pointer hover:bg-gray-400 p-2 rounded'>
          <FaCog className='mr-3 text-black' />
          App Settings
        </li>
        <li className='flex items-center cursor-pointer hover:bg-gray-400 p-2 rounded'>
          <FaSignOutAlt className='mr-3 text-black' />
          Signout
        </li>
      </ul>
      <ul className='space-y-4 pb-11'>
      </ul>
        </div>
    </div>

   );
}
 
export default SmallViewNavbar;