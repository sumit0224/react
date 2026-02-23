import { useState } from 'react'


const App = () => {
  const [inp , setInp] = useState("")
  const [name , setName] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(inp)
    localStorage.setItem("name", inp)
    setInp("")
  }
  const handleChange = (e)=>{
    setInp(e.target.value)
    
  }
  return (
    <div>
      {/* <Btn name={"click"}/>
     <Btn name={"sign up"} width={"200px"}/>
     <Btn name={"login"}/>
     <Btn name={"call me!"} bgcolor={"red"}/>  */}

      <form action="" onSubmit={handleSubmit}>
        <input value={inp}  onChange={handleChange} type="text" placeholder='enter your name' />
        <button type="submit" >save</button>
      </form>
      <button onClick={()=>setName(localStorage.getItem("name"))}>get</button>
      <h1>{name}</h1>
    </div>
  )
}

export default App