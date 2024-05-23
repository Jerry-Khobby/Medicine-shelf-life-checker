"use client";
import React from 'react';
import MedicineCards from './card';
import InventorySection from './inventory';
import SuggestCard from './suggest';


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
<h3 className='font-semibold font-mono text-xl '>MediCheck Suggestions</h3>
      </div>
      <div className="flex justify-start sm:justify-start md:justify-start lg:justify-center lg:px-8 px-5 sm:px-5 md:px-5">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 grid-cols-1">
          <div className="flex justify-center">
            <SuggestCard heading="Analgesics" description="Examples: Paracetamol,Ibuprofen,Aspirin" usage="Use: Pain relief" imageUrl="https://www.shutterstock.com/image-illustration/analgesic-drug-capsule-3d-rendering-260nw-1782255194.jpg"/>
          </div>
          <div className="flex justify-center">
            <SuggestCard heading="Antibiotics" description="Examples:Amoxicillin,Ciprofloxacin,Azithromycin" usage="Use: Treat bacterial infections" imageUrl="https://www.shutterstock.com/image-illustration/medical-balancing-act-group-medicine-600nw-1467369743.jpg"/>
          </div>
          <div className="flex justify-center">
            <SuggestCard heading="Antivirals" description=" Examples:Oseltamivir,Acyclovir,Remdesvir " usage="Treat viral infections" imageUrl="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/PB25AAEPAFMQRJON6IVODDPFAM.jpg"/>
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
