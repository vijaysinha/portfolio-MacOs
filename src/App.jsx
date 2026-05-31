import React, { useEffect } from 'react'
import {Navbar, Welcome, Dock} from '#components'


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
      <Welcome />
      <Dock/>
    </main>
  )
}

export default App