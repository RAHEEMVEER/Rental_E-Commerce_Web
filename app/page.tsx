"use client";

import Hero from "./Components/Hero";
import PickAndDrop from "./Components/PickAndDrop";
import PopCars from "./Components/PopCars";
import RecomCars from "./Components/RecomCars";
import Cars from "./Components/Cars";
import Button from './Components/Button';
import { urlFor } from "./imageUrl"
import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "../sanity/lib/client";

interface CarsData {
  fuelCapacity: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  name: string;
  pricePerDay: string;
  seatingCapacity: string;
  tags: string[];
  transmission: string;
  type: string;
}


export default function Home() {

  const [popCars, setPopCars] = useState<CarsData[]>([]);
  const [recomCars, setRecomCars] = useState<CarsData[]>([]);
  const [loading, setLoading] = useState(true);

  const getSanityData = async () => {
    const res = await client.fetch(`*[_type == 'car']`);
    const popularCarNames = ["Nissan GT-R", "Rolls-Royce", "Koenigsegg", "Porsche 911"];
    const popularCars = res.filter((val: any) => popularCarNames.includes(val.name));
    const recommendedCars = res.filter((val: any) => !popularCarNames.includes(val.name));
    setPopCars(() => popularCars);
    setRecomCars(() => recommendedCars);
    setLoading(false);
  };

  useEffect(() => {
    getSanityData()
  }, []);

  return (
    <>
      <Hero />
      <PickAndDrop styling="pt-8 sm:pt-12 lg:flex-row items-center lg:px-12 w-[100%] gap-4 xl:gap-8 px-4" style2="w-[100%] lg:w-[48%]" />
      {loading ?
        <div className='flex bg-transparent relative justify-center items-center min-h-[400px]'><i className="ri-refresh-line text-[#3563E9] text-3xl animate-spin-fast"></i></div>
        : <>
          <PopCars
            style="px-4 lg:px-12 pt-12 pb-3"
            grid="grid-cols-4"
            speacility="Popular Cars"
            cars={popCars.map((car, index) => (<Cars key={index} CarName={car.name} carTurbo={car.type} img={urlFor(car.image).url() || "/placeholder.jpg"} liter={car.fuelCapacity} capacity={car.seatingCapacity} price={car.pricePerDay} route={car.name.replace(/\s+/g, '')} />))}
          />

          <RecomCars
            heading={<h1 className="text-[20px] font-semibold">Recommendation Car</h1>}
            style="px-4 lg:px-12 pb-3 bg-[#F6F7F9]"
            gridCol="grid-cols-4"
            showMore={<div className='flex justify-center mt-6 mb-3'><Link href="/Category"><Button stylee="bg-[#3563E9] py-2 px-3 rounded-md" content="Show More Cars" contentStyle="text-white text-sm" /></Link></div>}
            cars={recomCars.map((car, index) => (<Cars key={index} CarName={car.name} carTurbo={car.type} img={urlFor(car.image).url() || "/placeholder.jpg"} liter={car.fuelCapacity} capacity={car.seatingCapacity} price={car.pricePerDay} route={car.name.replace(/\s+/g, '')} />))}
          />
        </>
      }
    </>
  );
}
