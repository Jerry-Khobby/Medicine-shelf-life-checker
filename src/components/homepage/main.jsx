"use client";
import React, { useState, useEffect } from 'react';
import MedicineCards from './card';
import InventorySection from './inventory';
import SuggestCard from './suggest';
import ProductsLoaderSkeleton from '../skeleton';

const MainHomePage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/");
        if (!response.ok) {
          throw new Error("Network response was not successful, Please check your internet connections");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to run only once

  if (loading) {
    return <div><ProductsLoaderSkeleton /></div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex flex-col mt-20 min-h-screen">
      <div className="px-5 lg:px-8 pb-2">
        <h3 className='font-semibold font-mono text-xl '>Medicine Storage Overview</h3>
      </div>
      <div className="flex justify-start sm:justify-start md:justify-start lg:justify-center lg:px-8 px-5 sm:px-5 md:px-5">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 grid-cols-1">
          <div className="flex justify-center">
            <MedicineCards heading="All Medicines" quantity={data.totalMedicines} iconName="GiMedicinePills" color="green" link="/allmedicines" percentage="100"/>
          </div>
          <div className="flex justify-center">
            <MedicineCards heading="Expired Drugs" quantity={data.expiredCount} iconName="FcExpired" color="red" link="/expired" percentage={data.drugsExpiredPercentage} />
          </div>
          <div className="flex justify-center">
            <MedicineCards heading="Expiring Drugs" quantity={data.aboutToExpireCount} iconName="MdUpcoming" color="gray" link="/expiring" percentage={data.aboutExpiringPercentage} />
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-8 pb-2 mt-16">
        <h3 className='font-semibold font-mono text-xl '>MediCheck Suggestions</h3>
      </div>
      <div className="flex justify-start sm:justify-start md:justify-start lg:justify-center lg:px-8 px-5 sm:px-5 md:px-5">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 grid-cols-1">
          <div className="flex justify-center">
            <SuggestCard heading="Analgesics" description="Examples: Paracetamol, Ibuprofen, Aspirin" usage="Use: Pain relief" imageUrl="https://www.shutterstock.com/image-illustration/analgesic-drug-capsule-3d-rendering-260nw-1782255194.jpg" />
          </div>
          <div className="flex justify-center">
            <SuggestCard heading="Antibiotics" description="Examples: Amoxicillin, Ciprofloxacin, Azithromycin" usage="Use: Treat bacterial infections" imageUrl="https://www.shutterstock.com/image-illustration/medical-balancing-act-group-medicine-600nw-1467369743.jpg" />
          </div>
          <div className="flex justify-center">
            <SuggestCard heading="Antivirals" description="Examples: Oseltamivir, Acyclovir, Remdesvir" usage="Treat viral infections" imageUrl="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/PB25AAEPAFMQRJON6IVODDPFAM.jpg" />
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-8 pb-2 mt-16">
        <h3 className='font-semibold font-mono text-xl '>MediCheck Inventory</h3>
      </div>
      <div className='lg:px-8 px-5 sm:px-5 md:px-5'>
        <InventorySection />
      </div>
    </div>
  );
};

export default MainHomePage;
