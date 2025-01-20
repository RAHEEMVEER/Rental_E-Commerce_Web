import React from "react";

export default function BillingInfoLabel(props: any) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm">{props.content}</span>
      <input type={`${props.inputType}`} className={`w-full text-sm py-3 px-3 rounded-md outline-none ${props.bgColor}`} placeholder={`${props.holder}`}/>
    </label>
  );
}
