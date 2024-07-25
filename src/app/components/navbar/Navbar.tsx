"use client"
import React from 'react'
import {navLists} from "@/constants/index"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Navbar = () => {
useGSAP(()=>{
  const tl = gsap.timeline()
 tl.from(".logo",{
y:-300,
delay:0.1,
duration:0.5,
opacity:0,
 })
 tl.from(".navigations div",{
  y:-300,
  delay:0.1,
  duration:0.1,
  stagger:0.2,
  opacity:0,
 })
 tl.from(".icons img",{
  y:-300,
  delay:0.1,
  duration:0.1,
  stagger:0.2,
  opacity:0,
 })
},[])
  return (
    <nav className='screen-max-width flex justify-between items-center mt-4 nav-heignt'>
       <img src="/assets/images/apple.svg" alt='apple logo' className=' w-6 logo'/>
       <ul className='hidden sm:flex-center gap-4 navigations'>
        {navLists.map((navItem)=>{
          return(
          <div key={navItem} className='relative group gap-4'>
            <li className='cursor-pointer text-xl'>{navItem}</li>
            <span className='absolute top-110 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
          </div>)
        })}
       </ul>
       <div className='flex-center gap-4 icons'>
       <img src='/assets/images/search.svg' alt='search icon' className='w-6 cursor-pointer hover:bg-red-400'/>
       <img src='/assets/images/bag.svg' alt='bag icon' className=' w-6'/>
       </div>
    </nav>
  )
}
export default Navbar