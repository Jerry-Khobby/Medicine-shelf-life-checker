import React from 'react';
import { CiBarcode } from "react-icons/ci";
import { GiMedicinePills } from "react-icons/gi";
import { FcExpired } from "react-icons/fc";
import { MdUpcoming } from "react-icons/md";
import Link from 'next/link';

const MedicineCards = ({ heading, quantity, percentage, iconName, color, link }) => {
  const renderIcon = () => {
    switch (iconName) {
      case "GiMedicinePills":
        return <GiMedicinePills size={30} />;
      case "FcExpired":
        return <FcExpired size={30} />;
      default:
        return <MdUpcoming size={30} />;
    }
  };

  return (
    <Link href={link} className="p-4 border rounded-lg shadow-md sm:w-[20rem] lg:w-96 md:w-[22rem] w-[20rem] h-36 flex flex-col bg-blue-100 cursor-pointer">
      <div className="flex items-start gap-5 mb-4">
        <div className="mr-4">
          {renderIcon()}
        </div>
        <div>
          <h3 className="text-md font-md font-mono">{heading}</h3>
          <p className="text-gray-500 text-sm font-medium font-sans flex flex-row gap-2" style={{ color }}>{quantity} products</p>
        </div>
      </div>
      <div>
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mt-5">
          <div className="h-2 rounded-full" style={{ width: `${percentage}%`,backgroundColor:`${color}` }}></div>
          <p className='text-sm text-gray-500 font-sans'>{percentage}% of total Medicines</p>
        </div>
      </div>
    </Link>
  );
};

export default MedicineCards;
