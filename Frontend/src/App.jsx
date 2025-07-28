import React from 'react'
import Login from './Login'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/Status" element={<Status/>}></Route>
        <Route path="/Mark" element={<Mark/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App