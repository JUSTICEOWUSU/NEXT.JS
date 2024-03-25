import React from 'react'

const CardStyle:React.CSSProperties = {
  width: "400px",
  height: "400px",
  display: "flex",
  background: "#000",
  margin:"auto",
  color:"#fff",
  alignItems: "center",
  
}

function Card() {
  return (
    <div style={CardStyle}>Card</div>
  )
}

export default Card
