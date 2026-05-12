import { useState } from "react";

export default function Previouscounter() {
  const [count, setcounter] = useState(0);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => setcounter((prev) => prev + 1)}>
        increase pre+
      </button>
      <button
        onClick={() => setcounter((prev) => { return prev > 0 ? prev - 1 : 0;
          })
        }
      >
        decrese pre-
      </button>
    </>
  );
}
