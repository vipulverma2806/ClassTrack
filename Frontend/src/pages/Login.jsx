import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const [auth, setAuth] = useState(null);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const res = await axios.get("http://localhost:4000/auth/protect");
        setAuth(true);
        navigate("/navbar");
      } catch (err) {
        console.log(err);
        setAuth(false);
      }
    };
    handleAuth();
  }, []);

  //------------------Login-------------------
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/auth/login", login);
      console.log(res);
      setLogin({
        email: "",
        password: "",
      });
      toast.success("Login successful.");
      if (res.status === 200) return navigate("/navbar");
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center bg-">
      <div className="hidden lg:block w-1/2">
        <h1 className="font-bold italic text-8xl text-gray-100 ">ClassTrack</h1>
      </div>

      <form
        onSubmit={handleLogin}
        className="bg-gray-800 flex flex-col p-6  rounded-2xl space-y-5 max-w-sm w-1/2"
      >
        <h1 className="text-gray-100 text-center text-2xl font-bold">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="placeholder-gray-400 w-full text-gray-200 p-3 rounded-2xl  bg-gray-700"
          value={login.email}
          onChange={(e) => setLogin({ ...login, email: e.target.value.trim() })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="placeholder-gray-400 text-gray-200  w-full p-3 rounded-2xl  bg-gray-700"
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          required
        />
        <button
          type="submit"
          className="bg-blue-700 rounded-2xl p-3 hover:bg-blue-800 hover:cursor-pointer text-white w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
