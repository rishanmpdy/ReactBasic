import { useState } from "react";

function Validation() {
  const [name, setname] = useState("");
  const [error, seterror] = useState("");

  function handlesubmit(e) {
    e.preventDefault();

    if (name === "") {
      seterror("enter somthing");
    } else {
      seterror("");
      alert("form submitted");
    }
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="enter here "
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <br /> <br />
        <button type={"submit"}>submit form validation /</button>
        <br />
        <p>{error}</p>
      </form>
    </>
  );
}

export default Validation;
