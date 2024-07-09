"use client";
import React, { useState } from "react";
import { Scanner, useDevices, outline, boundingBox, centerText } from '@yudiel/react-qr-scanner';
import { useAppDispatch } from "@/lib/hooks";
import { searchThrough } from "@/lib/slice";

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
  const dispatch =useAppDispatch();
  const devices = useDevices();
  const [deviceId, setDeviceId] = useState(null);
  const [tracker, setTracker] = useState("centerText");
  const [detectedCode, setDetectedCode] = useState('');


  // Function to handle the submission of the barcode
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


  return (
    <div className="min-h-screen flex items-center justify-start flex-col  mt-10">
      <div className="flex items-center justify-center flex-col ">
        <div className="relative">
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
              boundingBox: {
                x: 0,
                y: 0,
                width: 0,
                height: 0
              },
              zoom: true,
            }}
            allowMultiple={true}
            scanDelay={2000}
            paused={false}
            constraints={{ video: { deviceId: deviceId ? { exact: deviceId } : undefined } }}
            onScan={(detectedCodes) => {
              console.log(detectedCodes);
              if (detectedCodes.length > 0) {
                const scannedCode = detectedCodes[0];
                dispatch(searchThrough({barcode:scannedCode}));
              }
            }}
            styles={{
              container: { border: 'none', outline: 'none' },
              video: { border: 'none', outline: 'none' }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainScanner;
