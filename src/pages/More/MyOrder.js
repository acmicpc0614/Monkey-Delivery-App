import React from "react";
import previous from "./images/previous.svg";
import sandwitch from "./images/sandwitch.svg";
import star from "./images/star.svg";
import position from "./images/location-pin.svg";
import PriceList from "../../components/More/PriceList";

const MyOrder = () => {
  const priceList = [
    { food: "Beef Burger", price: "16" },
    { food: "Classic Burger", price: "14" },
    { food: "Cheese Chicken Burger", price: "17" },
    { food: "Chicken Legs Basket", price: "15" },
    { food: "French Fries Large", price: "6" },
  ];
  return (
    <>
      <div className="w-screen">
        <div className="py-8 px-6">
          <div className="flex justify-start items-center gap-5">
            <di>
              <img src={previous} />
            </di>
            <p className="text-2xl text-[#4A4B4D]">My Order</p>
          </div>
          <div className="flex justify-start gap-4 items-center flex-wrap text-xs text-[#B6B7B7] font-normal py-7">
            <div>
              <img className="w-[80px] h-[80px]" src={sandwitch} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold text-[#4A4B4D]">King Burgers</p>
              <div className="flex items-center gap-1">
                <img src={star} />
                <p>4.9</p>
                <p>(124 ratings)</p>
              </div>
              <div className="flex">
                <p>Burger</p>
                <div className="text-[#FC6011] ml-2 mr-2">·</div>
                <p>Western Food</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={position} />
                <p>No 03, 4th Lane, Newyork</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F6F6F6] px-5">
          {priceList.map((item, index) => {
            return <PriceList food={item.food} price={item.price} />;
          })}
        </div>
        <div className="px-5">
          <div className="flex justify-between items-center py-3">
            <p className="text-sm font-bold">Delivery Instrusctions</p>
            <p>+</p>
            <p>Add Notes</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyOrder;
