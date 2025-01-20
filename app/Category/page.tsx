import React from "react";
import PickAndDrops from "../Components/PickAndDrop";
import CarTypeAndCapacity from "../Components/CarTypeAndCapacity";
import RecomCars from "../Components/RecomCars";
import Cars from "../Components/Cars";
import Car1 from "../../public/images/rentalCar1.png";
import Car2 from "../../public/images/rentalCar2.png";
import Car3 from "../../public/images/car3.png";
import car4 from "../../public/images/car4.png";
import car6 from "../../public/images/car6.png";
import car7 from "../../public/images/car7.png";
import car8 from "../../public/images/car8.png";
import car9 from "../../public/images/car9.png";

export default function page() {
  return (
    <section className="flex min-h-[100vh]">
      <CarTypeAndCapacity />
      <div className="flex flex-col bg-[#F6F7F9] px-3 py-5 lg:px-5 lg:py-7 w-full">
        <PickAndDrops styling="xl:flex-row items-center w-[100%] gap-2" style2="w-[100%] xl:w-[48%]"/>
        <RecomCars 
          style="pt-4"
          gridCol="grid-cols-3"
          cars={[
            <Cars key={1} CarName="Koenigsegg" carTurbo="sport car" img={Car1} liter="90" capacity="2" price="$99.00" route="/Details" />,
            <Cars key={2} CarName="Nissan GT-R" carTurbo="sport car" img={Car2} liter="80" capacity="2" price="$120.00" route="/Details" />,
            <Cars key={3} CarName="Rolls - Royce" carTurbo="family car" img={Car3} liter="70" capacity="4" price="$180.10" route="/Details" />,
            <Cars key={4} CarName="All New Rush" carTurbo="family car" img={car4} liter="70" capacity="6" price="$78.00" route="/Details" />,
            <Cars key={5} CarName="CR-V" carTurbo="family car" img={car9} liter="80" capacity="6" price="$80.00" route="/Details" />,
            <Cars key={6} CarName="All New Terios" carTurbo="family car" img={car6} liter="90" capacity="2" price="$90.00" route="/Details" />,
            <Cars key={7} CarName="MG ZX Exclusice" carTurbo="family car" img={car8} liter="70" capacity="4" price="$76.00" route="/Details" />,
            <Cars key={8} CarName="New MG ZS" carTurbo="family car" img={car7} liter="80" capacity="6" price="$86.00" route="/Details" />,
            <Cars key={9} CarName="MG ZX Excite" carTurbo="family car" img={car8} liter="70" capacity="4" price="$76.00" route="/Details" />
          ]}/>
      </div>
    </section>
  );
}
