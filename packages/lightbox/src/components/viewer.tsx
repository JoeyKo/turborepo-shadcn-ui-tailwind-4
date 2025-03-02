"use client";

import React, { useEffect, useRef } from "react";
import { Engine, MeshBuilder, Scene } from "@babylonjs/core";
import initWasm, { wasm_serialize } from "@/assets/js/serialize_json_wasm.js"  
const LightboxViewer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const engine = new Engine(
      canvasRef.current,
      true,
      {
        preserveDrawingBuffer: true,
      },
      true
    );
    const scene = new Scene(engine);

    scene.createDefaultCameraOrLight(true, true, true);

    MeshBuilder.CreateBox("box", { size: 0.1 }, scene);

    engine.runRenderLoop(() => {
      scene.render();
    });

    initWasm().then(() => {
      console.log("Wasm initialized");});
    return () => {
      engine.dispose();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%" }}
      ></canvas>
    </>
  );
};

export { LightboxViewer };
