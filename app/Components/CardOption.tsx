"use client";

import React, { useState } from "react";
import Image from "next/image";
import CardForm from "./CardForm";

export default function CardOptions() {
  const [activeOption, setActiveOption] = useState<string | null>(null);

  function handleOptionClick(option: string) {
    setActiveOption(option === activeOption ? null : option);
  }

  const options = [
    { name: "Credit Card", img: "/images/Visa.png", option: "option1" },
    { name: "PayPal", img: "/images/PayPal.png", option: "option2" },
    { name: "Bitcoin", img: "/images/Bitcoin.png", option: "option3" },
  ];

  return (
    <div>
      {options.map((opt, idx) => (
        <div key={idx} className="bg-[#F6F7F9] px-3 py-3 mt-3 rounded-md">
          <div className="flex justify-between items-center">
            <label className="flex gap-2 cursor-pointer" htmlFor={opt.option}>
              <input type="radio" id={opt.option} name="card" onClick={() => handleOptionClick(opt.option)} className="cursor-pointer"/>
              <p className="text-sm">{opt.name}</p>
            </label>
            <Image src={opt.img} width={70} height={40} alt={opt.name} />
          </div>
          {activeOption === opt.option && <CardForm />}
        </div>
      ))}
    </div>
  );
}
