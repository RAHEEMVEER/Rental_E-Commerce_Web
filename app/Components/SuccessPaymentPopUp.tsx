"use client";

import React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SuccessPaymentPopUp() {
    const box = useRef(null);

    useEffect(() => {
        if (box.current) {
            gsap.to(box.current, {
                opacity: 1,
                y: -100,
                duration: .8,
            });
        }
    }, []);

    return (
        <div className='fixed left-1/2 top-[50%] transform -translate-x-1/2 shadow-2xl opacity-0' ref={box}>
            <div className='bg-white w-[320px] sm:w-[350px] min-h-[230px] relative rounded-md pt-9 px-4 flex justify-center items-center flex-col'>
                <div className='absolute left-[42%] top-[-10%] bg-green-600 rounded-full w-12 h-12 flex justify-center items-center'><i className="ri-check-double-line text-white text-2xl"></i></div>
                <h1 className='text-center text-green-600 font-semibold text-xl'>Payment Successsfull</h1>
                <p className='mt-3 text-sm text-center'>"Thank you for renting with us! Wishing you a smooth and safe journey!"</p>
            </div>
        </div>
    );
};
