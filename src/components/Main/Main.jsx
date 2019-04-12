import React from 'react'
import MainImg from '../../photos/main_image.jpg'
import 'tachyons'
import './Main.css'
function Main() {
    const paragraphStyle={
        position: "absolute",
        top: "340px",
        left: "400px",
        fontSize: "48px",
        width: "577px",
        color: "white",
    }
  return (
    <div>
      <img id="main-img" src={MainImg} alt="Main" className="w-100 h600px"/>
      <h2 style={paragraphStyle} className="bg-black-40 pa3 ttc shadow-4  ">전 세계 크리에이터들의 전시가 한눈에!</h2> 
    </div>
  )
}

export default Main
