import React from 'react'
import axios from 'axios'
const Protected = ({children}) => {
    axios.defaults.withCredentials = true;
    const handleAuth = async()=>{
        try{
            const res = await axios.post("/auth/protected")
        }
    }
  return (
    <div>Protected</div>
  )
}

export default Protected