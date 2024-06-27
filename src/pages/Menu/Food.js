import shopCart from "./images/shopping-cart.svg";
import searchIcon from "./images/search-icon.svg";
const Food = () => {
  return <>
   <div className="w-full px-5">
        <div className="flex flex-row justify-between items-center mt-8">
          <p className="text-2xl text-[#4A4B4D]">Menu</p>
          <img src={shopCart} />
        </div>

        <div className="w-full mt-6">
          <img src={searchIcon} className="mt-3 ml-5 absolute z-10" />
          <input
            className="w-full h-11 bg-[#F2F2F2] rounded-full indent-14 outline-none"
            placeholder="Search food"
          ></input>
        </div>     
      </div>
      </>;
};

export default Food;
