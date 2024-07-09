"use client";
import React, { useState, useEffect } from "react";
import { Scanner, useDevices, outline, boundingBox, centerText } from '@yudiel/react-qr-scanner';
import { GiMedicinePills } from "react-icons/gi";

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
  const devices = useDevices();
  const [deviceId, setDeviceId] = useState(null);
  const [tracker, setTracker] = useState("centerText");
  const [detectedCode, setDetectedCode] = useState({ barcodeEAN_13: '' });
  const [loading, setLoading] = useState(false);
  const [gottenData, setGottenData] = useState(false);
  const [openScan, setOpenScan] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleOpenScan = () => {
    setOpenScan(!openScan);
  };

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

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/api/barcode", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(detectedCode),
      });
      const result = await response.json();
      if (response.ok) {
        setDetectedCode({ barcodeEAN_13: '' });
        setData(result.medicine);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError("An error occurred while fetching data ");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (gottenData) {
      handleSubmit(); // Call handleSubmit without event argument
    }
  }, [gottenData]);

  return (
    <div className="min-h-screen flex items-center justify-center flex-col mt-24">
      <div className="flex items-center justify-center flex-col ">
        <div>
          <button className="bg-red-500 h-24 w-24 rounded-full hover:translate-x-2 text-black" onClick={handleOpenScan}>{openScan ? "Stop Scan" : "Scan Now"}</button>
        </div>
        {
          openScan && (
            <div className="relative mt-5">
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
                    setDetectedCode(detectedCodes[0]);
                    setGottenData(true);
                    setOpenScan(false);
                  }
                }}
                styles={{
                  container: { border: 'none', outline: 'none' },
                  video: { border: 'none', outline: 'none' }
                }}
              />
            </div>
          )
        }
        {
          gottenData && (
            <div>
              {loading && (
                <div className='flex justify-center items-center min-h-screen'>
                  <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
                </div>
              )}
              {data && (
                <div className='items-center flex justify-center '>
                  <div className='border-2 border-gray-200 rounded-lg w-72 sm:w-72 lg:w-56 md:w-72 xlg:w-56 h-[17rem] shadow-sm transition duration-500 ease-in-out hover:scale-105'>
                    {data.imageUrl ? (
                      <img src={data.imageUrl} alt={data.name} className='w-32 h-32 rounded-sm flex items-center justify-center mx-auto pt-10' />
                    ) : (
                      <GiMedicinePills className='w-20 h-20 rounded-full flex items-center justify-center mx-auto pt-10' />
                    )}
                    <h6 className='font-semibold text-xs text-center'>{data.name}</h6>
                    <h6 className='font-normal text-xs text-center'>{data.group}</h6>
                    <h6 className='font-normal text-xs text-center'>Quantity in Stock: {data.quantityInStock}</h6>
                    <h6 className='font-normal text-xs text-center'>{data.description}</h6>
                    <h6 className='font-normal text-xs text-center'>Expiring Date: {handleDateFormat(data.expirationDate)}</h6>
                    <h6 className='font-normal text-xs text-center'>Manufacturing Date: {handleDateFormat(data.manufacturingDate)}</h6>
                    <h6 className='font-normal text-xs text-center'>Barcode Number: {data.barcodeEAN_13}</h6>
                  </div>
                </div>
              )}
              {!data && (
                <div className='flex flex-col items-center justify-center min-h-screen'>
                  <GiMedicinePills className="w-32 h-32 text-gray-500" />
                  <p className="mt-4 text-lg text-gray-500">No Medicine with this Shelf Number is unavailable</p>
                </div>
              )}
              {error && (
                <div className="text-red-500 ">{error}</div>
              )}
            </div>
          )
        }

      </div>
    </div>
  );
};

export default MainScanner;
