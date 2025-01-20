import React from "react";
import Image from "next/image";
import ReviewStar from "./ReviewStar";

export default function Review(props: any) {
  return (
    <div className="flex gap-3 sm:gap-2 p-2 mt-2">
      <div><Image src={props.userImg} alt="userImage" className="w-9"/></div>
      <div className="w-full">
        <h1 className="text-base font-semibold flex justify-between">{props.name} <span className="text-sm font-medium text-[#6B7280]">{props.date}</span></h1>
        <div className="flex justify-between items-center mt-[-4px]"><p className="text-xs text-[#6B7280]">{props.position}</p><ReviewStar/></div>
        <p className="text-[#596780] text-sm mt-2 md:mt-1">{props.review}</p>
      </div>
    </div>
  );
}
