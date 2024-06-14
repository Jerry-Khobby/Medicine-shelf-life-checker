"use client"
import React,{useState} from "react";
import BarcodeScannerComponent from "./barcodes";


const MainScanner = () => {
  const [isActive,setIsActive]=useState(false);
  const [initialized,setInitialized]=useState(false);


  const toggleScanning = () => {
    setIsActive(!isActive);
  }

  const onScanned = (results) => {
    if (results.length > 0) {
      let text = "";
      results.forEach(result => {
        text += `${result.barcodeFormatString}: ${result.barcodeText}\n`;
      });
      alert(text);
      setIsActive(false);
    }
  }
  return ( 
    <div className="min-h-screen flex items-center justify-center">
<h2>Barcode Scanner</h2>
{
  initialized ?(
<button onClick={toggleScanning}>{isActive ?"Stop Scanning":"Start Scanning"}</button>
  ):(
    <div>Initializing ....</div>
  )}

    </div>
   );
}
 
export default MainScanner;