import shopCart from "./images/shopping-cart.svg"
const Menu = () => {
  return <>
    <div className="w-full px-5">
      <div className="flex flex-row">
        <p className="text-2xl font-[#4A4B4D]">Menu</p>
        <img src={shopCart}/>
      </div>
      
    </div>
  </>;
};

export default Menu;
