"use client"
import React from 'react'
import { useRef,useEffect } from 'react'

function Canv() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.moveTo(0,0)
        // context.fillRect(0,0, 300,200)
        context.lineTo(300, 200)
        context.stroke()
    },[])
  return (
      <div>
          <canvas ref={canvasRef} style={{width:"500px",height:"300px"}} ></canvas>
    </div>
  )
}

export default Canv
