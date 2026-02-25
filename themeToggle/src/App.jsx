import React, { useEffect, useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme")|| "light")

  useEffect(()=>{
    document.body.className = theme
    localStorage.setItem("theme", theme)
  }, [theme])


  const toggle = ()=>{
    setTheme(theme==="light"? "dark": "light")

  }
  return (
    <div>
      <h1>React theme toggle</h1>
      <button onClick={toggle} className={theme}>
        {theme === "light"? "🌑 Dark": "☀️ Light" }
      </button>
    </div>
  )
}

export default App
