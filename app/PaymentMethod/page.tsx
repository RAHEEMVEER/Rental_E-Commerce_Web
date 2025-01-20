import React from "react";
import BillingInfoLabel from "../Components/BillingInfoLabel";
import RentalForm from "../Components/RentalForm";
import CardOption from "../Components/CardOption";
import Button from "../Components/Button";
import shell from "../../public/images/shell.png";
import Image from "next/image";
import gtr from "../../public/images/rentalCar2.png";
import ReviewStar from "../Components/ReviewStar";

export default function page() {
  return (
    <section className="flex flex-col-reverse lg:flex-row gap-5 bg-[#F6F7F9] py-5 px-2 md:px-6 xl:px-10 min-h-[100vh]">
      <div className="flex flex-col gap-5 w-full lg:w-[60%]">
        <div className="bg-white px-3 sm:px-5 py-6 rounded-md">
          <div className="flex justify-between items-center">
            <div><h1 className="text-lg font-semibold">Billing Info</h1><p className="text-sm text-[#90A3BF]">Please Enter Your Billing info</p></div>
            <p className="text-sm text-[#90A3BF]">Step 1of4</p>
          </div>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
            <BillingInfoLabel content="Name" inputType="text" holder="Your Name" bgColor="bg-[#F6F7F9]"/>
            <BillingInfoLabel content="Phone Number" inputType="number" holder="Phone number" bgColor="bg-[#F6F7F9]"/>
            <BillingInfoLabel content="Address" inputType="text" holder="Address" bgColor="bg-[#F6F7F9]"/>
            <BillingInfoLabel content="Town / City" inputType="text" holder="Town / City" bgColor="bg-[#F6F7F9]"/>
          </form>
        </div>

        <div className="bg-white px-3 sm:px-5 py-6 rounded-md">
          <div className="flex justify-between items-center">
            <div><h1 className="text-lg font-semibold">Rental Info</h1><p className="text-sm text-[#90A3BF]">Please Enter Your Rental Date</p></div>
            <p className="text-sm text-[#90A3BF]">Step 2of4</p>
          </div>
          <RentalForm type="Pick-Up"/>
          <RentalForm type="Drop-Off"/>
        </div>

        <div className="bg-white px-3 sm:px-5 py-6 rounded-md">
          <div className="flex justify-between items-center mb-8">
            <div><h1 className="text-lg font-semibold">Payment Method</h1><p className="text-sm text-[#90A3BF]">Please Enter Your payment method</p></div>
            <p className="text-sm text-[#90A3BF]">Step 3of4</p>
          </div>
          <CardOption />
        </div>

        <div className="bg-white px-3 sm:px-5 py-6 rounded-md">
          <div className="flex justify-between items-center mb-6">
            <div><h1 className="text-lg font-semibold">Confirmation</h1><p className="text-sm text-[#90A3BF] w-[230px] sm:w-full">We are getting to the end. Just few clicks and your rental is ready!</p></div>
            <p className="text-sm text-[#90A3BF]">Step 4of4</p>
          </div>
          <div className="flex flex-col gap-4 mb-6">
            <div className="bg-[#F6F7F9] px-3 py-2 rounded-md flex gap-2 items-center"><input type="checkbox" className="w-4 h-4" /><span className="text-sm">I agree with sending an Marketing and newsletter emails. No spam, promissed!</span></div>
            <div className="bg-[#F6F7F9] px-3 py-2 rounded-md flex gap-2 items-center"><input type="checkbox" className="w-4 h-4" /><span className="text-sm">I agree with our terms and conditions and privacy policy.</span></div>
          </div>
          <Button stylee="bg-[#3563E9] px-3 py-2 rounded-md" contentStyle="text-white text-sm" content="Rent Now"/>
          <div className="mt-6">
           <Image src={shell} alt='arrow down' className='w-6'/>
           <h1 className="text-lg font-semibold mt-4">All your data are safe</h1>
           <p className="text-sm text-[#90A3BF] mt-1">We are using the most advanced security to provide you the best experience ever.</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[40%] bg-white py-6 px-3 sm:px-5 h-max rounded-md">
        <h1 className="text-[#1A202C] text-xl font-semibold">Rental Summary</h1>
        <p className="text-[#90A3BF] text-base mt-3">Prices may change depending on the length of the rental and the price of your rental car.</p>
        <div className="flex flex-col-reverse sm:flex-row gap-5 mt-7">
          <div className="bg-[url(/images/bg2.png)] bg-center w-[200px] bg-cover rounded-md flex justify-center items-center p-4"><Image src={gtr} alt="car interior" className="w-[150px]"/></div>
          <div className="flex flex-col">
            <h1 className="text-[24px] font-semibold">Nissan GT-R</h1>
            <div className="flex items-center gap-2"><ReviewStar/><p className="text-sm text-[#6B7280]">440+ Reviewers</p></div>
          </div>
        </div>

        <div className="mt-8 pt-5 pb-3 border-t-2 border-[#C3D4E966]">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center"><p className="text-[#90A3BF] text-base">Subtotal</p><p className="text-base font-semibold">$80.00</p></div>
            <div className="flex justify-between items-center"><p className="text-[#90A3BF] text-base">Tax</p><p className="text-base font-semibold">$0</p></div>
          </div>
        </div>

       <div className="flex mt-5">
         <input type="text" className="bg-[#F6F7F9] w-full outline-none text-[#90A3BF] px-2 py-2" placeholder="Apply promo code"/>
         <Button stylee="bg-[#F6F7F9] py-2 px-2 w-[140px]" contentStyle="text-black text-sm" content="Apply Now"/>
       </div>

       <div className="flex justify-between items-center mt-10">
        <div><h1 className="font-semibold text-xl">Total Rental Price</h1><p className="text-[#90A3BF] text-sm">Overall price and includes rental discount</p></div>
        <div><h1 className="text-xl font-semibold">$80.00</h1></div>
       </div>
      </div>
    </section>
  );
}
