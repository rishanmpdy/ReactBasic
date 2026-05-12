import { useState } from "react";

function Condintionallogin() {
  const [isLogIn, setLogined] = useState(true);

  function EventHandling() {
    alert("successfully logined");
  }

  return (
    <>
      {isLogIn ? <h1>Welcome</h1> : <h1>Please login  </h1>}
      <button onClick={() => setLogined(!isLogIn)}>Toggle Login</button>
      <button onClick={() => setLogined(isLogIn ? false : true)}> Change Login</button>
      <button onClick={EventHandling}>Show Alert EventHandling </button>
    </>
  );
}
export default Condintionallogin;
