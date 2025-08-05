import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation, Link} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const NavBar = () => {
  const navigate = useNavigate();
  const [Page, setPage] = useState(true);
  const location = useLocation();
  const allPaths = [
    { path: "/navbar", label: "Mark Attendance" },
    { path: "/navbar/addstudents", label: "Add Students" },
    { path: "/navbar/status", label: "See Report" },
  ];

  const otherPaths = allPaths.filter((page) => page.path !== location.pathname);

  const handleLogout =async()=>{
    try{
      const res = await axios.delete("http://localhost:4000/auth/logout")
      console.log(res)
      navigate("/")
      toast.info("Logout Successfully")
    }catch(err){console.log(err)}
  }

  return (
    <div className="h-screen flex flex-col">
      <nav className="w-full flex bg-gray-800 text-gray-200 justify-between ">
        <div className="font-bold text-4xl mx-10 my-5">ClassTrack</div>
        <div>
          <Link to={`${otherPaths[0].path}`}>
          <button className="hover:bg-gray-900 border w-52 border-gray-200 mx-5 my-5 text-xl p-3 rounded-xl">
            {`${otherPaths[0].label}`}
          </button>
          </Link>
           <Link to={`${otherPaths[1].path}`}>
          <button className="hover:bg-gray-900 border w-52 border-gray-200 mx-5 my-5 text-xl p-3 rounded-xl">
             {`${otherPaths[1].label}`}
          </button>
          </Link>
          <button className=" w-26 bg-red-700 ml-5 mr-10 my-5 text-xl p-3 rounded-xl hover:bg-red-800" onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
