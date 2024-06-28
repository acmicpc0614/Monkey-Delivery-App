import React from "react";
import rating from "./images/star.png";
const FoodDataRow = ({ title, picture }) => {
  return (
    <div className="py-3">
      <div className="">
        <img className="w-dvw ml-auto mr-auto" src={picture}></img>
      </div>
      <div className="px-5 py-1">
        <p className="font-bold text-[#4A4D4B] py-1">{title}</p>
        <div className="grid grid-flow-col justify-start items-center gap-2 text-xs text-[#4a4d4b]">
          <img src={rating} />
          <p className="text-[#FC6011]">4.9</p>
          <p>(124 ratings)Café</p>
          <div className="text-[#FC6011] ml-1 mr-1">·</div>
          <p>Western Food</p>
        </div>
      </div>
    </div>
  );
};
export default FoodDataRow;
