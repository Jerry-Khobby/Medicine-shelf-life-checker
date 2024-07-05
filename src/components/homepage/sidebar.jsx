"use client";
import React from 'react';
import { FaCog, FaSignOutAlt } from 'react-icons/fa';
import { FaComments, FaHouse } from "react-icons/fa6";
import { GiMedicinePills } from "react-icons/gi";
import { FcExpired } from "react-icons/fc";
import { MdUpcoming, MdAddHomeWork } from "react-icons/md";
import { BsBookshelf } from "react-icons/bs";
import { CiBarcode } from "react-icons/ci";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideBar = () => {
  const currentRoute = usePathname();

  return (
    <div className='bg-gray-200 text-black w-64 h-screen fixed top-0 left-0 flex flex-col p-5 pt-10'>
      <div className='items-center flex flex-row pb-10'>
        <FaComments className='mr-3 text-black' size={35} />
        <h4 className='text-2xl font-mono'>Feedback</h4>
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
