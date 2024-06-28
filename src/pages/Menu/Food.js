import shopCart from "./images/shopping-cart.svg";
import searchIcon from "./images/search-icon.svg";
import FoodSlide from "../../components/Menu/FoodSlide";
import ApplePie from "../../pages/Menu/images/FrenchApplePie.svg";
import DarkChoCa from "../../pages/Menu/images/DarkChocolateCake.svg";
import StreetShake from "../../pages/Menu/images/streetShake.svg";
import Chew from "../../pages/Menu/images/Fudgy Chewy Brownies.svg";

const Food = () => {
  const slideContent = [
    { img: ApplePie, description: "French Apple Pie",rate:4.9,dessertName:"Minute by tuk tuk" },
    { img: DarkChoCa,description:"Dark Chocolate Cake",rate:4.7,dessertName:"Cakes by Tella" },
    { img: StreetShake, description:"Street Shake" ,rate:4.9,dessertName:"Café Racer"},
    { img: Chew, description:"Fudgy Chewy Brownies",rate:4.9,dessertName:"Minute by tuk tuk" },
  ];
  return (
    <>
      <div className="w-full">
        <div className="flex flex-row justify-between items-center mt-8  px-5">
          <p className="text-2xl text-[#4A4B4D]">Menu</p>
          <img src={shopCart} />
        </div>

        <div className="w-full mt-6  px-5">
          <img src={searchIcon} className="mt-3 ml-5 absolute z-10" />
          <input
            className="w-full h-11 bg-[#F2F2F2] rounded-full indent-14 outline-none"
            placeholder="Search food"
          ></input>
        </div>
        <div className="mt-[19px] mb-[17px]">
          {slideContent.map((item) => (
            <FoodSlide key={item._id} img={item.img} description={item.description} rate={item.rate} dessertName={item.dessertName}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Food;
