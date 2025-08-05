import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const [Page, setPage] = useState(true);
  const handlePage = () => {
    if (Page) {
      console.log("1");
      navigate("/navbar/Status");

      return setPage(false);
    }
    navigate("/navbar");
    return setPage(true);
  };

 
  return (
    <div className="h-screen flex flex-col">
      <nav className="w-full flex bg-gray-800 text-gray-200 justify-between ">
        <div className="font-bold text-4xl mx-5 my-5">Admin Panel</div>
        <div>
          <button
            className="border border-gray-200 mx-5 my-5 text-xl p-3 rounded-xl"
            onClick={handlePage}
          >
            {Page ? "See Report" : "Mark Attendance"}
          </button>
          <button className="border border-gray-200 mx-5 my-5 text-xl p-3 rounded-xl" onClick={()=> navigate("/navbar/addstudents")}>Add Students</button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
