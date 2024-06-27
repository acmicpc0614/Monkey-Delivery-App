import mainbg from "./images/body.png";
import homeIMG from "./images/home.svg";
import homeActiveIMG from "./images/homeActive.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import menu from "./images/menu.svg";
import menuActive from "./images/menuActive.svg";
import bag from "./images/bag.svg";
import bagActive from "./images/bagActive.svg";
import profile from "./images/profile.svg";
import profileActive from "./images/profileActive.svg";
import more from "./images/more.svg";
import moreActive from "./images/moreActive.svg";

const HOME = 1;
const MENU = 2;
const OFFERS = 3;
const PROFILE = 4;
const MORE = 5;

const Footer = () => {
  const [seletct, setseletct] = useState(HOME);
  const navigate = useNavigate();
  return (
    <>
      <div
        className="h-[120px] mt-2 fixed bottom-0 w-screen" // fixed bottom-0
        style={{
          zIndex: 1000,
        }}
      >
        <div className="justify-center flex -z-10  w-screen">
          <img src={mainbg} className=" w-screen" />
        </div>
        <div // home avatar
          className="flex justify-center z-50  items-center"
          style={{
            transform: "translateY(-134px)",
          }}
        >
          <img
            src={seletct === HOME ? homeActiveIMG : homeIMG}
            className="w-[72px] hand"
            onClick={() => {
              setseletct(HOME);
              navigate("/dashboard");
            }}
          />
        </div>
        <div // icons
          className="flex z-50  justify-between px-8"
          style={{
            transform: "translateY(-130px)",
          }}
        >
          <div
            className="justify-center w-6 flex flex-col items-center hand"
            onClick={() => {
              setseletct(MENU);
              navigate("/menu");
            }}
          >
            <img src={seletct === MENU ? menuActive : menu} />
            <div
              className="text-[12px]"
              style={{
                color: seletct === MENU ? "#FC6011" : "#B6B7B7",
              }}
            >
              Menu
            </div>
          </div>
          <div
            className="justify-center w-6 flex flex-col items-center hand"
            onClick={() => {
              setseletct(OFFERS);
              navigate("/offers");
            }}
          >
            <img src={seletct === OFFERS ? bagActive : bag} />
            <div
              className="text-[12px]"
              style={{
                color: seletct === OFFERS ? "#FC6011" : "#B6B7B7",
              }}
            >
              Offers
            </div>
          </div>
          <div></div>
          <div></div>
          <div
            className="justify-center w-6 flex flex-col items-center hand"
            onClick={() => {
              setseletct(PROFILE);
              navigate("/profile");
            }}
          >
            <img src={seletct === PROFILE ? profileActive : profile} />
            <div
              className="text-[12px]"
              style={{
                color: seletct === PROFILE ? "#FC6011" : "#B6B7B7",
              }}
            >
              Profile
            </div>
          </div>
          <div
            className="justify-center w-6 flex flex-col items-center hand"
            onClick={() => {
              setseletct(MORE);
              navigate("/more");
            }}
          >
            <img src={seletct === MORE ? moreActive : more} />
            <div
              className="text-[12px]"
              style={{
                color: seletct === MORE ? "#FC6011" : "#B6B7B7",
              }}
            >
              More
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
