import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Signup from './pages/Signup'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup/>}> </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
    </div>
  )
}

export default App
