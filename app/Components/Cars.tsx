"use client";

import Image from 'next/image';
import React from 'react';
import gasStation from "../../public/images/gas-station.png";
import Manual from "../../public/images/Manual.png";
import Capacity from "../../public/images/capacity.png";
import Button from './Button';
import { useState } from 'react';
import Link from 'next/link';

export default function Cars(props:any) {
  const [isLike, setisLike] = useState(false);
  function heart(){
    setisLike(!isLike)
  }
  
  return (
    <div className='py-4 px-4 bg-white h-full rounded-xl'>
      <div className='flex justify-between'><h1 className='text-lg font-semibold'>{props.CarName}</h1><i onClick={heart} className={`${isLike ? "ri-heart-2-fill text-red-600 text-[22px] cursor-pointer transition-all duration-500 ease-in-out" : "ri-heart-line text-[22px] cursor-pointer transition-all duration-500 ease-in-out"}`}></i></div>
      <p className='text-[#6B7280]'>{props.carTurbo}</p>
      <div className='w-[100%] mt-14 flex justify-center'><Image src={props.img} alt="car image" width={220} height={200} unoptimized={true} /></div>
      <div className='flex mt-12 justify-between'>
        <div className='flex gap-1'><Image src={gasStation} alt='petrol avg' className='w-5 h-5'/><span className='text-sm text-[#6B7280]'>{props.liter}</span></div>
        <div className='flex gap-1'><Image src={Manual} alt='petrol avg' className='w-5 h-5'/><span className='text-sm text-[#6B7280]'>Manual</span></div>
        <div className='flex gap-1'><Image src={Capacity} alt='petrol avg' className='w-5 h-5'/><span className='text-sm text-[#6B7280]'>{props.capacity}</span></div>
      </div>
      <div className='flex justify-between items-center mt-4'><h1 className='text-lg font-semibold'>{props.price}<span className='text-[#6B7280] text-base'>/day</span></h1><Link href={`${props.route}`}><Button stylee="bg-[#3563E9] py-2 px-2 rounded-md" content="Rent Now" contentStyle="text-white text-sm"/></Link></div>
    </div>
  )
}
