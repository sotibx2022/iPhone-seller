"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
const Hero = () => {
  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from(".heroContainer h1",{
      x:-1000,
      duration:1,
      delay:1,
      opacity:0,
    })
    tl.from(".heroContainer video",{
      scale:0,
      duration:1,
      delay:1,
    })
    tl.from(".heroContainer button",{
      top:1000,
      opacity:0,
      duration:1,
      delay:1,
    })
  },[])
  const findScreenSize =() =>{
    if(window.innerWidth>760){
      setSmallScreen(false)
    }else{
      setSmallScreen(true)
    }
  }
  window.addEventListener('resize',findScreenSize);
  useEffect(()=>{
    findScreenSize()
  },[])
  const[smallScreen, setSmallScreen] = useState(false);
  return (
    <div className='screen-max-width min-h-[90vh] flex-center flex-col heroContainer'>
      <h1 className='flex-center text-xl sm:text-4xl mb-1'>iPhone 15 Pro Max</h1>
        <video autoPlay muted playsInline={true} src={smallScreen? "/assets/videos/smallHero.mp4" :"/assets/videos/hero.mp4"} className='max-h-[50vh]'/>
        <button className='btn'>Buy Now</button>
    </div>
  )
}
export default Hero