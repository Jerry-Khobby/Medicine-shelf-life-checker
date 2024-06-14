"use client"
import React,{useState} from "react";
import BarcodeScannerComponent from "./barcodes";
import "../cvr"



// Dynamically import BarcodeScannerComponent with SSR disabled


const MainScanner = () => {
  const  [bShowVideoCapture, setBShowVideoCapture] = useState(false);

  const showVideoCapture = () => {
    setBShowVideoCapture(true);
  };


  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
    <button
          style={{
            marginRight: "10px",
            backgroundColor: bShowVideoCapture ? "rgb(255,174,55)" : "white",
          }}
          onClick={showVideoCapture}
          className="text-lg my-6 border border-black bg-white text-black px-4 py-2 rounded-lg"
        >
          Decode Video
        </button>
        <div>
          {bShowVideoCapture ? <BarcodeScannerComponent/>:""}
        </div>
    </div>
  );
};

export default MainScanner;
