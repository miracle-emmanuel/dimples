import React from 'react';
import heart from "../assets/img/Heart.png"
import location from "../assets/img/Location.png"
import graph from "../assets/img/Graph.png"
import shield from "../assets/img/Shield.png"
import star from "../assets/img/Star.png"
import ticket from "../assets/img/Ticket.png"

const Advantage = () => {
  return (
    <div className='grid gap-5 mx-10 mt-10'>
        <h1 className=' bg-gray-100 w-fit text-amber-200 p-3 '>OUR ADVANTAGES</h1>
        <p className=' text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold m-auto text-center'>Giving you peace of mind</p>
            <ul className='flex flex-wrap justify-around m-auto gap-20'>
                <li className='grid gap-2 mb-3'>
                    <img src={heart} alt="" className='w-[30px]'/>
                    <h2 className='text-2xl font-semibold'>Comfortable</h2>
                    <p className='w-[16rem]'>Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stone's throw away from schools, churches, and hospitals.</p>
                </li>
                <li className='grid gap-2 mb-3'>
                    <img src={shield} alt="" className='w-[30px]'/>
                    <h2 className='text-2xl font-semibold'>Extra security</h2>
                    <p className='w-[16rem]'>You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.</p>
                </li>
                <li className='grid gap-2 mb-3'>
                    <img src={star} alt="" className='w-[30px]'/>
                    <h2 className='text-2xl font-semibold'>Luxury</h2>
                    <p className='w-[16rem]'>Find out how we provide the highest standard of professional property management to give you all the benefits of property.</p>
                </li>
                <li className='grid gap-2 mb-3'>
                    <img src={ticket} alt="" className='w-[30px]'/>
                    <h2 className='text-2xl font-semibold'>Best price</h2>
                    <p className='w-[16rem]'>Not sure what you should be charging for your property? Let us do the numbers for you—contact us today for a free rental appraisal on your home.</p>
                </li>
                <li className='grid gap-2 mb-3'>
                    <img src={location} alt="" className='w-[30px]'/>
                    <h2 className='text-2xl font-semibold'>Strategic location</h2>
                    <p className='w-[16rem]'>located in the city center close to the shopping center. Very good for areas surrounded by international education centers, start-up office centers.</p>
                </li>
                <li className='grid gap-2'>
                    <img src={graph} alt="" className='w-[30px]'/>
                    <h2 className='text-2xl font-semibold'>Efficient</h2>
                    <p className='w-[16rem]'>Schedule visits to multiple properties at once in one day without having to call them one by one. Check everything and find the best properties for rent</p>
                </li>
            </ul>
    </div>
  )
}

export default Advantage