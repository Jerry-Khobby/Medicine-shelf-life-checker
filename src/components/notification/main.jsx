
"use client";
import React,{useEffect,useState} from 'react'
import { IoIosNotifications } from "react-icons/io";


const NotificationComponent = () => {
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{
    const fetchData= async()=>{
      try{


      }catch(error){
        setError(error);
      }finally{
        setLoading(false);
      }
    }
  })


  return ( 
    <div>

    </div>
   );
}
 
export default NotificationComponent;