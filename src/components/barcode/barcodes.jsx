"use client";
import { CameraEnhancer,PlayCallbackInfo} from "dynamsoft-camera-enhancer";
import { TextResult, BarcodeReader } from "dynamsoft-javascript-barcode";
import React, { useEffect, useRef } from "react";


const BarcodeScanner = (props) => {
  const mounted = useRef(false);
  const container = useRef(null);
  const enhancer = useRef();
  const reader = useRef();
  const interval = useRef(null);
  const decoding = useRef(false);

  useEffect(() => {
    const init = async () => {
      if (BarcodeReader.isWasmLoaded() === false) {
        if (props.license) {
          BarcodeReader.license = props.license;
        } else {
          BarcodeReader.license = "DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ==";
        }
        BarcodeReader.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@9.6.11/dist/";
      }
      reader.current = await BarcodeReader.createInstance();
      enhancer.current = await CameraEnhancer.createInstance();
      await enhancer.current.setUIElement(container.current);
      enhancer.current.on("played", (playCallbackInfo) => {
        if (props.onPlayed) {
          props.onPlayed(playCallbackInfo);
        }
        startScanning();
      });
      enhancer.current.on("cameraClose", () => {
        if (props.onClosed) {
          props.onClosed();
        }
      });
      enhancer.current.setVideoFit("cover");
      if (props.onInitialized) {
        props.onInitialized(enhancer.current, reader.current);
      }

      toggleCamera();
    };

    if (mounted.current === false) {
      init();
    }
    mounted.current = true;
  }, []);

  const toggleCamera = () => {
    if (mounted.current === true) {
      if (props.isActive === true) {
        enhancer.current?.open(true);
      } else {
        stopScanning();
        enhancer.current?.close();
      }
    }
  };

  useEffect(() => {
    toggleCamera();
  }, [props.isActive]);

  const startScanning = () => {
    const decode = async () => {
      if (decoding.current === false && reader.current && enhancer.current) {
        decoding.current = true;
        const results = await reader.current.decode(enhancer.current.getFrame());
        if (props.onScanned) {
          props.onScanned(results);
        }
        decoding.current = false;
      }
    };
    if (props.interval) {
      interval.current = setInterval(decode, props.interval);
    } else {
      interval.current = setInterval(decode, 40);
    }
  };

  const stopScanning = () => {
    clearInterval(interval.current);
  };

  return (
    <div ref={container} style={{ position: "relative", width: "100%", height: "100%" }}>
      <div className="dce-video-container"></div>
      {props.children}
    </div>
  );
};

export default BarcodeScanner;