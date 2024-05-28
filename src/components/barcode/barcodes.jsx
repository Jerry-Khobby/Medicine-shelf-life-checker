"use client"
import React,{useEffect, useRef} from 'react';
import  Quagga  from 'quagga';


const BarcodeScanner = ()=>{
  const scannerRef=useRef();

  const handleBarcode=(result)=>{

    console.log(result);
  }

  useEffect(()=>{
    Quagga.init({
      inputStream:{
        name:'Live',
        type:'LiveStream',
        target:scannerRef.current,
        constraints:{
          width:480,
          height:320,
        },
      },
      decoder:{
        readers:["ean_reader"],
      },
    },
    (err)=>{
      if(err){
        console.error(err);
      }
      Quagga.start();
    }
  );
  Quagga.onDetected(handleBarcode);
  return ()=>{
    Quagga.offDetected(handleBarcode);
    Quagga.stop();
  }
  },[])

  return ( 
    <div ref={scannerRef}>
    </div>
   );
}
 
export default BarcodeScanner;