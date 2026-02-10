
import { useState } from "react";

function App() {
  
const [count, setCount] = useState(0)

const minus = ()=> setCount(count-1)
const plus = ()=> setCount(count+1)
  return (
    <>
    <h1> counter : {count}</h1>
    <button onClick={plus}>plus</button>
    <button onClick={minus}>minus</button>

    </>
    
  )
}

export default App
