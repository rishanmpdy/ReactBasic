import { useState, useEffect } from "react";

function Effectcount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count started", count); //count mounted aknnu, onetime run
    return () => {
      console.log("countremoved", count); //  return chythal count removed akunnu
    };
  }, [count]); // state or props el  change vannal  ayal upadte work akum

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>effectcount</button>
    </>
  );
}

export default Effectcount;
