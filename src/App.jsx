import React, { useEffect } from 'react'
import Navbar from '#components/Navbar'
const App = () => {
  useEffect(()=>{
    const enterFullScreen = ()=>{
      const elem = document.documentElement
      if(elem.requestFullscreen){
        elem.requestFullscreen();
      }
      else if(elem.webkitRequestFullscreen){
        elem.webkitRequestFullscreen();
      }
      else if(elem.msRequestFullscreen){
        elem.msRequestFullscreen();
      }
    }
    enterFullScreen()
  },[])
  
  return (
    <main>
      <Navbar />
    </main>
  )
}

export default App