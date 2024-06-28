import React from "react";
const FoodDataColumn = ({ title, picture }) => {
  return (
    <div>
      <img className="w-[88px] h-[88px]" src={picture} />
      <p className="pt-1 pb-3">{title}</p>
    </div>
  );
};
export default FoodDataColumn;
