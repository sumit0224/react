import React from 'react'

const Btn = ({name, width, height, color, bgcolor}) => {
  return (
    <button className="btn" style={{width : width,height : height, color: color, backgroundColor: bgcolor, border: "2px solid white"}} >{name}</button>
  )
}

export default Btn
//  props = obj ;
