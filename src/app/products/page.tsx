"use client"
import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.net.min";


export default function Home() {

  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xe39de3,
          backgroundColor: 0x0,
          maxDistance: 11.0,
          spacing: 14.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div style={{ background: 0x0, position: "relative" }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          border: "2px solid red",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            perspective: "800px" /* Perspective for 3D effect */,
          }}
        >
          <img
            src="istockphoto-1329882047-612x612-removebg-preview.png"
            // src="istockphoto-1067891296-612x612-removebg-preview.png"
            // src="istockphoto-1943327072-612x612-removebg-preview.png"
            alt=""
            style={{
              width: "300px",
              height: "350px",
              transformStyle: "preserve-3d",
              animation: "rotateVertical 200s infinite linear",
            }}
          />
          <style>
            {`
          @keyframes rotateVertical {
            0% {
              transform: rotateY(0deg);
            }
            100% {
              transform: rotateY(360deg);
            }
          }
        `}
          </style>
        </div>
      </div>

      <div
        ref={myRef}
        style={{
          height: "500px",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <h1>REAL-TIME OBJECT RECOGNITION</h1>
      </div>
    </div>
  );
}
