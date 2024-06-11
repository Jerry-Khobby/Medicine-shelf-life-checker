"use client";
import React, { useState} from 'react';
import { BsBookshelf } from "react-icons/bs";
import {GiMedicinePills  } from "react-icons/gi";

const ShelfComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // Start loading as false
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    shelfNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:3000/api/shelfnumber", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setFormData({ shelfNumber: '' });
        setData(result.medicine); // Ensure data is in array format
      } else {
        setError(result.error); // Handle error from the server
      }
    } catch (error) {
      setError("An error occurred while fetching data.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if(loading){
    return(
      <div className='flex justify-center items-center min-h-screen'>
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
      </div>
    )
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
      <div className='flex flex-row items-center mb-4'>
        <h2 className='font-semibold font-mono text-xl mr-2'>Shelf Numbers</h2>
        <BsBookshelf size={40} />
      </div>
      <div className='w-full max-w-2xl p-8'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="shelfNumber"
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
      {data &&(
        <div>
          {data.name}
          {data.group}
          {data.quantityInStock}
          {data.description}
          {data.manufacturingDate}
          {data.expiringDate}
          {data.barcodeEAN_13}
          </div>
      )}
      {!data &&(
                <div className='flex flex-col items-center justify-center min-h-screen'>
                  <GiMedicinePills className="w-32 h-32 text-gray-500" />
                  <p className="mt-4 text-lg text-gray-500">No Medicine with this Shelf Number is unavailable</p>
        </div>
      )}
    </div>
  );
}

export default ShelfComponent;
