import { useState } from "react";

function Togglebtn() {

  const [status, setStatus] = useState(false);

  return (
    <>
      <h1>{status ? "ON" : "OFF"}</h1>
      <button onClick={() => setStatus(!status)}>
        Toggle
      </button>
    </>
  );
}

export default Togglebtn;