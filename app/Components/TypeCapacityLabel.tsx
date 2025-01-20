import React from "react";

export default function TypeCapacityLabel(props:any) {
  return (
    <label className="flex items-center gap-2 mt-2 w-max cursor-pointer">
      <input type="checkbox" className="w-4 h-4" />
      <span className="text-[#6B7280] text-sm">{props.carTypeOrSpace}</span>
    </label>
  );
}
