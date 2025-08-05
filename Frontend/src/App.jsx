import React from "react";
import Login from "./Login";
import NavBar from "./NavBar";
import Status from "./Status";
import Mark from "./Mark";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Protected from "./Protected";
import AddStudents from "./AddStudents";
const App = () => {
  return (
    <div className="h-full min-h-screen">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
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
        </Route>
      </Routes>
    </div>
  );
};

export default App;
