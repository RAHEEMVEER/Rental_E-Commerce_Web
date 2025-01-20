import React from "react";
import TypeCapacityLabel from "./TypeCapacityLabel";

export default function CarTypeAndCapacity() {
  return (
    <div className="bg-white min-h-[100vh] min-w-[250px] p-5 shadow-inner hidden lg:block">
      <div>
        <h1 className="text-lg font-semibold">Type</h1>
        <form className="flex flex-col mt-1">
          <TypeCapacityLabel carTypeOrSpace="Sport" />
          <TypeCapacityLabel carTypeOrSpace="SUV" />
          <TypeCapacityLabel carTypeOrSpace="MPV" />
          <TypeCapacityLabel carTypeOrSpace="Sedan" />
          <TypeCapacityLabel carTypeOrSpace="Coupe" />
          <TypeCapacityLabel carTypeOrSpace="Hatchback" />
        </form>
      </div>

      <div className="mt-5">
        <h1 className="text-lg font-semibold">Capacity</h1>
        <form className="flex flex-col mt-1">
          <TypeCapacityLabel carTypeOrSpace="2 Person" />
          <TypeCapacityLabel carTypeOrSpace="4 Person" />
          <TypeCapacityLabel carTypeOrSpace="6 Person" />
          <TypeCapacityLabel carTypeOrSpace="8 or More" />
        </form>
      </div>

      <div className="mt-6">
        <h1 className="text-lg font-semibold">Price</h1>
        <form className="mt-2">
          <label className="flex flex-col"><input type="range" className="accent-blue-500"/><span className="text-[#6B7280] text-base">Max. $100.00</span></label>
        </form>
      </div>
    </div>
  );
}
