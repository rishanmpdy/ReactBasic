import { useState } from "react";

function Formevent() {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted " + name);
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <br /><br />

      <button type="submit">Submit</button>

    </form>
  );
}

export default Formevent;