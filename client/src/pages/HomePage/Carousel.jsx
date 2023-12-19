import React, { useState, useEffect } from 'react'
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";

const Carousel = ({ children: comments, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0)
    const prev = () => setCurr((curr) => (curr === 0 ? comments.length - 1 :
        curr - 1))
    const next = () => setCurr((curr) => (curr === comments.length - 1 ? 0 :
        curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])
    return (
        <div >

            <div className='flex overflow-hidden text-xl'>
                {comments}
            </div>

            <div className='inset-0 flex items-center justify-center p-2'>
                <button onClick={prev} className='text-red-700 text-3xl font-bold
                p-1'>
                    {<HiChevronLeft />}
                </button>
                <div>
                    <div className='flex items-center justify-center gap-2'>
                        {comments.map((s, i) => (
                            <div key={i} className={`transition-all w-1.5 h-1.5
                         bg-red-700 rounded-full ${curr === i ? "p-0.5" :
                                    "bg-opacity-50"}`} />
                        ))}
                    </div>
                </div>
                <button onClick={next} className='text-red-700 text-3xl font-bold p-1'>
                    {<HiChevronRight />}
                </button>
            </div>

        </div>
    )
}

export default Carousel