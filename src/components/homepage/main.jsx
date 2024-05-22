"use client";
import React from 'react';
import MedicineCards from './card';

const MainHomePage = () => {
  return (
    <div className="flex flex-col mt-20 min-h-screen">
      <div className="px-5 lg:px-8 pb-2">
        <h3 className='font-semibold font-mono text-xl '>Medicine Storage Overview</h3>
      </div>
      <div className="flex justify-center lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex justify-center">
            <MedicineCards />
          </div>
          <div className="flex justify-center">
            <MedicineCards />
          </div>
          <div className="flex justify-center">
            <MedicineCards />
          </div>
          <div className="flex justify-center">
            <MedicineCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHomePage;
