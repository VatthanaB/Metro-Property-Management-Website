import React from 'react'

function Awards2() {
    return (
        <div >
            <div className=' h-96 w-full bg-cover bg-center relative pt-6'>
                <img className='w-full h-full object-cover absolute mix-blend-overlay'
                    src='/images/homepage1.jpg' />
                <div className='items-center items -justify-between lg:gap-36 md:gap-24 sm:gap-20 lg:pt-14 sm:pt-14'>
                    <div className='lg:pl-52 lg:pt-14 sm:pl-14'>
                        <h1 className='text-white font-sans text-[32px] font-normal'>Awards & Partners</h1>
                    </div>

                    <div className='lg:pt-4 sm:pt-2 sm:px-14' >
                        <div className='lg:flex justify-center'>
                            <div className=' flex bg-transparent bg-zinc-300 bg-opacity-75 lg:w-1/2 lg:h-20 
                     sm:w-full sm:h-20
                     '>
                                <div className='flex items-center items -justify-between lg:gap-36 md:gap-24 sm:gap-16 lg:pl-8 sm:pl-4'>
                                    <img src='/images/Award1.png' />
                                    <img src='/images/Award2.png' />
                                    <img src='/images/Award3.png' />
                                    
                                    <img src='/images/Award6.png' />
                                </div>
                            </div>
                            <div className='flex bg-transparent bg-zinc-300 bg-opacity-75 lg:w-1/3 lg:h-20 lg:mt-0
                     sm:w-full sm:h-20 sm:mt-5
                     '>
                                <div className='flex items-center items -justify-between lg:gap-34 lg:pl-10 md:gap-24 sm:gap-36'>
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