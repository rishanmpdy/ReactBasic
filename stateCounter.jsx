import { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setcount(count + 1)}> click</button>
    </>
  );
}
export default Counter;
