'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { Box } from "@mui/material";
import ProductsLoaderSkeleton from '../skeleton';
import Link from 'next/link';

const UserIcon = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/api");
      if (!response.ok) {
        throw new Error("Network response was not successful, check your internet connection");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", gap: '2px' }}>
      <div
        style={{
          height: '35px',
          width: '35px',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '50%',
          cursor: 'pointer'
        }}
      >
        <Link href="/notification" className='relative'>
          <div className='absolute bottom-3 left-2 text-center flex items-center bg-red-600 rounded-full h-4 w-4 justify-center'>
            <p className='text-white text-xs text-center items-center'>{data.expiredCount + data.aboutToExpireCount}</p>
          </div>
          <IoIosNotifications size={23} color='black' />
        </Link>
      </div>
      <div
        style={{
          height: '35px',
          width: '35px',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '50%',
          cursor: 'pointer'
        }}
      >
        <Box>
          <FaRegUserCircle size={23} color='black' />
        </Box>
      </div>
    </div>
  );
};

export default UserIcon;
