import React from "react";
import accountImg from "../../public/images/userImg.png";
import Image from "next/image";
import Link from "next/link";

export default function Header () {
  return (
    <header className="flex flex-col gap-3 py-3 px-4 md:flex-row md:px-8 justify-between items-center min-h-[80px] shadow-md box-border">
      <div className="flex justify-between items-center w-full md:max-w-max"><Link href="/" className="text-[#3563E9] text-[28px] font-semibold">MORENT</Link><Link href="/Dashboard" className="w-9 h-9 md:hidden rounded-full"><Image src={accountImg} alt="userImage" /></Link></div>
      <div className="bg-[#F3F4F6] h-11 w-[100%] lg:w-[50%] rounded-lg flex items-center gap-3 p-3"><i className="ri-search-line text-[21px] text-gray-500"></i><input type="text" placeholder="Search something here" className="outline-none bg-[#F3F4F6] w-[100%]"/></div>
      <div className="hidden md:flex gap-4 items-center">
        <div className="flex justify-center items-center w-9 h-9 border border-gray-500 hover:border-[#3563E9] rounded-full cursor-pointer hover:bg-[#3563E9] group transition-all duration-500 ease-in-out"><i className="ri-poker-hearts-fill text-gray-600 text-[20px] group-hover:text-white"></i></div>
        <div className="flex justify-center items-center w-9 h-9 border border-gray-500 hover:border-[#3563E9] rounded-full cursor-pointer hover:bg-[#3563E9] group transition-all duration-500 ease-in-out"><i className="ri-notification-3-fill text-gray-600 text-[20px] group-hover:text-white"></i></div>
        <div className="flex justify-center items-center w-9 h-9 border border-gray-500 hover:border-[#3563E9] rounded-full cursor-pointer hover:bg-[#3563E9] group transition-all duration-500 ease-in-out"><Link href="/Dashboard"><i className="ri-settings-4-fill text-gray-600 text-[20px] group-hover:text-white"></i></Link></div>
        <Link href="/Dashboard" className="w-9 h-9 rounded-full"><Image src={accountImg} alt="userImage" /></Link>
      </div>
    </header>
  );
}
