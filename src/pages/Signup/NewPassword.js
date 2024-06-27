import { useNavigate } from "react-router-dom";
import MonkeyBtn from "../../components/MonkeyBtn";
const NewPassword = () => {
  const navigator = useNavigate();
  return (
    <>
      <div className="bg-white px-8 pt-9 pb-10 text-center h-[812px] content-between">
        <div className="text-center text-3xl text-[#4A4B4D]">New Password</div>
        <div className="py-3 text-[#7C7D7E] text-sm">
          Please enter your email to receive a<br></br>link to create a new
          password via email
        </div>
        <div className="py-7">
          <input
            className="w-full rounded-full bg-[#F2F2F2] px-8 py-3 text-sm h-14"
            placeholder="New Password"
          ></input>
        </div>
        <div className="py-1">
          <input
            className="w-full rounded-full bg-[#F2F2F2] px-8 py-3 text-sm h-14"
            placeholder="Confirm Password"
          ></input>
        </div>

        <div
          className="w-full py-5 cursor-pointer"
          onClick={() => {
            navigator("/dashboard");
          }}
        >
          <MonkeyBtn bgcolor={"#FC6011"} title={"Next"} />
        </div>
      </div>
    </>
  );
};

export default NewPassword;
