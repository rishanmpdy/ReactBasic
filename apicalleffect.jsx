import { useState, useEffect } from "react";

function Apicall() {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <h2>user list</h2>
      {user.map((dat) => (
        <h2 key={dat.id}> {dat.name}</h2>
      ))}
    </div>
  );
}
export default Apicall;
