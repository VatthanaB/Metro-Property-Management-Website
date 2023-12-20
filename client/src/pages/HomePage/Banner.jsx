import React from 'react'
import { MdOutlineShareLocation } from "react-icons/md";
function Banner() {
    return (
        <div>
            <div className='h-96 w-full bg-cover bg-center relative'>
                <img className='w-full h-full object-cover absolute mix-blend-overlay'
                    src='/images/homepage8.jpg' />
                <div>
                    <div className='absolute left-1/2 top-1/4 -translate-x-1/2 - translate-y-1/2'>
                        <div className='flex items-center'>
                            <div>
                                <p className='text-red-500 text-6xl'>{<MdOutlineShareLocation />}</p>
                            </div>
                            <div>
                                <h1 className='text-white text-6xl font-normal'>Auckland</h1>
                            </div>                            
                        </div>
                        <div className='pl-2 mt-6 lg:mt-8 '>
                            <p className='text-white text-3xl lg:text-3xl font-normal'>Property Management</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Banner