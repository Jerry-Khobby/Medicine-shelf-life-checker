import React from 'react';
import { FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { FaComments, FaHouse } from "react-icons/fa6";
import { GiMedicinePills } from "react-icons/gi";
import { FcExpired } from "react-icons/fc";
import { MdUpcoming } from "react-icons/md";
import { BsBookshelf } from "react-icons/bs";
import { CiBarcode } from "react-icons/ci";

const SideBar = () => {
  return (
    <div className='bg-gray-200 text-black w-64 h-screen fixed top-0 left-0 flex flex-col p-5 pt-10'>
      <div className='items-center flex flex-row pb-10'>
        <FaComments className='mr-3 text-black' size={35} />
        <h4 className='text-2xl font-mono'>Feedback</h4>
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
      </ul>
      <ul className='space-y-4 pb-11'>
        <li className='flex items-center cursor-pointer hover:bg-gray-400 p-2 rounded'>
          <FaCog className='mr-3 text-black' />
          App Settings
        </li>
        <li className='flex items-center cursor-pointer hover:bg-gray-400 p-2 rounded'>
          <FaSignOutAlt className='mr-3 text-black' />
          Signout
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
