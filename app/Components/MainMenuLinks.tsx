import React from "react";

export default function MainMenuLinks(props: any) {
  return (
    <div className="w-full py-2 px-2 flex gap-2 items-center hover:bg-[#3563E9] group cursor-pointer rounded-md">
      <i className={`${props.img} text-[#90A3BF] group-hover:text-white text-lg`}></i>
      <p className="text-sm text-[#6c7c93] group-hover:text-white">{props.LinkName}</p>
    </div>
  );
}
 
