import React from 'react'

const Card = (obj) => {
  return (
    <>
      <div className='w-[300px] h-75 bg-amber-400 flex justify-center items-center '>
            <h1>Name : {obj.name}</h1>
      </div>
    </>
  )
}

export default Card
