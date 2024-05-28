"use client";
import BarcodeScanner from './barcodes';
import { TextResult } from 'dynamsoft-javascript-barcode';
import React,{useState} from 'react';


export default function MainBarcodeScanner() {
  const [isActive,setIsActive] = useState(false);
  const [initialized,setInitialized] =useState(false);
  const toggleScanning = () => {
    setIsActive(!isActive);
  }

  const onScanned = (results) => {
    if (results.length>0) {
      let text = "";
      for (let index = 0; index < results.length; index++) {
        const result = results[index];
        text = text + result.barcodeFormatString + ": " + result.barcodeText + "\n";
      }
      alert(text);
      setIsActive(false);
    }
  }

  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          {initialized ? (
            <button onClick={toggleScanning}>{isActive ? "Stop Scanning" : "Start Scanning"}</button>
          ) : (
            <div>Initializing...</div>
          )}
          <div className="flex items-center justify-center min-h-screen">
            <BarcodeScanner
              onInitialized={() => setInitialized(true)}
              isActive={isActive}
              onScanned={(results) => onScanned(results)}
              license="DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ=="
            ></BarcodeScanner>
          </div>
        </div>
    </div>
  )
}

