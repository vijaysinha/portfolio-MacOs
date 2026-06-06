import React, { useEffect } from 'react'

import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
gsap.registerPlugin(Draggable)

import {Navbar, Welcome, Dock} from '#components'
import { Terminal, Safari } from '#window'



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
      <Terminal/>
      <Safari/>
    </main>
  )
}

export default App