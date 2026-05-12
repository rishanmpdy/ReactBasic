function Pro({ namedd, address, arrayobj }) {
  return (
    <div>
      <h1 style={{ color: "red" }}>{namedd}</h1>
      <p>{address}</p>

      {arrayobj?.map((stat) => {
        return (
          <h1 key={stat.id}>
            {stat.name}
            {stat.address}
          </h1>
        );
      })}
    </div>
  );
}
export default Pro;
