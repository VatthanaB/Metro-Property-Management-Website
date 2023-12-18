import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";

const Carousel2 = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-center pt-10'>



        <CarouselProvider
        
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          totalSlides={3}
        >
<div className='relative items-stretch'>
<Slider>
            <Slide index={0}>
            
              <div>
              <div className='grid cols-3 grid-rows-3 gap-1'>
                        <div className='row-span-1 row-start-1'>
                            <p className='text-red-700 text-2xl'>{<BiSolidQuoteAltLeft />}</p>
                        </div>
                        <div className='row-span-2 row-start-2'>
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
              
            </Slide>
            <Slide index={1}>
              <div>
                <p className='text-xl'>2 Metro Property Management provided an excellent service
                  for my rental property.Their team demonstrated professionalism
                  and experties, ensuring competitive rental pricing and efficient
                  tenant screening.
                </p>
              </div>
            </Slide>
            <Slide index={2}>
              <div>
                <p className='text-xl'>AA Metro Property Management provided an excellent service
                  for my rental property.Their team demonstrated professionalism
                  and experties, ensuring competitive rental pricing and efficient
                  tenant screening.
                </p>
              </div>
            </Slide>
          </Slider>
</div>
          <div >
          <div className='flex items-center w-full gap-x-96'>
            <div className='inset-0 flex items-center justify-center p-2'>
              <ButtonBack className='text-red-700 text-3xl font-bold'>{<HiChevronLeft />}</ButtonBack>
            </div>
            <div className='inset-0 flex items-center justify-center p-2'>
              <ButtonNext className='text-red-700 text-3xl font-bold'>{<HiChevronRight />}</ButtonNext>
            </div>
          </div>    
          </div>
               
          


        </CarouselProvider>
      </div>
    </div>
  );
}

export default Carousel2