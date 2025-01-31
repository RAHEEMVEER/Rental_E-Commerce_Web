"use client";

import React from "react";
import MainMenuLinks from "../Components/MainMenuLinks";
import Image from "next/image";
import map from "../../public/images/Maps.png";
import mark from "../../public/images/mark.png";
import arrow from "../../public/images/arrow-down.png";
import circleChart from "../../public/images/circleChart.png";
import more from "../../public/images/more.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CarsData } from "../[name]/page";
import { urlFor } from "../imageUrl";
import { client } from "@/sanity/lib/client";
import { mainMenuLinks, prefrences, timeManagement, popularCarsDetail } from "../Components/menuLinks";
import { useUser } from "@clerk/nextjs";
import AuthPopUp from "../Components/AuthPopUp";

export default function Page() {
  const [transactionCars, setTransactionCars] = useState<CarsData[]>([]);
  const [car, setCar] = useState<CarsData | null>(null);
  const { isSignedIn } = useUser();

  const fetchCarFromSan = async () => {
    try {
      const data = await client.fetch('*[_type == "transaction"] | order(_createdAt desc)');
      console.log("Fetched Data:", data);
      setTransactionCars(() => data);
      if (data.length > 0) {
        setCar(() => data[0]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      fetchCarFromSan();
    }
  }, [isSignedIn]);

  if (!isSignedIn) {
    return <AuthPopUp />
  };

  return (
    <section className="flex min-h-[100vh] relative">
      <div className="bg-white min-h-[100vh] relative min-w-[250px] pt-5 px-4 shadow-inner hidden lg:block">
        <h1 className="text-[#78889f] text-base">Main Menu</h1>
        <div className="flex flex-col gap-1 mt-3">{mainMenuLinks?.map((val, idx) => (<MainMenuLinks key={idx} img={val.icon} imgType={val.alt} LinkName={val.LinkName} />))}</div>

        <h1 className="text-[#78889f] text-base mt-10">Prefrences</h1>
        <div className="flex flex-col gap-1 mt-3">{prefrences?.map((val, idx) => (<MainMenuLinks key={idx} img={val.icon} imgType={val.alt} LinkName={val.LinkName} />))}</div>
      </div>

      <div className="bg-[#F6F7F9] px-2 sm:px-3 xl:px-7 py-3 xl:py-6 grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <div className="bg-white rounded-md py-6 px-4">
          <h1 className="font-semibold text-xl">Details Rental</h1>
          <Image src={map} alt="map" className="mt-4 w-full" />
          <div className="flex flex-col-reverse sm:flex-row gap-3 items-center mt-3">
            <div className="w-full sm:w-max flex justify-start items-center"><div className="bg-[url(/images/bg2.png)] bg-center w-[140px] bg-cover rounded-md flex justify-center items-center p-2 mt-3"><Image src={car?.image ? urlFor(car.image).url() : "/placeholder.jpg"} alt="car interior" width={150} height={10} /></div></div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col"><h1 className="text-[21px] font-semibold">{car?.name}</h1><p className="text-[#3D5278] text-sm">{car?.type}</p></div>
              <p className="text-[#3D5278] text-xs">#9761</p>
            </div>
          </div>
          {timeManagement.map((elem, idx) => (
            <div key={idx} className="mt-8">
              <h1 className='flex gap-2 items-center font-semibold mb-3 sm:mb-0'><Image src={mark} alt="button" className='w-3 h-3 font' />{elem.type}</h1>
              <div className="grid grid-cols-1 gap-3 sm:gap-0 sm:grid-cols-3 mt-2">
                <div className="sm:px-5">
                  <h1 className="text-base font-semibold">Location</h1>
                  <div className="flex bg-[#F6F7F9] sm:bg-transparent py-3 px-2 rounded-md sm:py-0 sm:px-0 justify-between items-center sm:mt-1 mt-3"><p className="text-[#90A3BF] md:text-xs">Toronto</p><Image src={arrow} alt="arrow down" className='w-3 h-3' /></div>
                </div>
                <div className="sm:border-l-2 border-[#C3D4E966] sm:px-5">
                  <h1 className="text-base font-semibold">Date</h1>
                  <div className="flex bg-[#F6F7F9] sm:bg-transparent py-3 px-2 rounded-md sm:py-0 sm:px-0 justify-between items-center sm:mt-1 mt-3"><p className="text-[#90A3BF] md:text-xs">{elem.date}</p><Image src={arrow} alt="arrow down" className='w-3 h-3' /></div>
                </div>
                <div className="sm:border-l-2 border-[#C3D4E966] sm:px-5">
                  <h1 className="text-base font-semibold">Time</h1>
                  <div className="flex bg-[#F6F7F9] sm:bg-transparent py-3 px-2 rounded-md sm:py-0 sm:px-0 justify-between items-center sm:mt-1 mt-3"><p className="text-[#90A3BF] md:text-xs">{elem.time}</p><Image src={arrow} alt="arrow down" className='w-3 h-3' /></div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center pt-6 mt-12 border-t-2 border-[#C3D4E966]">
            <div><h1 className="text-lg font-bold">TotalRentalPrice</h1><p className="text-sm text-[#90A3BF]">Overall price and includes rental discount</p></div>
            <h1 className="text-xl font-bold">{car?.pricePerDay}</h1>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-md py-6 px-4">
            <div className="flex justify-between items-center mb-7 sm:mb-0"><h1 className="text-xl font-semibold">Top 5 Car Rental</h1><Image src={more} alt="more" className="cursor-pointer" /></div>
            <div className="flex flex-col sm:flex-row gap-7 sm:gap-4 mt-5">
              <div className="relative w-full justify-center sm:w-[35%] flex items-center">
                <Image src={circleChart} alt="circleChart" className="w-[180px] sm:w-full" />
                <div className="flex flex-col items-center justify-center absolute inset-0"><h1 className="sm:text-2xl md:text-base xl:text-[20px] font-semibold">72,030</h1><p className="text-[#90A3BF] text-sm md:text-xs">Rental Car</p></div>
              </div>

              <div className="flex flex-col gap-4 justify-center w-full sm:w-[65%]">
                {popularCarsDetail.map((val, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center gap-2"><div className={`w-3 h-3 rounded-full ${val.color}`}></div><p className="text-[#90A3BF] text-sm">{val.carType}</p></div>
                    <h1 className="text-base">{val.num}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md py-6 px-4">
            <div className="flex justify-between items-center mb-8"><h1 className="text-base font-semibold">Recent Transaction</h1><Link href="/transactionCars" className="text-xs text-[#2185DE] hover:underline">View All</Link></div>
            {car ? transactionCars.slice(0, 5).map((data, index) => (
              <div key={index} className="flex items-center gap-2 py-2 mt-6">
                <div className="w-[22%] sm:w-[17%] md:w-[23%]"><Image src={data?.image ? urlFor(data.image).url() : "/placeholder.jpg"} alt="transaction cars" width={100} height={30} /></div>
                <div className="flex flex-col w-[78%] sm:w-[83%] md:w-[77%]">
                  <div className="flex justify-between items-center"><h1 className="text-base xl:text-lg font-semibold">{data?.name}</h1><p className="text-xs xl:text-sm text-[#90A3BF]">progress</p></div>
                  <div className="flex justify-between items-center"><p className="text-xs xl:text-sm text-[#90A3BF]">{data?.type}</p><h1 className="text-base xl:text-lg font-semibold">{data?.pricePerDay}</h1></div>
                </div>
              </div>
            )) : <h1 className="flex justify-center text-red-600 text-sm">No Recent Transactions</h1>}
          </div>
        </div>
      </div>
    </section>
  );
};