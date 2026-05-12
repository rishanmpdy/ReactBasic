//ListExample

function ListExample() {
  const users = [
    { id: 1, name: "rishan" },
    { id: 2, name: "ashid" },
    { id: 3, name: "nashid" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default ListExample