"use client";
import React, { useState, Suspense } from "react";
import dynamic from 'next/dynamic';
import ProductsLoaderSkeleton from "../skeleton";

// Dynamically import BarcodeScannerComponent with SSR disabled
const BarcodeScannerComponent = dynamic(() => import('./barcodes'), { ssr: false });

const MainScanner = () => {
  const [isActive, setIsActive] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const toggleScanning = () => {
    setIsActive(!isActive);
  };

  const onScanned = (results) => {
    if (results.length > 0) {
      let text = "";
      results.forEach(result => {
        text += `${result.barcodeFormatString}: ${result.barcodeText}\n`;
      });
      alert(text);
      setIsActive(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2>Barcode Scanner</h2>
      {initialized ? (
        <button onClick={toggleScanning} className="h-20 w-32 bg-red-300">
          {isActive ? "Stop Scanning" : "Start Scanning"}
        </button>
      ) : (
        <div>Initializing ....</div>
      )}
      <Suspense fallback={<ProductsLoaderSkeleton />}>
        <BarcodeScannerComponent
          license={process.env.NEXT_PUBLIC_SCANNER_LICENSE}
          onInitialized={() => setInitialized(true)}
          isActive={isActive}
          onScanned={onScanned}
        >
          {/** the children will go here */}
        </BarcodeScannerComponent>
      </Suspense>
    </div>
  );
};

export default MainScanner;
