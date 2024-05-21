"use client"
import React,{useState}from 'react';
import { Button, Tooltip } from '@mui/material';
import UserIcon from './usericon';



const Navbar = () => {
  const [searchValue,setSearchValue] = useState("");
  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue); // Update searchItem directly with the input value
  };
  return (  
    <div
    style={{
      borderBottom:"2px solid #ccc",
      backgroundColor:"white",
      zIndex:"1000",
      height:"60px",
      position:'fixed',
      width:"100%",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-evenly",
      paddingRight:"20rem"
      }}>
      <div className='pl-3'>
        <h1 className='text-2xl font-mono font-semibold'>MediCheck Overview</h1>
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      width: "50%",
      height: "40px",
      overflow: "hidden",
      outline: "none",
    }}>
      <input
        value={searchValue}
        onChange={handleSearch} // Call handleSearch on every input change
        style={{
          padding: "0 12px",
          height: "100%",
          width:'calc(100% - 80px)',  // Adjusted width to accommodate button
          border: "2px solid #353535",
          borderRadius: "7px 0 0 7px",  // Adjusted border radius
          outline: "none",
          borderRight:'none'
        }}
        placeholder='Enter what you want to search here'
      />
      <Tooltip title='Click on it to search for an item of your choice' arrow>
        <Button // Update searchItem on button click
          style={{
            width: "80px",
            borderRadius: "0 7px 7px 0",  // Adjusted border radius
            fontFamily: "inherit",
            fontWeight: 300,
            background: "#353535",
            color: "white",
            border: "2px solid #353535",  // Added border to match input
            borderLeft: "none",  // Added to remove left border
            outline: "none",
            margin: 0,
            height:'100%',
          }}
        >
          Search
        </Button>
      </Tooltip>
    </div>
      <div className='pr-3'>
        <UserIcon/>
      </div>
    </div>
  );
}
 
export default Navbar;
