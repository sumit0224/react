import React, { useCallback, useEffect, useState } from 'react'


const App = () => {
  const [value, setValue] = useState("")
  const [length, setLength] = useState(8)


  const genratePassword  = useCallback(()=>{
      let gen = ""
      let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

      for(let i = 0; i< length; i++){
        let randomIndex = Math.floor(Math.random()* char.length)
        gen += char[randomIndex]
      }
      setValue(gen)
  }, []) 
  useEffect(()=>{
    genratePassword()
  }, [length])
  
  return (
    <>
    <h1>RANDOM PASSWORD</h1>
    <input value={value} disabled type="text" />
    <button>COPY</button>
    <input value={length} min={8} max={20} type="range" onChange={(e)=>{setLength(e.target.value)}} />
    </>
  )
}

export default App
