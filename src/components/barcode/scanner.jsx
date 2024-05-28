"use client";
import React from 'react'
import BarcodeScanner from './barcodes';

const MainBarcodeScanner=()=>{
return(
  <div className="min-h-screen flex items-center justify-center flex-col">
<BarcodeScanner/>
</div>
);
};
export default MainBarcodeScanner;