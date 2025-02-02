"use client";

import React from "react";
import { mainMenuLinks, prefrences } from "../Components/mapData";
import MainMenuLinks from "../Components/MainMenuLinks";
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import { CarsData } from "../[name]/page";
import Image from "next/image";
import { urlFor } from "../imageUrl";
import { useUser } from "@clerk/nextjs";

export default function Page() {
    const [transactionCars, setTransactionCars] = useState<CarsData[]>([]);
    const [car, setCar] = useState<CarsData | null>(null);
    const { isSignedIn, user } = useUser();
    const userId = user?.id;

    const fetchCarFromSan = async (user: string) => {
        try {
            const query = `*[_type == "transaction" && userId == $userId] | order(_createdAt desc)`;
            const data = await client.fetch(query, { userId: user });
            console.log("Fetched Data:", data);
            setTransactionCars(() => data);
            setCar(() => data[0]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (isSignedIn && userId) {
            fetchCarFromSan(userId);
        };
    }, [isSignedIn, userId]);

    return (
        <section className="flex min-h-[100vh]">
            <div className="bg-white min-h-[100vh] relative min-w-[250px] pt-5 px-4 shadow-inner hidden lg:block">
                <h1 className="text-[#78889f] text-base">Main Menu</h1>
                <div className="flex flex-col gap-1 mt-3">{mainMenuLinks.map((val, idx) => (<MainMenuLinks key={idx} img={val.icon} imgType={val.alt} LinkName={val.LinkName} />))}</div>
                <h1 className="text-[#78889f] text-base mt-10">Prefrences</h1>
                <div className="flex flex-col gap-1 mt-3">{prefrences.map((val, idx) => (<MainMenuLinks key={idx} img={val.icon} imgType={val.alt} LinkName={val.LinkName} />))}</div>
            </div>

            <div className="bg-[#F6F7F9] w-full px-2 sm:px-4 py-3 xl:py-6">
                <h1 className="text-center text-xl font-semibold mt-2 mb-5">Transaction History</h1>
                <div className="bg-white w-full rounded-md px-2 sm:px-4 py-3 xl:py-6">
                    {car ? transactionCars.map((data, index) => (
                        <div key={index} className="flex items-center gap-2 py-2 mt-6">
                            <div className="w-[22%] sm:w-[17%] md:w-[13%]"><Image src={data?.image ? urlFor(data.image).url() : "/placeholder.jpg"} alt="transaction cars" width={100} height={30} /></div>
                            <div className="flex flex-col w-[78%] sm:w-[83%] md:w-[100%]">
                                <div className="flex justify-between items-center"><h1 className="text-base xl:text-lg font-semibold">{data?.name}</h1><p className="text-xs xl:text-sm text-[#90A3BF]">{data?.date}</p></div>
                                <div className="flex justify-between items-center"><p className="text-xs xl:text-sm text-[#90A3BF]">{data?.type}</p><h1 className="text-base xl:text-lg font-semibold">{data?.pricePerDay}</h1></div>
                            </div>
                        </div>
                    )) : <div className="flex justify-center items-center min-h-[70vh]"><h1 className="flex justify-center text-red-600 text-base">No Recent Transactions</h1></div>}
                </div>
            </div>
        </section>
    );
};