import shopping from "./images/shopping.svg";
import income from "./images/income.svg";
import nextING from "./images/next.svg";
import bag from "./images/bag.svg";
import ring from "./images/ring.svg";
import mail from "./images/mail.svg";
import info from "./images/info.svg";
import { useNavigate } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
const Morepage = () => {
  const navigator = useNavigate();
  const Nextmove = ({ next }) => {
    console.log(next);
    navigator(next);
  };
  const data = [
    { icon: income, title: "Payment Details", next: "/payment" },
    { icon: bag, title: "My Orders", next: "/myorder" },
    { icon: ring, title: "Notifications", next: "/notification" },
    { icon: mail, title: "Inbox", next: "/inbox" },
    { icon: info, title: "About Us", next: "/aboutus" },
  ];

  const Moreitem = ({ icon, title, next }) => {
    return (
      <>
        <div className="py-[10px]" onClick={() => Nextmove({ next })}>
          <div className="flex bg-[#F6F6F6] rounded-full w-8 h-8 p-1 items-center justify-end mr-[-12px] absolute my-5 ml-[19rem]">
            <img className="border-black" src={nextING} />
          </div>
          <div className="bg-[#F6F6F6]  hover:bg-[#BBBBBB] h-[75px] rounded-md flex items-center pl-5 text-[#4A4B4D] w-80 ">
            <div className="bg-[#D8D8D8] rounded-full p-3 w-[53px] h-[53px] flex justify-center">
              <img src={icon} alt="No image" />
            </div>
            <div className="pl-5">{title}</div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="bg-[#FFFFFF] pt-8 pb-10 pl-3 pr-8 relative">
        <div className="flex justify-between pb-4">
          <div className="text-left text-2xl text-[#4A4B4D]">More</div>
          <div>
            <img className="" src={shopping} alt="No image" />
          </div>
        </div>
        <div className="bg-[#FF1717] text-white w-5 h-5 rounded-full text-center text-xs p-px absolute right-16 top-[19rem]">
          15
        </div>
        <div>
          {data.map((item) => {
            return (
              <Moreitem icon={item.icon} title={item.title} next={item.next} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Morepage;
