import React from "react";
import CarTypeAndCapacity from "../Components/CarTypeAndCapacity";
import RentalCar2 from "../Components/RentalCar2";
import Image from "next/image";
import interior1 from "../../public/images/interior-1.png";
import interior2 from "../../public/images/interior-2.png";
import gtr from "../../public/images/rentalCar2.png";
import Button from "../Components/Button";
import Review from "../Components/Review";
import user1 from "../../public/images/userImg.png";
import user2 from "../../public/images/userImg2.png";
import ReviewStar from "../Components/ReviewStar";
import arrow from "../../public/images/arrow-down.png";
import PopCars from "../Components/PopCars";
import Cars from "../Components/Cars";
import Car1 from "../../public/images/rentalCar1.png";
import Car2 from "../../public/images/rentalCar2.png";
import Car3 from "../../public/images/car3.png";
import RecomCars from "../Components/RecomCars";
import car4 from "../../public/images/car4.png";
import car5 from "../../public/images/car5.png";
import car6 from "../../public/images/car6.png";
import Link from "next/link";

export default function page() {
  return (
    <section className="flex min-h-[100vh]">
      <CarTypeAndCapacity />
      <div className="flex flex-col bg-[#F6F7F9] px-3 lg:px-5">
       <div className="pt-5 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4 min-h-[50vh]">
        <div className="h-max">
          <RentalCar2 visibility="flex"/>
          <div className="mt-6 md:mt-3 gap-3 flex justify-evenly md:justify-between">
            <div className="bg-[url(/images/bg2.png)] bg-center bg-cover rounded-md flex justify-center items-center"><Image src={gtr} alt="car interior" className="w-[95%]"/></div>
            <div className="flex justify-end"><Image src={interior1} alt="car interior"/></div>
            <div><Image src={interior2} alt="car interior"/></div>
          </div>
        </div>

        <div className="bg-white px-4 py-5 rounded-xl h-max">
          <div className="flex justify-between items-center"><h1 className="text-[22px] font-semibold">Nissan GT-R</h1><i className="ri-heart-2-fill text-red-600 text-[22px]"></i></div>
          <div className="flex gap-2 items-center">
           <ReviewStar/>
           <p className="text-sm text-[#6B7280]">440+ Reviewers</p>
          </div>
          <p className="mt-8 text-[#525864]">NISMO has become the embodiment of Nissans outstanding performance, inspired by the most unforgiving proving ground, the “race track”.</p>

          <div className="mt-6 grid gap-y-4 grid-cols-1 sm:grid-cols-2 gap-x-10 sm:gap-y-2">
            <div className="flex items-center justify-between"><h1 className="text-[#90A3BF]">TypeCar</h1><p className="text-[#596780]">Sport</p></div>
            <div className="flex items-center justify-between"><h1 className="text-[#90A3BF]">Capacity</h1><p className="text-[#596780]">2 Person</p></div>
            <div className="flex items-center justify-between"><h1 className="text-[#90A3BF]">Steering</h1><p className="text-[#596780]">Manual</p></div>
            <div className="flex items-center justify-between"><h1 className="text-[#90A3BF]">Gasoline</h1><p className="text-[#596780]">70L</p></div>
          </div>

          <div className="flex justify-between mt-8">
            <div className="flex flex-col">
             <h1><span className="text-xl font-bold">$80.00/</span><span className="text-[#90A3BF] text-base">day</span></h1>
             <p className="text-[#90A3BF] text-base line-through">$100.00</p>
            </div>
            <Link href="/PaymentMethod"><Button stylee="bg-[#3563E9] px-3 py-2 rounded-md" contentStyle="text-white" content="Rent Now"/></Link>
          </div>
        </div>
       </div>

       <div className="mt-6 md:mt-10 bg-white flex flex-col gap-4 px-2 py-3 sm:p-3 rounded-lg">
        <div><h1 className="text-xl font-semibold">Reviews <span className="bg-[#3563E9] p-2 rounded-full text-white text-lg font-semibold">13+</span></h1></div>
        <div>
         <Review userImg={user1} name="Alex Stanton" position="CEO at Bukalapak" review="We are very happy with the service from the MORENT App. Morent has low prices..." date="21 July 2022"/>
         <Review userImg={user2} name="Skylar Dias" position="CEO at Amazon" review="We are greatly helped by the services of the MORENT Application. Morent has low prices..." date="20 July 2022"/>
        </div>
        <div className="flex justify-center mt-2">
          <p className="text-[#90A3BF] text-base flex gap-2 items-center cursor-pointer">Show All<Image src={arrow} alt='arrow down' className='w-3 h-4'/></p>
        </div>
       </div>

       <div>
       <PopCars
        style="mt-8"
        grid="grid-cols-3"
        speacility="Recent Car"
        cars={[
          <Cars key={1} CarName="Koenigsegg" carTurbo="sport car" img={Car1} liter="90" capacity="2" price="$99.00" route="/PaymentMethod"/>,
          <Cars key={2} CarName="Nissan GT-R" carTurbo="sport car" img={Car2} liter="80" capacity="2" price="$120.00" route="/PaymentMethod"/>,
          <Cars key={3} CarName="Rolls - Royce"carTurbo="family car" img={Car3} liter="70" capacity="4" price="$180.10" route="/PaymentMethod"/>,
        ]}
      />
      <RecomCars 
       style="pb-7"
       gridCol="grid-cols-3"
       cars={[
       <Cars key={1} CarName="All New Rush" carTurbo="family car" img={car4} liter="70" capacity="6" price="$78.00" route="/PaymentMethod"/>,
       <Cars key={2} CarName="CR-V" carTurbo="family car" img={car5} liter="80" capacity="8" price="$80.00" route="/PaymentMethod"/>,
       <Cars key={3} CarName="All New Terios" carTurbo="family car" img={car6} liter="90" capacity="2" price="$90.00" route="/PaymentMethod"/>,
       ]}/>
       </div>
      </div>
    </section>
  );
}
