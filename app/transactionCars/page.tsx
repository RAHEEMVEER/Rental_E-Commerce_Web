"use client";

import React from "react";
import { mainMenuLinks } from "../Dashboard/page";
import { prefrences } from "../Dashboard/page";
import MainMenuLinks from "../Components/MainMenuLinks";
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import { CarsData } from "../[name]/page";
import Image from "next/image";
import { urlFor } from "../imageUrl";

export default function Page() {
    const [transactionCars, setTransactionCars] = useState<CarsData[]>([]);

    const fetchCarFromSan = async () => {
        try {
            const data = await client.fetch('*[_type == "transaction"] | order(_createdAt desc)');
            console.log("Fetched Data:", data);
            setTransactionCars(() => data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => { fetchCarFromSan() }, []);
    
    return (
        <section className="flex min-h-[100vh]">
            <div className="bg-white min-h-[100vh] relative min-w-[250px] pt-5 px-4 shadow-inner hidden lg:block">
                <h1 className="text-[#78889f] text-base">Main Menu</h1>
                <div className="flex flex-col gap-1 mt-3">{mainMenuLinks.map((val, idx) => (<MainMenuLinks key={idx} img={val.icon} imgType={val.alt} LinkName={val.LinkName} />))}</div>
                <h1 className="text-[#78889f] text-base mt-10">Prefrences</h1>
                <div className="flex flex-col gap-1 mt-3">{prefrences.map((val, idx) => (<MainMenuLinks key={idx} img={val.icon} imgType={val.alt} LinkName={val.LinkName} />))}</div>
                <div className="w-[87%] py-2 px-2 absolute bottom-3 flex gap-2 items-center hover:bg-[#3563E9] group cursor-pointer rounded-md">
                    <i className="ri-logout-circle-line text-[#90A3BF] group-hover:text-white text-lg"></i>
                    <p className="text-sm text-[#6c7c93] group-hover:text-white">Log Out</p>
                </div>
            </div>

            <div className="bg-[#F6F7F9] w-full px-2 sm:px-4 py-3 xl:py-6">
                <h1 className="text-center text-xl font-semibold mt-2 mb-5">Transaction History</h1>
                <div className="bg-white w-full rounded-md px-2 sm:px-4 py-3 xl:py-6">
                    {transactionCars.map((data, index) => (
                        <div key={index} className="flex items-center gap-2 py-2 mt-6">
                            <div className="w-[22%] sm:w-[17%] md:w-[13%]"><Image src={data?.image ? urlFor(data.image).url() : "/placeholder.jpg"} alt="transaction cars" width={100} height={30} /></div>
                            <div className="flex flex-col w-[78%] sm:w-[83%] md:w-[100%]">
                                <div className="flex justify-between items-center"><h1 className="text-base xl:text-lg font-semibold">{data?.name}</h1><p className="text-xs xl:text-sm text-[#90A3BF]">progress</p></div>
                                <div className="flex justify-between items-center"><p className="text-xs xl:text-sm text-[#90A3BF]">{data?.type}</p><h1 className="text-base xl:text-lg font-semibold">{data?.pricePerDay}</h1></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};