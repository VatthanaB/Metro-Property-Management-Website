import React from 'react'

function Awards() {
    return (
        <div >
            <div className=' h-96 w-full bg-cover bg-center relative pt-6'>
                <img className='w-full h-full object-cover absolute mix-blend-overlay'
                    src='/images/homepage1.jpg' />
                <div>
                    <div className='absolute pl-40 pt-12'>
                        <h1 className='text-white font-sans text-[32px] font-normal'>Awards & Partners</h1>
                    </div>                    
                    <div className='bg-transparent bg-zinc-300 bg-opacity-75 w-5/6 h-24 absolute left-1/2 top-1/4 -translate-x-1/2 - translate-y-1/2'>
                        <div className='flex items-center items -justify-between gap-36'>
                        <img src='/images/Award1.png'/>
                        <img src='/images/Award2.png'/>
                        <img src='/images/Award3.png'/>
                        <img src='/images/Award4.png'/>
                        <img src='/images/Award5.png'/>
                        <img src='/images/Award6.png'/>
                        <img src='/images/Award7.png'/>
                        </div>
                        
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Awards