import React from "react";
import rating from "./images/star.png";
const MostPopular = ({ title, picture }) => {
  return (
    <div className="mb-3 text-left">
      <img className="w-[228px] h-[135px]" src={picture} />
      <p className="pt-1 pb-3 text-lg">{title}</p>
      <div className="grid grid-flow-col justify-start items-center gap-2 text-xs text-[#B6B7B7]">
        <p>Café</p>
        <div className="text-[#FC6011] ml-1 mr-1">·</div>
        <p>Western Food</p>
        <img src={rating} />
        <p className="text-[#FC6011]">4.9</p>
      </div>
    </div>
  );
};
export default MostPopular;
