import React, { useState } from 'react'



const Form = ({addTodo}) => {
    const [value, setValue] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault()
       
        addTodo(value)
        setValue("")
    }
  return (
    <>
    <div>
        <form action="" onSubmit={submitHandler}>
            <input 
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            type="text"  placeholder='enter your ..task'/>
            <button type='submit'>Add</button>
        </form>
    </div>
    </>
  )
}

export default Form