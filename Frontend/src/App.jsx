import React from "react";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Status from "./pages/Status";
import Mark from "./pages/Mark";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Protected from "./components/Protected";
import AddStudents from "./pages/AddStudents";
import NA from "./components/NA";
const App = () => {
  return (
    <div className="h-full min-h-screen">
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>

        <Route
          path="/navbar"
          element={
            <Protected>
              <NavBar />
             </Protected>
          }
        >
          <Route path="status" element={<Status />}></Route>
          <Route path="addstudents" element={<AddStudents />}></Route>
          <Route path="" element={<Mark />}></Route>
          <Route path="*" element={<NA />}></Route>
        </Route>
        <Route path="*" element={<NA/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
