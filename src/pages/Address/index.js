import previous from "./images/previous.svg";
import map from "./images/map.svg";
import star from "./images/star.svg";
import forward from "./images/forward.svg";
import target from "./images/position.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const [position, setPosition] = useState({ x: 0, y: 150 });
  const navigate = useNavigate();
  const changePosition = (e) => {
    var scroll = document.getElementById("scroll");
    setPosition(() => {
      return {
        x: e.clientX - 180,
        y: e.clientY - 69,
      };
    });
  };
  return (
    <>
      <div className="w-full mb-32">
        <div className="py-8 px-6 ">
          <div className="flex justify-start items-center gap-5">
            <div>
              <img
                src={previous}
                alt="No image"
                onClick={() => {
                  navigate("/checkout");
                }}
              />
            </div>
            <p className="text-2xl text-[#4A4B4D]">Change Address</p>
          </div>
        </div>

        <div
          className="w-full overflow-x-scroll h-[520px] bg-slate-400 relate text-center"
          onClick={changePosition}
          id="scroll"
        >
          <img src={map} alt="No image" className="scale-[4] self-center" />
          <div
            className="absolute"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
          >
            <img
              src={target}
              alt="noImg"
              // className="translate-x-[-50%] translate-y-[-130%]"
            />
          </div>
        </div>

        <div className="px-5">
          <div className="bg-[#F2F2F2] flex justify-start items-center rounded-full w-full h-[45px] my-5">
            <div className="px-5 text-center text-xl text-[#4a4b4d]">
              <i className="fa fa-search font-sans"></i>
            </div>
            <div className="">
              <input
                className=" bg-transparent focus:outline-none hover:italic"
                placeholder="Search food"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <img className="" src={star} alt="No image" />
            <p className="flex-auto text-left text-[#4A4B4D] px-3">
              Choose a saved place
            </p>
            <img className="" src={forward} alt="No image" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Address;
