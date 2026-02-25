import React, { useState } from 'react'

const Search = () => {
    const [inp, setInp] = useState("")
    const submitHandler = (e)=>{
        e.preventDefault()
        setInp("")

    }
    const handleChange = (e)=>{
        setInp(e.target.value)
    }
    return (
        <>
            <div className='flex justify-center gap-5 items-center   rounded-lg w-[300px] text-center'>
                <form action="" onSubmit={submitHandler}>
                    <input  value={inp} type="text" name="city" id="" onChange={handleChange} className='border-none outline-none ' placeholder='enter city name' />
                    <button className='bg-blue-500 text-white uppercase px-5 rounded-lg'>search</button>
                </form>
            </div>
        </>
    )
}

export default Search
