import React from 'react'
import Navbar from './navbar';
import SideBar from './sidebar';


const MainHomePage = () => {
  return ( 
<div className='flex'>
  <SideBar/>
  <div className='flex-1 ml-64 pr-36'>
  <Navbar/>
  </div>
  <div className='mt-16'>
  <h2>Welcome to the Main Page</h2>
          <p>This is where your main content will go.</p>
  </div>
</div>
   );
}
 
export default MainHomePage;