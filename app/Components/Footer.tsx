import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-white pt-7 px-6 lg:pl-24">
      <div className="flex gap-8 md:gap-20 flex-col md:flex-row justify-between">
      <div className="w-[100% ]lg:w-[35%]">
        <h1 className="text-[#3563E9] font-semibold text-2xl">MORENT</h1>
        <p className="pt-3 text-sm">Our vision is to provide convenience and help increase your sales business.</p>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 w-[100%] lg:w-[55%]">
        <div>
          <h1 className="text-lg font-semibold">About</h1>
         <div className="flex flex-col gap-3 mt-4">
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">How it works</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Featured</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Partnership</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Business Relation</Link>
         </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Community</h1>
        <div className="flex flex-col gap-3 mt-4">
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Events</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Blog</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Podcast</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Invite a friend</Link>
        </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Socials</h1>
         <div className="flex flex-col gap-3 mt-4">
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Discord</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Instagram</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Twitter</Link>
          <Link href="/" className="text-sm text-[#6B7280] hover:text-[#3563E9] w-max">Facebook</Link>
         </div>
        </div>
      </div>
      </div>

      <div className="mt-12 py-6 flex flex-col sm:flex-row gap-3 justify-between items-center border-t-2 border-t-[#13131329]">
        <div><p className="font-semibold text-sm text-[#1A202C]">©2022 MORENT. All rights reserved</p></div>
        <div className="flex items-center"><p className="text-[#1A202C] text-sm">Privacy & Policy.</p><p className="text-[#1A202C] text-sm">Terms & Condition</p></div>
      </div>
    </footer>
  );
}
