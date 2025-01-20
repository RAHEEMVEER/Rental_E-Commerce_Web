import React from "react";
import Link from "next/link";
import "./style.css";

export default function PopCars(props:any) {
  return (
    <section className={`bg-[#F6F7F9] ${props.style}`}>
      <div className="flex justify-between items-center"><h1 className="text-[20px] font-semibold">{props.speacility}</h1><Link href="/" className="text-[#3563E9] hover:underline text-base">View All</Link></div>
      <div className={`grid ${props.grid} gap-4 mt-6 pb-5 elem`}>
      {props.cars.map((comp: any, index: number) => (<div key={index}>{comp}</div>))}
      </div>
    </section>
  );
}




