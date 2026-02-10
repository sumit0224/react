import { useState } from "react"
import Card from "./component/Card"

const App = () => {
  
  const[isLoging, setIsLoging] = useState(false)
  const links = [{value: "home", href: "#"},{value: "about", href:"#" },{value: "contact", href: "#"}, {value: `${isLoging? "profile" : "signup" }`, href:"#", action: ()=>{setIsLoging(!isLoging)}}]
  const user = ["anuj", "sumit", "avtar", "abhay"]
  return (
    <>
      <div className="w-full h-20 bg-blue-600 text-white text-lg flex justify-between items-center  px-10 py-2">
        <div>LOGO</div>
        <div className="flex gap-6 uppercase ">
          {links.map((item, index)=>{
            
            return <a key={item.value} onClick={item.action} href={item.href}>{item.value}</a>
          })}
        </div>
      </div>
      <div className="w-full h-80 bg-zinc-400 flex  justify-evenly items-center">
          {user.map((item, index)=>{
            return <Card key={index} name={item}/>

          })}
      </div>

    </>
  )
}

export default App
