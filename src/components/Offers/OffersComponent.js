
import RatingStar from "../../pages/Offers/images/rateStar.svg";
const OffersComponent = ({description,img}) => {
  return (
    <div className="w-full mt-[22px]">
      <img src={img} className="w-full" />
      <div className="ml-[26px]">
        <div className="text-base text-[#4A4B4D] font-bold mt-[7px] ">
            {description}
        </div>
        <div className="flex flex-row items-center mb-[5px]">
          <div className="text-[#FC6011] text-[11px] flex flex-row mr-[5px]">
            <img src={RatingStar} className="mr-1" />
            4.9
          </div>
          <div className="text-[#B6B7B7] text-xs ">(124 ratings) Café</div>
          <div className="text-[#FC6011] text-base mb-[6px]">.</div>
          <div className="text-[#B6B7B7] text-xs">Western Food</div>
        </div>
      </div>
    </div>
  );
};

export default OffersComponent;
