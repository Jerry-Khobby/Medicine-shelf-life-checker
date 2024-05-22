import React from 'react';
import { CiBarcode } from "react-icons/ci";

const MedicineCards = ({heading,quantity,percentage,iconName,color}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md sm:w-[21rem] lg:w-96 md:w-[21rem] w-[21rem] h-36 flex flex-col bg-blue-100 cursor-pointer">
      <div className="flex items-start gap-5 mb-4">
        <div className="mr-4">
          <CiBarcode size={30} />
        </div>
        <div>
          <h3 className="text-md font-md font-mono">{heading}</h3>
          <p className="text-gray-500 text-sm font-medium font-sans">{quantity} products</p>
        </div>
      </div>
      <div>
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mt-5">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
          <p className='text-sm text-gray-500 font-sans'>15GB of 1TB storage</p>
        </div>
      </div>
    </div>
  );
};

export default MedicineCards;
