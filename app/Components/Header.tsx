"use client";

import React from "react";
import { useRef } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function Header({ login }: { login: React.ReactNode }) {

  const [route, setRoute] = useState<string>("");
  const [nav, setNav] = useState<boolean>(false);
  let path = usePathname();
  let navBox = useRef(null);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/Dashboard", label: "Dashboard" },
    { href: "/Category", label: "Category" },
    { href: "/PaymentMethod", label: "Payment" },
  ];

  const animateNav = () => {
    if (navBox.current) {
      gsap.to(navBox.current, {
        x: 100,
        duration: .8,
        ease: "power2.out",
      });
    }
  };

  const delay = () => {
    setTimeout(() => {
      setNav(false);
    }, 1000);
  }

  useEffect(() => {
    setRoute(path);
  }, [path]);

  useEffect(() => { animateNav(); }, [])

  return (
    <header className={`flex justify-between items-center sticky top-0 z-50 w-full bg-white px-4 md:flex-row md:px-8 min-h-[70px] sm:min-h-[80px] shadow-md box-border`}>
      <div className="flex justify-between items-center w-full h-full md:max-w-max">
        <Link href="/" className="text-[#3563E9] text-[21px] sm:text-[28px] font-semibold">MORENT</Link>
        <div className="block md:hidden"><i className="ri-menu-fold-4-fill text-[#6B7280] text-xl sm:text-2xl" onClick={() => setNav(true)}></i></div>
      </div>
      <div className="hidden md:flex gap-9 items-center">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={`text-base py-1 relative transition-all ${route === item.href ? 'text-[#3563E9] after:w-full after:animate-line' : 'text-[#6B7280] after:w-0'} after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#3563E9]`}>{item.label}</Link>
        ))}
      </div>

      <div className={`block md:hidden fixed top-[68px] sm:top-[79px] left-0 w-[100%] h-screen overflow-hidden bg-white shadow-inner transition-transform duration-300 ${nav ? "animate-Nav translate-x-0" : "animate-Nav translate-x-full"}`}>
        <div className="flex justify-between items-center pt-4 pr-4"><div className="py-[6px] px-3 rounded-md text-sm text-[#3563E9] border-[#3563E9] relative">{login}</div><i className="ri-close-large-line text-base sm:text-xl" onClick={() => setNav(false)}></i></div>
        <div className="flex flex-col gap-4 px-3 pt-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`text-base py-1 relative transition-all w-max ${route === item.href ? 'text-[#3563E9] after:w-full after:animate-line' : 'text-[#6B7280] after:w-0'} after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#3563E9]`} onClick={delay}>{item.label}</Link>
          ))}
        </div>
      </div>

      <div className="hidden md:block">{login}</div>
    </header>
  );
};