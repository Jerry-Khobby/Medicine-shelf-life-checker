"use client"
import React,{useEffect, useRef,useState} from 'react';
import Quagga from '@ericblade/quagga2';



const BarcodeScanner = ()=>{
  const scannerRef = useRef();
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);

  const handleBarcode = (data) => {
    setResult(data.codeResult.code);
    Quagga.stop(); // Stop scanning once a barcode is detected
  };

  useEffect(() => {
    const initializeScanner = async () => {
      try {
        if (scanning) {
          const stream = await Quagga.init({
            inputStream: {
              name: 'Live',
              type: 'LiveStream',
              target: scannerRef.current,
              constraints: {
                width: 480,
                height: 320,
                facingMode: 'environment', // Specify the facingMode if needed
              },
            },
            decoder: {
              readers: ["ean_reader"],
            },
          });
  
          if (stream) {
            Quagga.start();
            Quagga.onDetected(handleBarcode);
          }
        } else {
          Quagga.offDetected(handleBarcode)
          Quagga.stop();
        }
      } catch (error) {
        console.error('Error initializing scanner:', error);
      }
    };

    initializeScanner();

    return () => {
      Quagga.offDetected(handleBarcode);
      Quagga.stop();
    };
  }, [scanning]);

  return ( 
    <div>
  <div ref={scannerRef}></div>
  <button onClick={() => setScanning(prev => !prev)}>
      {scanning ? 'Stop Scanning' : 'Start Scanning'}
      </button>
      {result && <div>Barcode Result: {result}</div>}

    </div>
  
   );
}
 
export default BarcodeScanner;