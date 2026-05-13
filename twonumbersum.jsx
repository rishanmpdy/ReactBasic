import { useState } from "react";

function Twonumsum() {
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const [sums, setsum] = useState(0);

  const handlesubmit = (e) => {
    e.preventDefault();

    const res = Number(num1) + Number(num2);
    setsum(res);
  };

  return (
    <form onSubmit={handlesubmit}>  
      <input
        type="number"
        placeholder="enter first  number"
        value={num1}
        onChange={(e) => setnum1(e.target.value)}
      ></input>
      <br /> <br />
      <input
        type="number"
        placeholder="enter second number"
        value={num2}
        onChange={(e) => setnum2(e.target.value)}
      ></input>
      <br /> <br />
      <button type="submit">Calculate</button>
      <br />
      <h2>{sums}</h2>
    </form>
  );
}
export default Twonumsum;
