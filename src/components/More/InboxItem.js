import starEmpty from "../Ratings/images/empty.svg";
import starFill from "../Ratings/images/fill.svg";

const InboxItem = ({ title, content, time }) => {
  return (
    <>
      <div className="flex flex-row  border-b h-[88px] px-[22px] hover:bg-[#eeeeee]">
        <div className="flex">
          <div className="w-[10px] h-[10px] rounded-full bg-[#EE5A30] mt-[15px]" />
        </div>
        <div className=" flex pt-3 ml-1 flex-row">
          <div className="">
            <div className="overflow-y-hidden h-6 text-[14px] text-[#4A4B4D]">
              {title}
            </div>
            <div className=" overflow-y-hidden line-clamp-1 text-[12px] text-[#B6B7B7]">
              {content}
            </div>
          </div>
          <div className="flex flex-col w-[10%] items-end">
            <div className="text-[8px] text-[#B6B7B7]">{time}</div>
            <div>
              <img src={starEmpty} alt="star" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InboxItem;
