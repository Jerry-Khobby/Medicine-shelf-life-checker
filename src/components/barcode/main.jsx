"use client";
import React, { useState } from "react";
import BarcodeScanner from "./scanner"; // Adjust the import path as needed

const MainScanner = () => {
  const [openScanner, setOpenScanner] = useState(false);

  const handleScanner = () => {
    setOpenScanner(!openScanner);
  };

  return (
    <div className="min-h-screen mt-20 flex items-center justify-center">
      <div>
        <button
          className="h-16 w-24 bg-red-500 text-black rounded-md"
          onClick={handleScanner}
        >
          {openScanner ? "Stop Scan" : "Scan Now"}
        </button>
        {openScanner && (
          <div>
            <BarcodeScanner />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainScanner;
