"use client"
import React from 'react'
import VideoCarousel from '../videoCarousel';
const highlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game changing chip.",
      "Groundbreaking performance.",
    ],
    video: "/assets/videos/firstHighlight.mp4",
    videoDuration: 4,
  },
  // Add more slide objects here if needed
];
const Highlights = () => {
  return (
    <div className='bg-zinc py-4'>
      <div className='screen-max-width my-4'>
        <div className='flex justify-between items-center py-6'>
          <h2 className='text-4xl'>Get The Highlights</h2>
          <ul className="flex gap-4 text-blue">
            <li className='flex-center gap-1 cursor-pointer relative group'>Watch The Film 
              <img src='/assets/images/watch.svg' alt='watch'/>
              <span className='absolute bottom-[-5px] left-0 w-0 h-[1px] bg-blue transition-width duration-300 group-hover:w-full'></span>
            </li>
            <li className='flex-center gap-1 cursor-pointer relative group'>Watch The Event
              <img src='/assets/images/right.svg' alt='right'/>
              <span className='absolute bottom-[-5px] left-0 w-0 h-[1px] bg-blue transition-width duration-300 group-hover:w-full'></span>
            </li>
          </ul>
        </div>
      </div>
      <VideoCarousel/>
    </div>
  )
}
export default Highlights;
