import React from "react";
function Logout() {
  return (
    <button className="flex items-center gap-2 text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700">
      <FiLogOut />
      <span>Logout</span>
    </button>
  );
}
export default Logout;
