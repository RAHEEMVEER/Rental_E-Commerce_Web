"use client";

import React, { useState, useEffect } from "react";
import CarTypeAndCapacity from "../Components/CarTypeAndCapacity";
import RentalCar2 from "../Components/RentalCar2";
import Image from "next/image";
import interior1 from "../../public/images/interior-1.png";
import interior2 from "../../public/images/interior-2.png";
import Button from "../Components/Button";
import Review from "../Components/Review";
import user1 from "../../public/images/userImg.png";
import user2 from "../../public/images/userImg2.png";
import ReviewStar from "../Components/ReviewStar";
import arrow from "../../public/images/arrow-down.png";
import PopCars from "../Components/PopCars";
import Cars from "../Components/Cars";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../imageUrl";

export interface CarsData {
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

export default function Page({ params }: any) {

  const [isCar, setIsCar] = useState(<></>);
  const [car, setCar] = useState<CarsData[]>([]);
  const [resCar, setResCar] = useState<CarsData[]>([]);

  const getSanityData = async () => {
    const res = await client.fetch(`*[_type == 'car']`);
    let carNames = res.filter((val: any) => val.name.replace(/\s+/g, "") == params.name);
    let remSelectedCar = res.filter((val: any) => val.name.replace(/\s+/g, "") != params.name);
    if (carNames) {
      setCar(carNames);
      setResCar(remSelectedCar.slice(0, 6));
    } else {
      setIsCar(<div className="flex justify-center items-center text-orange-400">Selected Car Is Not Available</div>)
    }
  };

  const postData = async () => {
    try {
      const response = await fetch("/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          car: car,
          resCar: resCar,
        }),
      });
      const data = await response.json();
      console.log("Data posted:", data);
    } catch (err) {
      console.error("Error posting data:", err);
    }
  };

  useEffect(() => {
    getSanityData();
  }, []);

  useEffect(() => {
    if (car.length > 0) {
      postData();
    }
  }, [car]);

  return (
    <section className="flex min-h-[100vh]">
      <CarTypeAndCapacity />
      {isCar}
      {car.map((car, index) => (
        <div key={index} className="flex flex-col bg-[#F6F7F9] px-3 lg:px-5">
          <div className="pt-5 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4 min-h-[50vh]">
            <div className="h-max">
              <RentalCar2 visibility="flex" img={urlFor(car.image).url() || "/placeholder.jpg"} w={300} h={300} imgStyle="mt-6" />
              <div className="mt-6 md:mt-3 gap-3 flex justify-evenly md:justify-between">
                <div className="bg-[url(/images/bg2.png)] bg-center bg-cover rounded-md flex justify-center items-center px-3"><Image src={urlFor(car.image).url() || "/placeholder.jpg"} alt="car interior" width={190} height={100} /></div>
                <div className="flex justify-end"><Image src={interior1} alt="car interior" /></div>
                <div><Image src={interior2} alt="car interior" /></div>
              </div>
            </div>

            <div className="bg-white px-4 py-5 rounded-xl h-max">
              <div className="flex justify-between items-center"><h1 className="text-[22px] font-semibold">{car.name}</h1><i className="ri-heart-2-fill text-red-600 text-[22px]"></i></div>
              <div className="flex gap-2 items-center">
                <ReviewStar />
                <p className="text-sm text-[#6B7280]">440+ Reviewers</p>
              </div>
              <p className="mt-8 text-[#525864]">NISMO has become the embodiment of Nissans outstanding performance, inspired by the most unforgiving proving ground, the “race track”.</p>

              <div className="mt-6 grid gap-y-4 grid-cols-1 sm:grid-cols-2 gap-x-10 sm:gap-y-2">
                <div className="flex items-center justify-between"><h1 className="text-[#90A3BF]">TypeCar</h1><p className="text-[#596780]">{car.type}</p></div>
                <div className="flex items-center justify-between"><h1 className="text-[#90A3BF]">Capacity</h1><p className="text-[#596780]">{car.seatingCapacity}</p></div>
                <div className="flex items-center justify-between"><h1 className="text-[#90A3BF]">Steering</h1><p className="text-[#596780]">{car.transmission}</p></div>
                <div className="flex items-center justify-between"><h1 className="text-[#90A3BF]">Gasoline</h1><p className="text-[#596780]">{car.fuelCapacity}</p></div>
              </div>

              <div className="flex justify-between mt-8">
                <div className="flex flex-col">
                  <h1><span className="text-xl font-bold">{car.pricePerDay}</span><span className="text-[#90A3BF] text-base">/day</span></h1>
                  <p className="text-[#90A3BF] text-base line-through">$100.00</p>
                </div>
                <Link href={`/PaymentMethod?carName=${car.name}`}><Button stylee="bg-[#3563E9] px-3 py-2 rounded-md" contentStyle="text-white" content="Rent Now" /></Link>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-10 bg-white flex flex-col gap-4 px-2 py-3 sm:p-3 rounded-lg">
            <div><h1 className="text-xl font-semibold">Reviews <span className="bg-[#3563E9] p-2 rounded-full text-white text-lg font-semibold">13+</span></h1></div>
            <div>
              <Review userImg={user1} name="Alex Stanton" position="CEO at Bukalapak" review="We are very happy with the service from the MORENT App. Morent has low prices..." date="21 July 2022" />
              <Review userImg={user2} name="Skylar Dias" position="CEO at Amazon" review="We are greatly helped by the services of the MORENT Application. Morent has low prices..." date="20 July 2022" />
            </div>
            <div className="flex justify-center mt-2">
              <p className="text-[#90A3BF] text-base flex gap-2 items-center cursor-pointer">Show All<Image src={arrow} alt='arrow down' className='w-3 h-4' /></p>
            </div>
          </div>

          <div>
            <PopCars
              style="mt-8"
              grid="grid-cols-3"
              speacility="Recent Car"
              cars={resCar.map((car, index) => (<Cars key={index} CarName={car.name} carTurbo={car.type} img={urlFor(car.image).url() || "/placeholder.jpg"} liter={car.fuelCapacity} capacity={car.seatingCapacity} price={car.pricePerDay} route={`/PaymentMethod?carName=${car.name}`} />))}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
