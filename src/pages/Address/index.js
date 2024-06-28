import previous from "./img/previous.svg";
import map from "./img/map.svg";

const Address = () => {
  return (
    <>
      <div className="">
        <div className="py-8 px-6">
          <div className="flex justify-start items-center gap-5">
            <div>
              <img src={previous} alt="No image" />
            </div>
            <p className="text-2xl text-[#4A4B4D]">Change Address</p>
          </div>
        </div>
        <div className="bg-zinc-600 h-[520px] px-3 mt-10">
          <img className=" h-full scale-150" src={map} alt="no map" />
        </div>
      </div>
    </>
  );
};
export default Address;
