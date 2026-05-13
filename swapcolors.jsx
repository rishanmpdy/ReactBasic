import React, { useState } from "react";

function SwapColor() {
  const [color, setColor] = useState("red");

  const colorhandle = () => {
    setColor(color === "red" ? "blue" : "red");
  };

  // Determine the opposite color for the second box
  const secondaryColor = color === "red" ? "blue" : "red";

  return (
    <>
      {/* Box 1 uses the state color */}
      <div style={{ backgroundColor: color, width: '120px', height: '40px', marginBottom: '10px' }}></div>
      
      {/* Box 2 uses the opposite color */}
      <div style={{ backgroundColor: secondaryColor, width: '120px', height: '40px' }}></div>

      <button onClick={colorhandle}>Click here to swap colors</button>
    </>
  );
}

export default SwapColor;