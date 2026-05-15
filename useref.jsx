import React, { useRef } from 'react';

export default function UseRefDem() {
  const myNumber = useRef(0);

  function handleclick() {
    myNumber.current += 1;
    alert('the number is now ' + myNumber.current);
  }
  return (
    <>
      <h1>{useRef}</h1>
      <button onClick={handleclick}>count+</button>;
    </>
  );
}
