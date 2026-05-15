import React, { useState } from "react";

function SwapColor() {
  const [color, setColor] = useState("red");

  const colorhandle = () => {
    setColor(color === "red" ? "blue" : "red");
  };


  const secondaryColor = color === "red" ? "blue" : "red";

  return (
    <>
 
      <div style={{ backgroundColor: color, width: '120px', height: '40px', marginBottom: '10px' }}></div>
      

      <div style={{ backgroundColor: secondaryColor, width: '120px', height: '40px' }}></div>

      <button onClick={colorhandle}>Click here to swap colors</button>
    </>
  );
}

export default SwapColor;