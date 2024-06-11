
"use client";
import React,{useEffect,useState} from 'react'
import { IoIosNotifications } from "react-icons/io";
import ProductsLoaderSkeleton from '../skeleton';


const NotificationComponent = () => {
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  const [expiredDrugs,setExpiredDrugs]=useState(null);
  const [aboutExpiring,setAboutExpiring]=useState(null);


  useEffect(()=>{
    const fetchData= async()=>{
      try{
        const response = await fetch("http://localhost:3000/api/expired");
        if(!response.ok){
          throw new Error("Network response was not ok, check your internet connections")
        }
        const result =await response.json();
        setData(result);
        setExpiredDrugs(result.expiredMedicines);
        setAboutExpiring(result.aboutToExpireMedicines);

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

  if (!data || data.length===0) {
    return(
      <div>
        <div className='mx-8'>
  <h2 className='font-semibold font-mono text-xl'>Notifications</h2>
</div>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <IoIosNotifications className="w-32 h-32 text-gray-500" />
        <p className="mt-4 text-lg text-gray-500">No notification Available</p>
      </div>
      </div>

    );
  }


  return ( 
    <div className='min-h-screen mt-20 flex flex-col px-5 lg:px-8'>
<div className='flex flex-row items-center'>
  <h2 className='font-semibold font-mono text-xl'>Notification</h2>
  <IoIosNotifications size={40}/>
</div>
<div className='flex flex-col items-center justify-center gap-3 mt-6'>
{
  expiredDrugs.map((medicine)=>(
    <div key={medicine.id} className='border-2 border-gray-200 rounded-lg w-full max-w-2xl h-14 text-center flex items-center justify-center cursor-pointer transition duration-500 ease-in-out hover:scale-105'>
<div>
  {medicine.name} on Shelf Number {medicine.shelfNumber} has  expired
</div>
    </div>
  ))
}
{
  aboutExpiring.map((medicine)=>(
    <div key={medicine.id} className='border-2 border-gray-200 rounded-lg w-full max-w-2xl h-14 text-center flex items-center justify-center cursor-pointer transition duration-500 ease-in-out hover:scale-105'>
      {medicine.name} on Shelf Number {medicine.shelfNumber} is about getting expired 
    </div>
  ))
}
</div>
    </div>
   );
}
 
export default NotificationComponent;