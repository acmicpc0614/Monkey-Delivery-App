import React from "react";
const MostPopular = ({ title, picture }) => {
  return (
    <div>
      <img className="w-[228px] h-[135px]" src={picture} />
      <p className="pt-1 pb-3">{title}</p>
    </div>
  );
};
export default MostPopular;
