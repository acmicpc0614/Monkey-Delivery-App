import { useNavigate } from "react-router-dom";

import previous from "./images/previous.svg";
import VISAimg from "./images/visa.svg";
import Paypalimg from "./images/paypal.svg";
import CheckoutPaymentItem from "../../components/More/CheckoutPaymentItem";
import { useState } from "react";
import chkIMG from "./images/selectRing.svg";
const Checkout = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/more");
  };
  const [chkNum, setChkNum] = useState(0);
  const MethodData = [
    {
      id: 1,
      title: "Cash on delivery",
    },
    {
      id: 2,
      img: VISAimg,
      title: "**** **** **** 2187",
    },
    {
      id: 3,
      img: Paypalimg,
      title: "johndoe@email.com",
    },
  ];
  return (
    <>
      <div className=" flex flex-col mt-[33px]">
        <div className="flex flex-row items-center justify-between px-[22px]">
          <div className=" flex flex-row justify-center gap-5">
            <img src={previous} onClick={handleBack} />
            <div className=" text-[24px]  text-[#4A4B4D]">Checkout</div>
          </div>
        </div>

        <div className="flex flex-col mt-[35px] justify-between h-[77px] px-[22px]">
          <div className="text-[#7C7D7E] text-[13px]">Delivery Address</div>
          <div className="flex justify-between items-center">
            <div className="text-[#4A4B4D] text-[15px] w-[160px] font-bold">
              653 Nostrand Ave., Brooklyn, NY 11216
            </div>
            <div className="text-[#FC6011] text-[13px] font-bold">Change</div>
          </div>
        </div>

        <div className=" bg-[#F6F6F6] w-full h-[12px] my-[18px]" />
        <div className="px-[22px] text-center justify-between flex">
          <div className="text-[#7C7D7E] text-[13px]">Payment method</div>
          <div className="text-[#FC6011] text-[13px] font-bold">
            +&nbsp;Add Card
          </div>
        </div>

        <div className="px-[22px] gap-[13px] flex flex-col">
          {MethodData.map((item, i) => (
            <CheckoutPaymentItem
              img={item.img}
              title={item.title}
              key={i}
              id={item.id}
              setChkNum={setChkNum}
              chkNum={chkNum}
              chkIMG={chkIMG}
            />
          ))}
        </div>
        <div className="bg-[#F6F6F6] w-full h-[12px] my-[18px]" />

        <div className="bg-[#F6F6F6] w-full h-[12px] my-[18px]" />
      </div>
    </>
  );
};

export default Checkout;
