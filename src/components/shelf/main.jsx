"use client"
import React,{useState,useEffect} from 'react'
import { BsBookshelf } from "react-icons/bs";

const ShelfComponent = () => {
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  const [formData,setFormData]=useState({
    shelfNumber:''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit= async(e)=>{
e.preventDefault();
try{
  const response = await fetch("http://localhost:3000/api/shelfnumber",{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(formData),
  })
  const result = await response.json(); 

}catch(error){
console.error(error);
}
  }
  return ( 
    <div className='min-h-screen mt-20 flex flex-col px-5 lg:px-8'>
<div className='flex flex-row items-center'>
  <h2 className='font-semibold font-mono text-xl'>Notification</h2>
  <BsBookshelf size={40}/>
</div>
<div className='w-full max-w-2xl p-8'>
<form onSubmit={handleSubmit}>
<input
              type="text"
              name="name"
              value={formData.shelfNumber}
              onChange={handleChange}
              placeholder="Enter shelf Number"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="w-32 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-2">
              Search
            </button>
</form>
</div>
    </div>
   );
}
 
export default ShelfComponent;