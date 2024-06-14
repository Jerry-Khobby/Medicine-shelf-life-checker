// Ensure this file is under client-side specific directory, e.g., pages, components, or client
import React, {useEffect } from "react";
import dynamic from "next/dynamic";
import { EnumCapturedResultItemType } from "dynamsoft-core";
import { CameraEnhancer, CameraView } from "dynamsoft-camera-enhancer";
import {
  CapturedResultReceiver,
  CaptureVisionRouter,
} from "dynamsoft-capture-vision-router";
import { MultiFrameResultCrossFilter } from "dynamsoft-utility";
import "../cvr"; // Ensure this path is correct and the file exists

const BarcodeScanner = () => {
  const uiContainer = React.useRef(null);
  const resultsContainer = React.useRef(null);
  const pInit = React.useRef(null);
  const pDestroy = React.useRef(null);

  const init = async () => {
    try {
      const cameraView = await CameraView.createInstance();
      const cameraEnhancer = await CameraEnhancer.createInstance(cameraView);
      uiContainer.current.innerText = "";
      uiContainer.current.append(cameraView.getUIElement());

      const router = await CaptureVisionRouter.createInstance();
      router.setInput(cameraEnhancer);

      const resultReceiver = new CapturedResultReceiver();
      resultReceiver.onDecodedBarcodesReceived = (result) => {
        if (!result.barcodeResultItems.length) return;

        resultsContainer.current.textContent = "";
        console.log(result);
        for (let item of result.barcodeResultItems) {
          resultsContainer.current.append(
            `${item.formatString}: ${item.text}`,
            document.createElement("br"),
            document.createElement("hr")
          );
        }
      };
      router.addResultReceiver(resultReceiver);

      const filter = new MultiFrameResultCrossFilter();
      filter.enableResultCrossVerification(
        EnumCapturedResultItemType.CRIT_BARCODE,
        true
      );
      filter.enableResultDeduplication(
        EnumCapturedResultItemType.CRIT_BARCODE,
        true
      );
      filter.setDuplicateForgetTime(
        EnumCapturedResultItemType.CRIT_BARCODE,
        3000
      );
      await router.addResultFilter(filter);

      await cameraEnhancer.open();
      await router.startCapturing("ReadSingleBarcode");

      return { cameraView, cameraEnhancer, router };
    } catch (ex) {
      const errMsg = ex.message || ex;
      console.error(errMsg);
      alert(errMsg);
      throw ex;
    }
  };

  const destroy = async () => {
    if (pInit.current) {
      const { cameraView, cameraEnhancer, router } = await pInit.current;
      router.dispose();
      cameraEnhancer.dispose();
      cameraView.dispose();
    }
  };

  useEffect(() => {
    (async () => {
      if (pDestroy.current) {
        await pDestroy.current;
        pInit.current = init();
      } else {
        pInit.current = init();
      }
    })();

    return () => {
      (async () => {
        await (pDestroy.current = destroy());
        console.log("BarcodeScannerComponent Unmount");
      })();
    };
  }, []);

  return (
    <div>
      <div ref={uiContainer} className="w-32 h-[70%]"></div>
      Results:
      <br />
      <div
        ref={resultsContainer}
        className="w-full h-[10vh] overflow-auto"
      ></div>
    </div>
  );
};

const BarcodeScannerComponent = dynamic(() => Promise.resolve(BarcodeScanner), {
  ssr: false,
});

export default BarcodeScannerComponent;
