import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";

const data = [
    {
        quoteleft: <BiSolidQuoteAltLeft />,
        review: 'Metro Property Management provided an excellent service for my rental property.Their team demonstrated professionalism and experties, ensuring competitive rental pricing and efficient tenant screening.',
        quoteright: <BiSolidQuoteAltRight />
    },
    {
        quoteleft: <BiSolidQuoteAltLeft />,
        review: 'Metro Property Management provided an excellent service for my rental property.Their team demonstrated professionalism and experties, ensuring competitive rental pricing and efficient tenant screening.',
        quoteright: <BiSolidQuoteAltRight />
    },
    {
        quoteleft: <BiSolidQuoteAltLeft />,
        review: 'Metro Property Management provided an excellent service for my rental property.Their team demonstrated professionalism and experties, ensuring competitive rental pricing and efficient tenant screening.',
        quoteright: <BiSolidQuoteAltRight />
    },



]


function ClientSay() {
    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1
    };

    return (
        <div>
            <div className='flex justify-center pt-10 px-60'>
                <div className='grid grid-rows-2 gap-1 mx-28'>
                    <div>
                        <h2 className='text-[28px]'>What Our Client Says</h2>
                    </div>

                    <div className='grid cols-3 grid-rows-3 gap-1'>
                        <div className='row-span-1 row-start-1 pl-32'>
                            <p className='text-red-700 text-2xl'>{<BiSolidQuoteAltLeft />}</p>
                        </div>
                        <div className='row-span-2 row-start-2 pl-44'>
                            <div className='overflow-hidden relative'>
                                <div className='flex'>
                                    <div>
                                        <p className='text-xl'>Metro Property Management provided an excellent service
                                            for my rental property.Their team demonstrated professionalism
                                            and experties, ensuring competitive rental pricing and efficient
                                            tenant screening.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row-span-1 row-start-3'>
                            <p className='text-red-700 text-2xl'>{<BiSolidQuoteAltRight />}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientSay