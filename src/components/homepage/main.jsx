"use client";
import React from 'react';
import MedicineCards from './card';

const MainHomePage = () => {
  return (
    <div className="flex flex-col mt-20 min-h-screen">
      <div className="px-5 lg:px-8 pb-2">
        <h3 className='font-semibold font-mono text-xl '>Medicine Storage Overview</h3>
      </div>
      <div className="flex justify-start sm:justify-start md:justify-start lg:justify-center lg:px-8 px-5 sm:px-5 md:px-5">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          <div className="flex justify-center">
            <MedicineCards heading="All Medicines" quantity="200"/>
          </div>
          <div className="flex justify-center">
            <MedicineCards heading="Expired Drugs" quantity="210" />
          </div>
          <div className="flex justify-center">
            <MedicineCards  heading="About Expiring" quantity="350"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHomePage;
