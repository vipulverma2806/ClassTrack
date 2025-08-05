import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate,Navigate } from "react-router-dom";
import { toast } from "react-toastify";
const Protected = ({ children }) => {
  axios.defaults.withCredentials = true;
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleAuth = async() => {
      try {
        const res = await axios.get("http://localhost:4000/auth/protect")
        setAuth(true);
      } catch (err) {
        console.log(err);
        setAuth(false);
        toast.error("You are not Autorised. Please Log In");
        navigate("/");
      }
    };

    handleAuth();
  }, []);

  
  if (auth === true) return children;
  if (auth === null ) return null ;
//   if (auth === false) return <Navigate to ="/"/>
};

export default Protected;
