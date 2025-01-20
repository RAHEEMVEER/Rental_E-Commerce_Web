import React from 'react';
import Image from 'next/image';
import arrow from "../../public/images/arrow-down.png";

export default function LocationTime() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
    <div className='flex flex-row justify-between sm:block mt-3'>
     <h1 className='sm:text-xl text-base font-semibold'>Location</h1>
     <p className='flex items-center gap-3 sm:gap-5 mt-1 text-base sm:text-sm text-[#6B7280] cursor-pointer'>Select City<Image src={arrow} alt='arrow down' className='w-3 h-4'/></p>
    </div>
    <div className='flex flex-row justify-between sm:block mt-3'>
     <h1 className='sm:text-xl text-base font-semibold'>Date</h1>
     <p className='flex items-center gap-3 sm:gap-5 mt-1 text-base sm:text-sm text-[#6B7280] cursor-pointer'>Select Date<Image src={arrow} alt='arrow down' className='w-3 h-4'/></p>
    </div>
    <div className='flex flex-row justify-between sm:block mt-3'>
     <h1 className='sm:text-xl text-base font-semibold'>Time</h1>
     <p className='flex items-center gap-3 sm:gap-5 mt-1 text-base sm:text-sm text-[#6B7280] cursor-pointer'>Select Time<Image src={arrow} alt='arrow down' className='w-3 h-4'/></p>
    </div>
  </div>
  )
}
