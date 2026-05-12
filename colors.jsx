
function Color({ box }) {
  return (
    <div className="p-2 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-[#1da1f2]">UserCard</h2>
      <p className="text-gray-500">{box}</p>
    </div>
  );
}

export default Color