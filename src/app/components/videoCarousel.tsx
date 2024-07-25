"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
const hightlightsSlides = [
    {
        id: 1,
        textLists: [
            "Enter A17 Pro.",
            "Game‑changing chip.",
            "Groundbreaking performance.",
        ],
        video: "/assets/videos/firstHighlight.mp4",
        videoDuration: 4,
    },
    {
        id: 2,
        textLists: ["Titanium.", "So strong. So light. So Pro."],
        video: "/assets/videos/secondHighlight.mp4",
        videoDuration: 5,
    },
    {
        id: 3,
        textLists: [
            "iPhone 15 Pro Max has the",
            "longest optical zoom in",
            "iPhone ever. Far out.",
        ],
        video: "/assets/videos/thirdHighlight.mp4",
        videoDuration: 2,
    },
    {
        id: 4,
        textLists: ["All-new Action button.", "What will yours do?."],
        video: "/assets/videos/fourthHighlight.mp4",
        videoDuration: 3.63,
    },
];
const VideoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoReference = useRef<HTMLVideoElement[]>([]);
    const sliderContainerReference = useRef<HTMLDivElement>(null);
    const sliderItemReference = useRef<HTMLDivElement[]>([]);
    useEffect(() => {
        // GSAP Timeline for handling animation
        if (sliderContainerReference.current && sliderItemReference.current[currentIndex]) {
            const sliderItemWidth = sliderItemReference.current[currentIndex].offsetWidth;
            const videoDuration = hightlightsSlides[currentIndex].videoDuration;
            gsap.to(".activeSlideItem", {
                x: -(sliderItemWidth*currentIndex),
                opacity:1,
                duration: videoDuration,
                ease: "power2.out",
            })
        }
    }, [currentIndex]);
    useEffect(() => {
        if (videoReference.current[currentIndex]) {
            if (isPlaying) {
                videoReference.current[currentIndex].play();
            } else {
                videoReference.current[currentIndex].pause();
            }
        }
    }, [isPlaying, currentIndex]);
    const handleVideoEnd = () => {
        if (currentIndex < hightlightsSlides.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setCurrentIndex(0);
        }
    };
    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };
    const getButtonImage = () => {
        if (currentIndex === hightlightsSlides.length - 1) {
            return "/assets/images/replay.svg";
        }
        return isPlaying ? "/assets/images/pause.svg" : "/assets/images/play.svg";
    };
    const handleNextVideo = (index: number) => {
        setCurrentIndex(index);
    };
    return (
        <div className='screen-max-width' ref={sliderContainerReference}>
            <div className="videosContainer flex justify-center overflow-x-hidden gap-8">
                {hightlightsSlides.map((slideItem, index) => (
                    <div
                        key={slideItem.id}
                        ref={(el) => {
                            if (el) sliderItemReference.current[index] = el;
                        }}
                        className={`${currentIndex === index ? "activeSlideItem" : "slideItem"}`}
                    >
                        <div className='absolute top-0 left-[10px]'>
                            {slideItem.textLists.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                        </div>
                        <video
                            className='w-full text-center rounded-md'
                            ref={(el) => {
                                if (el) videoReference.current[index] = el;
                            }}
                            onEnded={handleVideoEnd}
                        >
                            <source src={slideItem.video} type='video/mp4' />
                        </video>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center gap-4'>
                <div className='bg-black p-4 my-4 w-[300px] rounded-md flex justify-center items-center gap-4'>
                    {hightlightsSlides.map((_, index) => (
                        <span
                            key={index}
                            className={currentIndex === index ? "activeSlideIndicator slideIndicatorItem" : "slideIndicatorItem"}
                            onClick={() => handleNextVideo(index)}
                        ></span>
                    ))}
                </div>
                <div
                    className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-black cursor-pointer'
                    onClick={togglePlayPause}
                >
                    <img src={getButtonImage()} />
                </div>
            </div>
        </div>
    );
};
export default VideoCarousel;
