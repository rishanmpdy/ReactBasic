import { useState, useEffect } from "react";

function Effectcount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count started", count); 
    return () => {
      console.log("countremoved", count); 
    };
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>effectcount</button>
    </>
  );
}

export default Effectcount;
