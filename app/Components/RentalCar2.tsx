import React from 'react';
import Button from './Button';
import Image from 'next/image';
import rentalCar2 from "../../public/images/rentalCar2.png";

export default function RentalCar2(props:any) {
  return (
    <div className={`bg-[url(/images/bg2.png)] xl:min-h-[365px] w-[100%] rounded-2xl bg-center bg-cover flex flex-col p-3 lg:p-6 ${props.visibility}`}>
    <div>
      <h1 className="text-3xl font-semibold text-white w-[85%] sm:w-[50%] md:w-[90%] xl:w-[60%] mt-2">Easy way to rent a car at a low price</h1>
      <p className="text-base text-white mt-4 w-[85%] sm:w-[70%] md:w-[80%] lg:w-[100%]">Providing cheap car rental services and safe and comfortable facilities.</p>
      <Button stylee="bg-[#54A6FF] mt-5 py-2 px-2 rounded-md" content="Rental Car" contentStyle="text-white"/>
    </div>
    <div className="flex justify-center"><Image src={rentalCar2} alt="car Image" className="w-[350px] h-auto mt-3"/></div>
  </div>
  )
}
