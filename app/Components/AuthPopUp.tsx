import React from 'react';
import { SignInButton, SignedOut, } from '@clerk/nextjs'

export default function AuthPopUp() {
    return (
        <section className='w-full min-h-[70vh] flex justify-center items-center bg-[#e7e9ee] px-3'>
            <div className='bg-white w-[400px] min-h-[250px] relative rounded-md pt-9 px-4 flex justify-center items-center flex-col'>
                <div className='absolute left-[42%] top-[-10%] bg-red-600 rounded-full w-12 h-12 flex justify-center items-center'><i className="ri-close-fill text-2xl text-white"></i></div>
                <h1 className='text-center text-red-600 font-semibold text-xl'>Authenticaion Required</h1>
                <p className='mt-3 text-sm text-center'>"To access this content, kindly log in to continue exploring our services."</p>
                <div className='flex justify-center items-center mt-6'>
                    <SignedOut>
                        <SignInButton>
                            <button className="bg-[#3563E9] py-2 px-3 rounded-md text-base text-white">Login</button>
                        </SignInButton>
                    </SignedOut>
                </div>
            </div>
        </section>
    );
}
