import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'

const Home = () => {
  return (
    <div>
      <Navbar/>
     <div className='flex justify-center  mt-10'>
        <Search/>
     </div>
    </div>
  )
}

export default Home
