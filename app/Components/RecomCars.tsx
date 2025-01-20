import React from 'react';
import "./style.css";

export default function RecomCars(props:any) {
  return (
    <div className={`${props.style}`}>
        {props.heading}
        <div className={`grid ${props.gridCol} gap-4 mt-6 elem`}>{props.cars.map((elem: any, idx: number) => (<div key={idx}>{elem}</div>))}</div>
        {props.showMore}
    </div>
  )
}
