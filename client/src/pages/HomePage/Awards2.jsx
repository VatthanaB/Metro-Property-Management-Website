import React from 'react'

function Awards2() {
    return (
        <div >
            <div className='w-full h-80 lg:h-96 lg:w-full bg-cover bg-center relative lg:space-y-6'>
                <img className='hidden lg:block md:block w-full h-full object-cover lg:absolute mix-blend-overlay'
                    src='/images/homepage1.jpg' />
                    <img className='lg:hidden md:hidden object-cover absolute mix-blend-overlay'
                    src='/images/HompageMobile.jpg' />
                
                <div className='items-center items -justify-between lg:gap-36 md:gap-24 sm:gap-20 lg:pt-14 sm:pt-14'>
                    <div className='pl-0 lg:pl-52 lg:pt-14 sm:pl-14'>
                        <h1 className='text-white font-sans text-[22px] lg:text-[32px] font-normal'>Awards & Partners</h1>
                    </div>

                    <div className='w-full pt-2 px-0 lg:pt-4 sm:pt-2 sm:px-14' >
                        <div className='lg:flex justify-center'>
                            <div className='flex relative bg-transparent bg-zinc-300 bg-opacity-75 w-full lg:w-1/2 lg:h-20 
                     sm:w-full sm:h-20
                     '>
                                <div className='flex items-center items -justify-between gap-0 px-0 lg:gap-36 md:gap-24 sm:gap-16 lg:pl-8 sm:pl-4'>
                                    <img src='/images/Award1.png' />
                                    <img src='/images/Award2.png' />
                                    <img src='/images/Award3.png' />
                                    
                                    <img src='/images/Award6.png' />
                                </div>
                            </div>
                            <div className='flex relative bg-transparent bg-zinc-300 bg-opacity-75 lg:w-1/3 lg:h-20 lg:mt-0
                     sm:w-full sm:h-20 mt-3 sm:mt-5
                     '>
                                <div className='flex items-center items -justify-between gap-6 lg:gap-34 lg:pl-10 md:gap-24 sm:gap-36'>
                                <img src='/images/Award4.png' />
                                    <img src='/images/Award5.png' />
                                    
                                    <img src='/images/Award7.png' />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Awards2