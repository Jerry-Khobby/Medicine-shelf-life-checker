"use client";
import React,{Suspense,useState,useEffect} from 'react'
import ProductsLoaderSkeleton from '../skeleton';
import {GiMedicinePills} from "react-icons/gi";



const ExpiredDrugsComponents = () => {
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  //we want to use the use Effect to fetch data from an backend or an api 
  useEffect(()=>{
    //define the fetch function 
    const fetchData =async()=>{
      try{
        const response = await fetch("http://localhost:3000/api/expired");
        if(!response.ok){
          throw new Error("Network response was not ok, check your internet connections")
        }
        const result= await response.json();
        setData(result.expiredMedicines)

      }catch(error){
        setError(error);
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  },[]);

  if (loading) {
    return <div><ProductsLoaderSkeleton /></div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const handleDateFormat = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  }
return (  
<div className='min-h-screen mt-20 flex flex-col px-5 lg:px-8'>
<div>
  <h2 className='font-semibold font-mono text-xl'>All Expired Drugs</h2>
</div>
<Suspense fallback={<ProductsLoaderSkeleton/>}>
      <div className='flex items-center justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-8 lg:gap-4 justify-center items-center mt-7'>
          {data.map((medicine) => (
            <div key={medicine.id} className='border-2 border-gray-200 rounded-lg w-72 sm:w-72 lg:w-56 md:w-72 xlg:w-56 h-[23rem] shadow-sm transition duration-500 ease-in-out hover:scale-105'>
              <div>
                {medicine.imageUrl ? (
                  <img src={medicine.imageUrl} alt={medicine.name} className='w-32 h-32 rounded-sm flex items-center justify-center mx-auto pt-10' />
                ) : (
                  <GiMedicinePills  className='w-20 h-20 rounded-full flex items-center justify-center mx-auto pt-10'/>
                )}
                <div className='mt-8 pb-2'>
                  <h6 className='font-semibold text-xs text-center'>{medicine.name}</h6>
                  <h6 className='font-semibold text-xs text-center'>It is a {medicine.group} kind of drug</h6>
                  <h6 className='font-semibold text-xs text-center'>Quantity in Stock: {medicine.quantityInStock}</h6>
                  <h6 className='font-semibold text-xs text-center'>Shelf Number: {medicine.shelfNumber}</h6>
                  <h6 className='font-normal text-xs text-center'>{medicine.description}</h6>
                  <h6 className='font-normal text-xs text-center text-red-900'>Expiring Date: {handleDateFormat(medicine.expirationDate)}</h6>
                  <h6 className='font-normal text-xs text-center'>Manufacturing Date: {handleDateFormat(medicine.manufacturingDate)}</h6>
                  <h6 className='font-normal text-xs text-center'>Barcode Number: {medicine.barcodeEAN_13}</h6>
                  <div className='flex items-center justify-center mt-2'>
                  <h6 className='font-normal text-xs  text-white h-5 w-14 text-center bg-red-700 rounded-sm'>Expired</h6>
                  </div>
                  <h6 className='font-normal text-xs text-center'>{medicine.message} </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      </Suspense>
    </div>
  );
}
 
export default ExpiredDrugsComponents;