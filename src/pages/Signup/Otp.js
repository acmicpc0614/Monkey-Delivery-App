import { useNavigate } from "react-router-dom";
import MonkeyBtn from "../../components/MonkeyBtn";
const Otp = () => {
  const navigator = useNavigate();
  return (
    <>
      <div className="bg-white px-8 pt-10 pb-10 text-center h-[812px] content-between">
        <div className="text-center text-2xl text-[#4A4B4D]">
          We have sent an OTP to<br></br> your Mobile
        </div>
        <div className="py-3 text-[#7C7D7E] text-sm">
          Please check your mobile number 071******12<br></br>continue to reset
          password
        </div>
        <div className="flex py-10 justify-between">
          <input
            className="rounded-xl bg-[#F2F2F2] pt-2 text-center text-4xl h-14 w-14"
            placeholder="*"
          ></input>
          <input
            className="rounded-xl bg-[#F2F2F2] pt-2 text-center  text-4xl h-14 w-14"
            placeholder="*"
          ></input>
          <input
            className="rounded-xl bg-[#F2F2F2] pt-2 text-center  text-4xl h-14 w-14"
            placeholder="*"
          ></input>
          <input
            className="rounded-xl bg-[#F2F2F2] pt-2 text-center  text-4xl h-14 w-14"
            placeholder="*"
          ></input>
        </div>

        <div
          className="w-full cursor-pointer"
          onClick={() => {
            navigator("/newpwd");
          }}
        >
          <MonkeyBtn bgcolor={"#FC6011"} title={"Next"} />
        </div>
        <div className="flex justify-center pt-6 gap-1">
          <div className="text-[#7C7D7E] text-sm self-center">
            Didn't Receive?
          </div>
          <div>
            <button className="bg-transparent text-[#FC6011] self-center">
              <b>Click Here</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
