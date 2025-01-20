import React from 'react';
import BillingInfoLabel from "../Components/BillingInfoLabel";
import Image from "next/image";
import mark from "../../public/images/mark.png";

export default function RentalForm(props:any) {
  return (
    <div className='mt-8'>
    <h1 className='flex gap-2 items-center font-semibold mb-3 sm:mb-0 text-sm'><Image src={mark} alt="button" className='w-3 h-3 font'/>{props.type}</h1>
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-3">
     <BillingInfoLabel content="City" inputType="text" holder="Select Your city" bgColor="bg-[#F6F7F9]"/>
     <BillingInfoLabel content="Date" inputType="date" holder="Phone number" bgColor="bg-[#F6F7F9]"/>
     <BillingInfoLabel content="Time" inputType="time" holder="Address" bgColor="bg-[#F6F7F9]"/>
    </form>
   </div>
  )
}
