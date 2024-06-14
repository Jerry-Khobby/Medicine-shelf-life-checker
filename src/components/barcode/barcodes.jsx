"use client";
import React, { useRef, useEffect } from 'react';
import { CameraEnhancer, PlayCallbackInfo } from "dynamsoft-camera-enhancer";
import { TextResult, BarcodeReader } from "dynamsoft-javascript-barcode";

const BarcodeScannerComponent = ({
  isActive,
  children,
  interval,
  license,
  onInitialized,
  onScanned,
  onPlayed,
  onClosed
}) => {
  const mounted = useRef(false);
  const container = useRef(null);
  const enhancer = useRef(null);
  const reader = useRef(null);
  const decoding = useRef(false);
  const scanInterval = useRef(null);

  useEffect(() => {
    const init = async () => {
      if (typeof window === "undefined") return; // Ensure this runs only in the browser
      if (BarcodeReader.isWasmLoaded() === false) {
        BarcodeReader.license = license = "DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ==";
        BarcodeReader.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@9.6.11/dist/";
      }
      reader.current = await BarcodeReader.createInstance();
      enhancer.current = await CameraEnhancer.createInstance();
      await enhancer.current.setUIElement(container.current);
      enhancer.current.on("played", (playCallbackInfo) => {
        if (onPlayed) {
          onPlayed(playCallbackInfo);
        }
        startScanning();
      });
      enhancer.current.on("cameraClose", () => {
        if (onClosed) {
          onClosed();
        }
      });
      enhancer.current.setVideoFit("cover");
      if (onInitialized) {
        onInitialized(enhancer.current, reader.current);
      }
      toggleCamera();
    };
    if (!mounted.current) {
      init();
    }
    mounted.current = true;
    return () => {
      if (enhancer.current) enhancer.current.close();
      if (reader.current) reader.current.destroy();
      if (scanInterval.current) clearInterval(scanInterval.current);
    };
  }, [license, onInitialized, onPlayed, onClosed]);

  const toggleCamera = () => {
    if (mounted.current) {
      if (isActive) {
        enhancer.current?.open(true);
      } else {
        stopScanning();
        enhancer.current?.close();
      }
    }
  };

  useEffect(() => {
    toggleCamera();
  }, [isActive]);

  const startScanning = () => {
    const decode = async () => {
      if (!decoding.current && reader.current && enhancer.current) {
        decoding.current = true;
        const results = await reader.current.decode(enhancer.current.getFrame());
        if (onScanned) {
          onScanned(results);
        }
        decoding.current = false;
      }
    };
    scanInterval.current = setInterval(decode, interval || 40);
  };

  const stopScanning = () => {
    clearInterval(scanInterval.current);
  };

  return (
    <div ref={container} style={{ position: "relative", width: "100%", height: "100%" }}>
      <div className="dce-video-container"></div>
      {children}
    </div>
  );
};

export default BarcodeScannerComponent;
