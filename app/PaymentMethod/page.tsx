"use client";

import React from "react";
import { useState, useEffect } from "react";
import BillingInfoLabel from "../Components/BillingInfoLabel";
import RentalForm from "../Components/RentalForm";
import CardOption from "../Components/CardOption";
import Button from "../Components/Button";
import shell from "../../public/images/shell.png";
import Image from "next/image";
import ReviewStar from "../Components/ReviewStar";
import { urlFor } from "../imageUrl";
import { CarsData } from "../[name]/page";
import mark from "../../public/images/mark.png";
import { client } from "@/sanity/lib/client";
import { useUser } from "@clerk/nextjs";
import SuccessPaymentPopUp from "../Components/SuccessPaymentPopUp";

export default function Page() {
  
  const { user } = useUser();
  const userId = user?.id;
  const [car, setCar] = useState<CarsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
    pickupCity: "",
    pickupDate: "",
    pickupTime: "",
    returnCity: "",
    returnDate: "",
    returnTime: "",
  });

  const resetFormFields = () => {
    setFormData({
      name: "",
      phoneNumber: "",
      address: "",
      city: "",
      pickupCity: "",
      pickupDate: "",
      pickupTime: "",
      returnCity: "",
      returnDate: "",
      returnTime: "",
    });
  };

  const fetchCarData = async () => {
    try {
      const res = await fetch(`/api/data`);
      const data = await res.json();
      setCar(data.car);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching car data:", err);
      setLoading(false);
    }
  };

  const postCarData = async (car: CarsData) => {
    try {
      const carData = {
        _type: 'transaction',
        userId: userId,
        name: car?.name,
        type: car?.type,
        fuelCapacity: car?.fuelCapacity,
        transmission: car?.transmission,
        seatingCapacity: car?.seatingCapacity,
        pricePerDay: car?.pricePerDay,
        image: {
          _type: 'image',
          asset: {
            _ref: car?.image?.asset?._ref,
          },
        },
      };
      const response = await client.create(carData);
      console.log('Data posted to Sanity:', response);
    } catch (err) {
      console.error('Error posting data to Sanity:', err);
    }
  };

  const popUp = () => {
    setShowPopUp(true);
    setTimeout(() => setShowPopUp(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetFormFields();
    if (car !== null) {
      postCarData(car);
    }
    popUp();
  };

  useEffect(() => {
    fetchCarData();
  }, []);

  if (loading) {
    return <div className='flex relative justify-center items-center min-h-[60vh]'><i className="ri-loader-4-fill text-[#3563E9] text-3xl animate-spin-fast"></i></div>
  };

  return (
    <>
      {showPopUp && (<SuccessPaymentPopUp />)}
      <section className="flex flex-col-reverse lg:flex-row gap-5 bg-[#F6F7F9] py-5 px-2 md:px-6 xl:px-10 min-h-[100vh]">
        <form className="flex flex-col gap-5 w-full lg:w-[60%]" onSubmit={handleSubmit}>
          <div className="bg-white px-3 sm:px-5 py-6 rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-lg font-semibold">Billing Info</h1>
                <p className="text-sm text-[#90A3BF]">Please Enter Your Billing info</p>
              </div>
              <p className="text-sm text-[#90A3BF]">Step 1of4</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              <label className="flex flex-col gap-1">
                <span className="text-sm">Name</span>
                <input type="text" className="w-full text-sm py-3 px-3 rounded-md outline-none bg-[#F6F7F9]" placeholder="Your Name" name="name"
                  value={formData.name}
                  onChange={handleInputChange} required />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm">Phone Number</span>
                <input type="number" className="w-full text-sm py-3 px-3 rounded-md outline-none bg-[#F6F7F9]" placeholder="Phone number" name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange} required />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm">Address</span>
                <input type="text" className="w-full text-sm py-3 px-3 rounded-md outline-none bg-[#F6F7F9]" placeholder="Address" name="address"
                  value={formData.address}
                  onChange={handleInputChange} required />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm">Town / City</span>
                <input type="text" className="w-full text-sm py-3 px-3 rounded-md outline-none bg-[#F6F7F9]" placeholder="Town / City" name="city"
                  value={formData.city}
                  onChange={handleInputChange} required />
              </label>
            </div>
          </div>

          <div className="bg-white px-3 sm:px-5 py-6 rounded-md">
            <div className="flex justify-between items-center">
              <div><h1 className="text-lg font-semibold">Rental Info</h1><p className="text-sm text-[#90A3BF]">Please Enter Your Rental Date</p></div>
              <p className="text-sm text-[#90A3BF]">Step 2of4</p>
            </div>
            <div className='mt-8'>
              <h1 className='flex gap-2 items-center font-semibold mb-3 sm:mb-0 text-sm'><Image src={mark} alt="button" className='w-3 h-3 font' />Pick-Up</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-3">
                <label className="flex flex-col gap-1">
                  <span className="text-sm">City</span>
                  <input
                    type="text"
                    className="w-full text-sm py-3 px-3 rounded-md outline-none bg-[#F6F7F9]"
                    placeholder="Enter Pickup City"
                    name="pickupCity"
                    value={formData.pickupCity}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm">Pick-Up Date</span>
                  <input
                    type="date"
                    className="w-full text-sm py-3 px-3 rounded-md outline-none bg-[#F6F7F9]"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm">Pick-Up Time</span>
                  <input
                    type="time"
                    className="w-full text-sm py-3 px-3 rounded-md outline-none bg-[#F6F7F9]"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
            </div>

            <div className='mt-8'>
              <h1 className='flex gap-2 items-center font-semibold mb-3 sm:mb-0 text-sm'><Image src={mark} alt="button" className='w-3 h-3 font' />Drop-Off</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-3">
                <label className="flex flex-col gap-1">
                  <span className="text-sm">City</span>
                  <input
                    type="text"
                    className="w-full text-sm py-3 px-3 rounded-md outline-none bg-[#F6F7F9]"
                    placeholder="Enter Pickup City"
                    name="returnCity"
                    value={formData.returnCity}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm">Drop-Off Date</span>
                  <input
                    type="date"
                    className="w-full text-sm py-3 px-3 rounded-md outline-none bg-[#F6F7F9]"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm">Drop-Off Time</span>
                  <input
                    type="time"
                    className="w-full text-sm py-3 px-3 rounded-md outline-none bg-[#F6F7F9]"
                    name="returnTime"
                    value={formData.returnTime}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
            </div>
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
            <Button stylee="bg-[#3563E9] px-3 py-2 rounded-md" contentStyle="text-white text-sm" content="Rent Now" type="submit" />
            <div className="mt-6">
              <Image src={shell} alt='arrow down' className='w-6' />
              <h1 className="text-lg font-semibold mt-4">All your data are safe</h1>
              <p className="text-sm text-[#90A3BF] mt-1">We are using the most advanced security to provide you the best experience ever.</p>
            </div>
          </div>
        </form>

        <div className="w-full lg:w-[40%] bg-white py-6 px-3 sm:px-5 h-max rounded-md">
          <h1 className="text-[#1A202C] text-xl font-semibold">Rental Summary</h1>
          <p className="text-[#90A3BF] text-base mt-3">Prices may change depending on the length of the rental and the price of your rental car.</p>
          <div className="flex flex-col-reverse sm:flex-row gap-5 mt-7">
            <div className="bg-[url(/images/bg2.png)] bg-center w-[200px] bg-cover rounded-md flex justify-center items-center p-4"><Image src={car?.image ? urlFor(car?.image).url() : "/placeholder.jpg"} alt="car interior" width={170} height={10} /></div>
            <div className="flex flex-col">
              <h1 className="text-[22px] font-semibold">{car?.name}</h1>
              <div className="flex items-center gap-2"><ReviewStar /><p className="text-sm text-[#6B7280]">440+ Reviewers</p></div>
            </div>
          </div>

          <div className="mt-8 pt-5 pb-3 border-t-2 border-[#C3D4E966]">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center"><p className="text-[#90A3BF] text-base">Subtotal</p><p className="text-base font-semibold">{car?.pricePerDay}</p></div>
              <div className="flex justify-between items-center"><p className="text-[#90A3BF] text-base">Tax</p><p className="text-base font-semibold">$0</p></div>
            </div>
          </div>

          <div className="flex mt-5">
            <input type="text" className="bg-[#F6F7F9] w-full outline-none text-[#90A3BF] px-2 py-2" placeholder="Apply promo code" />
            <Button stylee="bg-[#F6F7F9] py-2 px-2 w-[140px]" contentStyle="text-black text-sm" content="Apply Now" />
          </div>

          <div className="flex justify-between items-center mt-10">
            <div><h1 className="font-semibold text-xl">Total Rental Price</h1><p className="text-[#90A3BF] text-sm">Overall price and includes rental discount</p></div>
            <div><h1 className="text-xl font-semibold">{car?.pricePerDay}</h1></div>
          </div>
        </div>
      </section>
    </>
  );
};