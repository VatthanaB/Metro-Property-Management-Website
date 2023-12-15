import React from 'react'

function Awards() {
    return (
        <div >
            <div className=' h-96 w-full bg-cover bg-center relative pt-6'>
                <img className='w-full h-full object-cover absolute mix-blend-overlay'
                    src='/images/homepage1.jpg' />
                <div>
                    <div>
                        <h1 className='text-white text-4xl font-bold'>Awards & Partners</h1>
                    </div>                    
                    <div className='bg-slate-300 w-auto h-24 absolute left-1/2 top-1/4 -translate-x-1/2 - translate-y-1/2'>
                        <div className='flex items -justify'>
                        <h3>Partner1</h3>
                        <h3>Partner1</h3>
                        <h3>Partner1</h3>
                        <h3>Partner1</h3>
                        <h3>Partner1</h3>
                        </div>
                        
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Awards