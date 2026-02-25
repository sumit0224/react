import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between uppercase px-5 py-2 items-center'>
        <div className='text-blue-500 font-bold text-2xl'>Weather App</div>
        <div className='flex gap-10 '>
            <div>home</div>
            <div>contact</div>
            <div>about</div>
        </div>
      </div>
    </>
  )
}

export default Navbar
