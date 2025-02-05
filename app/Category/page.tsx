"use client";

import React from "react";
import PickAndDrops from "../Components/PickAndDrop";
import CarTypeAndCapacity from "../Components/CarTypeAndCapacity";
import RecomCars from "../Components/RecomCars";
import Cars from "../Components/Cars";
import { useState, useEffect } from "react";
import { CarsData } from "../[name]/page"
import { client } from "../../sanity/lib/client";
import { urlFor } from "../imageUrl";

export default function Page() {
  const [cars, setCars] = useState<CarsData[]>([]);
  const [loading, setLoading] = useState(true);

  const getSanityData = async () => {
    const res = await client.fetch(`*[_type == 'car']`);
    setCars(() => res);
    setLoading(false);
  };

  useEffect(() => {
    getSanityData();
  }, []);

  return (
    <section className="flex min-h-[100vh]">
      <CarTypeAndCapacity />
      <div className="flex flex-col bg-[#F6F7F9] px-3 py-5 lg:px-5 lg:py-7 w-full">
        <PickAndDrops styling="xl:flex-row items-center w-[100%] gap-2" style2="w-[100%] xl:w-[48%]" />
        {loading ? <div className='flex bg-transparent relative justify-center items-center min-h-[400px]'><i className="ri-loader-4-fill text-[#3563E9] text-3xl animate-spin-fast"></i></div> :
          <RecomCars
            style="pt-4"
            gridCol="grid-cols-3"
            cars={cars.map((car, index) => (<Cars key={index} CarName={car.name} carTurbo={car.type} img={urlFor(car.image).url() || "/placeholder.jpg"} liter={car.fuelCapacity} capacity={car.seatingCapacity} price={car.pricePerDay} route={car.name.replace(/\s+/g, '')} />))}
          />}
      </div>
    </section>
  );
}
