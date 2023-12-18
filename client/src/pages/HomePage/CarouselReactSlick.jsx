import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

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


function CarouselReactSlick() {
    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1
    };
    return (
        <div className='w-full mx-28 pt-10 px-60'>
            
            <div className='mt-20'>
                <Slider {...settings}>
                {data.map((d) => (
                    <div className='grid cols-3 grid-rows-3 gap-1'>
                        <div className='row-span-1 row-start-1 pl-32'>
                            <p className='text-red-700 text-2xl'>{d.quoteleft}</p>
                        </div>
                        <div className='row-span-2 row-start-2 px-44'>
                            <div className='flex text-xl'>
                                <p>{d.review}</p>
                            </div>
                        </div>
                        <div className='row-span-1 row-start-1 col-end-4'>
                            <p className='text-red-700 text-2xl'>{d.quoteright}</p>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    )
}

export default CarouselReactSlick