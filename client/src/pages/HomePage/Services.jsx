import React from 'react'
import {Link} from 'react-router-dom'

function Services() {
    
    return (
        <div className='flex justify-center pt-10'>
            <div className='flex mx-28 gap-2'>
                <div className='flex gap-2'>
                    <div className='px-5'>
                        <img src="/images/homepage9.jpg" />
                    </div>
                    <div className='self-start px-5'>
                        <h2 className='text-[24px] font-bold'>Landlord Services</h2>
                        <div className='pt-10'>
                            <ul>
                                <Link to='/services'>
                                    <span>
                                    <li  
                                className='text-[24px] py-2 border-b hover:bg-gray-300 
                                cursor-pointer rounded 
                                 hover:border-red-400'>
                                    Property Management
                                </li>
                                    </span>
                                
                                </Link>
                                <li className='text-[24px] pb-2 border-b  hover:bg-gray-300 cursor-pointer
                                rounded-r-lg border-l-transparent hover:border-red-400'>Building Management</li>
                                <li className='text-[24px] pb-2 border-b  hover:bg-gray-300 cursor-pointer
                                rounded-r-lg border-l-transparent hover:border-red-400'>Body Corporate Administration</li>
                                <li className='text-[24px] pb-2 border-b  hover:bg-gray-300 cursor-pointer
                                rounded-r-lg border-l-transparent hover:border-red-400'>Investment Property & Sales</li>
                                <li className='text-[24px] pb-2 border-b  hover:bg-gray-300 cursor-pointer
                                rounded-r-lg border-l-transparent hover:border-red-400'>Free Rental Appraisals</li>
                                <li className='text-[24px] pb-2 border-b  hover:bg-gray-300 cursor-pointer
                                rounded-r-lg border-l-transparent hover:border-red-400'>Renovation Project Management</li>
                                <li className='text-[24px] pb-2 border-b  hover:bg-gray-300 cursor-pointer
                                rounded-r-lg border-l-transparent hover:border-red-400'>Interior Design</li>
                                <li className='text-[24px] pb-2 border-b  hover:bg-gray-300 cursor-pointer
                                rounded-r-lg border-l-transparent hover:border-red-400'>Financial Calculator</li>
                            </ul>
                        </div>                        
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='h-full w-60 bg-cover px-5'>
                        <img src="/images/homepage6.jpg" />
                    </div>
                    <div className='px-5'>
                        <h2 className='text-[24px] font-bold'>Tenant Services</h2>
                        <div className='pt-10'>
                            <ul>
                                <Link to ='/search'>
                                    <span>
                                    <li className='text-[24px] pb-2 border-b  hover:bg-gray-300 cursor-pointer
                                rounded-r-lg border-l-transparent hover:border-red-400'>Search for Rental Properties</li>
                                    </span>
                                </Link>
                                <li className='text-[24px] pb-2 border-b  hover:bg-gray-300 cursor-pointer
                                rounded-r-lg border-l-transparent hover:border-red-400'>Dispute Resolution</li>
                                <li className='text-[24px] pb-2 border-b  hover:bg-gray-300 cursor-pointer
                                rounded-r-lg border-l-transparent hover:border-red-400'>Organising and Decluttering</li>
                            </ul>
                        </div>                        
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Services