import React from 'react';
import swapUp from "../../public/images/Swap.png";
import Image from 'next/image';
import mark from "../../public/images/mark.png";
import Locationtime from"./LocationTime";

export default function LocationTime(props:any) {
  return (
    <div className={`flex flex-col bg-[#F6F7F9] ${props.styling}`}>
       <div className={`shadow-2xl ${props.style2} bg-white py-5 p-3 rounded-md`}>
         <h1 className='flex gap-2 items-center font-semibold mb-2'><Image src={mark} alt="button" className='w-4 h-4 font'/>Pick-Up</h1>
         <Locationtime />
       </div>
       <div className='bg-[#3563E9] p-3 rounded-lg h-max cursor-pointer'><Image src={swapUp} alt='swapUp'/></div>
       <div className={`shadow-2xl ${props.style2} bg-white py-5 p-3 rounded-md`}>
         <h1 className='flex gap-2 items-center font-semibold mb-2'><Image src={mark} alt="button" className='w-4 h-4'/>Drop-Off</h1>
         <Locationtime />
       </div>
    </div>
  )
}