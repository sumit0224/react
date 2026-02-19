import React from 'react'
import Cookies from 'js-cookie'
const App = () => {

  Cookies.set("User", "abhay")
  console.log(Cookies.get("User"))
  Cookies.remove("User")
  console.log(Cookies.get("User"))
  return (
    <div>App</div>
  )
}

export default App