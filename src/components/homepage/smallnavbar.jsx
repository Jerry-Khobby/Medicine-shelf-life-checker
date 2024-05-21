import React from 'react'
import UserIcon from './usericon';



const SmallViewNavbar = () => {
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
      paddingRight:"18rem"
      }}>
        <div>{/** this is where I want my hamburger */}</div>
        <div>{/** the name of the company  */}</div>
        <div>
          <UserIcon/>
        </div>

        </div>
   );
}
 
export default SmallViewNavbar;