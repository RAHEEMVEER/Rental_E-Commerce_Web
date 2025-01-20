import React from 'react';

const Button = (props:any) => {
  return (
    <button className={`flex justify-center items-center ${props.stylee}`}><span className={`${props.contentStyle}`}>{props.content}</span></button>
  )
}
export default Button