import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <nav style={{display : 'flex' , justifyContent: "space-between"}}>
        <a href="/register"> hello</a>
      <Link to={"/"}><div>home</div></Link>
      <Link to={"/login"}>  <div>login</div></Link>
      <Link to={"/register"}> <div>register</div></Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>

    </div>
  )
}

export default App
