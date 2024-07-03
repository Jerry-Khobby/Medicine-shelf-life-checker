"use client";
import React, { useState } from "react";
import { Scanner, useDevices } from '@yudiel/react-qr-scanner';

const MainScanner = () => {
  const [scannedData, setScannedData] = useState(null);
  const devices = useDevices(); // Use the hook to get the available devices

  const handleScan = (detectedCodes) => {
    if (detectedCodes && detectedCodes.length > 0) {
      setScannedData(detectedCodes[0].rawValue);
      console.log("Scanned Data:", detectedCodes[0].rawValue);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <Scanner
        onScan={handleScan}
        styles={{ width: '300px', height: '300px', alignItems: 'center', display: 'flex', justifyContent: 'center' }} // Custom styles for the scanner
      />
      {devices.length > 0 && (
        <div>
          <h2>Available Devices:</h2>
          <ul>
            {devices.map((device, index) => (
              <li key={index}>{device.label}</li>
            ))}
          </ul>
        </div>
      )}
      {scannedData && (
        <div>
          <h2>Scanned Result:</h2>
          <p>{scannedData}</p>
        </div>
      )}
    </div>
  );
};

export default MainScanner;
