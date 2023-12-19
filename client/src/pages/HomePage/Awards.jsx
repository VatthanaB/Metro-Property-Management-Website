import React from 'react'

function Awards() {
    return (
        <div >
            <div className=' h-96 w-full bg-cover bg-center relative pt-6'>
                <img className='w-full h-full object-cover absolute mix-blend-overlay'
                    src='/images/homepage1.jpg' />
                <div className='lg:flex items-center items -justify-between lg:gap-36 md:gap-24 sm:gap-20'>
                    <div className='absolute pl-40 sm:pl-16 pt-12 sm:pt-12'>
                        <h1 className='text-white font-sans text-[32px] font-normal'>Awards & Partners</h1>
                    </div>
                    
                    <div className='bg-transparent bg-zinc-300 bg-opacity-75 lg:w-5/6 lg:h-24 
                     sm:w-5/6 sm:h-40
                     absolute left-1/2 top-1/4 -translate-x-1/2 - translate-y-1/2'>
                        <div className='lg:flex items-center items -justify-between lg:gap-36 md:gap-24 sm:gap-20'>
                            <div className='flex  items-center items -justify-between lg:gap-36 md:gap-24 sm:gap-14'>
                                <img src='/images/Award1.png' />
                                <img src='/images/Award2.png' />
                                <img src='/images/Award3.png' />
                                <img src='/images/Award4.png' />
                            </div>

                            <div className='flex  items-center items -justify-between lg:gap-36 md:gap-24 sm:gap-32'>
                                <img src='/images/Award5.png' />
                                <img src='/images/Award6.png' />
                                <img src='/images/Award7.png' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Awards