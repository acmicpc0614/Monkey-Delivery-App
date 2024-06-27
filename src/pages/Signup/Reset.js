import { useNavigate } from "react-router-dom";
import MonkeyBtn from "../../components/MonkeyBtn";
const Reset = () => {
  const navigator = useNavigate();
  return (
    <>
      <div className="bg-white px-8 pt-9 pb-10 text-center h-[812px] content-between">
        <div className="text-center text-3xl text-[#4A4B4D]">
          Reset Password
        </div>
        <div className="pt-3 text-[#7C7D7E] text-sm">
          Please enter your email to receive a<br></br>link to create a new
          password via email
        </div>
        <div className="pt-16">
          <input
            className="w-full rounded-full bg-[#F2F2F2] px-8 py-3 text-sm h-14"
            placeholder="Email"
          ></input>
        </div>

        <div
          className="w-full py-8 cursor-pointer"
          onClick={() => {
            navigator("/otp");
          }}
        >
          <MonkeyBtn bgcolor={"#FC6011"} title={"Send"} />
        </div>
      </div>
    </>
  );
};

export default Reset;
