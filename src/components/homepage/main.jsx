"use client";
import React from 'react';
import MedicineCards from './card';
import InventorySection from './inventory';


const MainHomePage = () => {

  return (
    <div className="flex flex-col mt-20 min-h-screen">
      <div className="px-5 lg:px-8 pb-2">
        <h3 className='font-semibold font-mono text-xl '>Medicine Storage Overview</h3>
      </div>
      <div className="flex justify-start sm:justify-start md:justify-start lg:justify-center lg:px-8 px-5 sm:px-5 md:px-5">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 grid-cols-1">
          <div className="flex justify-center">
            <MedicineCards heading="All Medicines" quantity="200" iconName="GiMedicinePills" color="green"/>
          </div>
          <div className="flex justify-center">
            <MedicineCards heading="Expired Drugs" quantity="210"  iconName="FcExpired" color="red"/>
          </div>
          <div className="flex justify-center">
            <MedicineCards  heading="Expiring Drugs" quantity="350" iconName="MdUpcoming"  color="gray"/>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-8 pb-2 mt-16">
      <h3 className='font-semibold font-mono text-xl '>MediCheck Inventory</h3>
      </div>
      <div className='lg:px-8 px-5 sm:px-5 md:px-5'>
        <InventorySection/>
      </div>
    </div>
  );
};

export default MainHomePage;
