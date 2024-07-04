"use client";
import React, { useState } from "react";
import { Scanner, useDevices, outline, boundingBox, centerText } from '@yudiel/react-qr-scanner';

const styles = {
  container: {
    width: 400,
    margin: 'auto'
  },
  controls: {
    marginBottom: 8
  }
};

const MainScanner = () => {
  const [deviceId, setDeviceId] = useState(null);
  const [tracker, setTracker] = useState("centerText");
  const [pause, setPause] = useState(true);
  const [detectedCode, setDetectedCode] = useState(null);

  const devices = useDevices();

  function getTracker() {
    switch (tracker) {
      case "outline":
        return outline;
      case "boundingBox":
        return boundingBox;
      case "centerText":
        return centerText;
      default:
        return () => {}; // Return a no-op function to avoid undefined
    }
  }
  const handlePause=()=>{
    setPause(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col ">
        <div>
        <button  className="border border-black bg-red-500 text-black p-2 m-1 w-28 rounded-sm " onClick={handlePause}>Scan Now</button>
        </div>
      <Scanner
        formats={[
          'qr_code',
          'micro_qr_code',
          'rm_qr_code',
          'maxi_code',
          'pdf417',
          'aztec',
          'data_matrix',
          'matrix_codes',
          'dx_film_edge',
          'databar',
          'databar_expanded',
          'codabar',
          'code_39',
          'code_93',
          'code_128',
          'ean_8',
          'ean_13',
          'itf',
          'linear_codes',
          'upc_a',
          'upc_e'
        ]}
        components={{
          audio: true,
          onOff: true,
          torch: true,
          finder: true,
          tracker: getTracker(),
          zoom: true,
        }}
        allowMultiple={true}
        scanDelay={2000}
        paused={pause}
        constraints={{ video: { deviceId: deviceId ? { exact: deviceId } : undefined } }}
        onScan={(detectedCodes)=>{
          console.log(detectedCodes)
          setDetectedCode(detectedCodes[0]) 
        }}
      />
      </div>
    </div>
  );
};

export default MainScanner;
