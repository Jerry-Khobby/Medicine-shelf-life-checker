"use client";
import React,{useState,useEffect} from 'react'
import UserIcon from './usericon';
import { GiHamburgerMenu,GiMedicinePills  } from "react-icons/gi";
import { FaCog, FaSignOutAlt } from 'react-icons/fa';
import { FaComments, FaHouse } from "react-icons/fa6";
import { FcExpired } from "react-icons/fc";
import { MdUpcoming,MdAddHomeWork } from "react-icons/md";
import { BsBookshelf } from "react-icons/bs";
import { CiBarcode } from "react-icons/ci";
import Link from 'next/link';
import { usePathname } from 'next/navigation';





const SmallViewNavbar = () => {
const currentRoute=usePathname();
const [isSidebarOpen,setIsSideopen]=useState(false);



  const toggleSidebar=()=>{
setIsSideopen(!isSidebarOpen);
  }

  const closeSidebar=()=>{
    setIsSideopen(false);
  }
  return ( 
    <div className=''>
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
        <Link href="/"  className='flex flex-row items-center justify-center gap-2 cursor-pointer'>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/002/685/731/small/medical-caduceus-symbol-design-illustration-eps-format-suitable-for-your-design-needs-logo-illustration-animation-etc-vector.jpg" alt="Logo " height={30} width={30}/>
          <h2 className='text-lg font-mono font-semibold cursor-pointer'>MediCheck overview</h2>
          </Link> 
        </div>
        <div>
          <UserIcon/>
        </div>

        </div>
        {/** side bar overlay */}
        {isSidebarOpen&&(<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50" style={{zIndex:0}} onClick={closeSidebar}></div>
        )}
        {/** sidebar */}
        <div className={`fixed top-0 left-0 w-64 h-full bg-white  transition-transform transform pt-16 px-5 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto shadow-lg`} style={{zIndex:1}}>
        <div className="flex  items-center pb-3 border-b border-gray-300 flex-row">
        <FaComments className='mr-3 text-black' size={35} />
          <h2>Features</h2>
        </div>
        <ul className='space-y-4 flex-grow'>
    <Link href="/" className={`flex items-center cursor-pointer p-2 rounded ${currentRoute === "/" ? "bg-gray-400" : "hover:bg-gray-400"}`}>
  <FaHouse className='mr-3 text-black' />
  Home
</Link>

        <Link href="/allmedicines" className={`flex items-center cursor-pointer p-2 rounded ${currentRoute === "/allmedicines" ? "bg-gray-400" : "hover:bg-gray-400"}`}>
          <GiMedicinePills className='mr-3 text-black' />
          All Medicines
        </Link>
        <Link href="/addmedicine" className={`flex items-center cursor-pointer p-2 rounded ${currentRoute === "/addmedicine" ? "bg-gray-400" : "hover:bg-gray-400"}`}>
          <MdAddHomeWork className='mr-3 text-black' />
          Add Medicine
        </Link>
        <Link href="/expired" className={`flex items-center cursor-pointer p-2 rounded ${currentRoute === "/expired" ? "bg-gray-400" : "hover:bg-gray-400"}`}>
          <FcExpired className='mr-3 text-black' />
          Expired Drugs
        </Link>
        <Link href="/expiring" className={`flex items-center cursor-pointer p-2 rounded ${currentRoute === "/expiring" ? "bg-gray-400" : "hover:bg-gray-400"}`}>
          <MdUpcoming className='mr-3 text-black' />
          About Expiring
        </Link>
        <Link href="/shelf" className={`flex items-center cursor-pointer p-2 rounded ${currentRoute === "/shelf" ? "bg-gray-400" : "hover:bg-gray-400"}`}>
          <BsBookshelf className='mr-3 text-black' />
          Shelf Numbers
        </Link>
        <Link href="/barcode" className={`flex items-center cursor-pointer p-2 rounded ${currentRoute === "/barcode" ? "bg-gray-400" : "hover:bg-gray-400"}`}>
          <CiBarcode className='mr-3 text-black' />
          Scan Barcode
        </Link>
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