import { useNavigate } from "react-router-dom";
import MonkeyBtn from "../../components/MonkeyBtn";
import { useState } from "react";
const Signup = () => {
  const navigator = useNavigate();
  const handleLogin = () => {
    navigator("/login");
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMoblie] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  // "id": 0,
  // "name": "admin",
  // "email": "admin",
  // "mobileno": "123456789",
  // "address": "The Earth",
  // "Password": "123456"
  return (
    <>
      <div className="bg-white px-8 pt-14 pb-10 text-center h-[812px] content-between">
        <div className="text-center text-3xl">Sign Up</div>
        <div className="pt-2 text-[#7C7D7E] text-sm">
          Add your details to sign up
        </div>
        <div className="pt-8">
          <input
            className="w-full rounded-full bg-[#F2F2F2] px-8 py-3 text-sm h-14"
            placeholder="Name"
          />
        </div>
        <div className="pt-7">
          <input
            className="w-full rounded-full bg-[#F2F2F2] px-8 py-3 text-sm h-14"
            placeholder="Email"
          />
        </div>
        <div className="pt-7">
          <input
            className="w-full rounded-full bg-[#F2F2F2] px-8 py-3 text-sm h-14"
            placeholder="Mobile No"
          />
        </div>
        <div className="pt-7">
          <input
            className="w-full rounded-full bg-[#F2F2F2] px-8 py-3 text-sm h-14"
            placeholder="Address"
          />
        </div>
        <div className="pt-7">
          <input
            className="w-full rounded-full bg-[#F2F2F2] px-8 py-3 text-sm h-14"
            placeholder="Password"
          />
        </div>
        <div className="py-7">
          <input
            className="w-full rounded-full bg-[#F2F2F2] px-8 py-3 text-sm h-14"
            placeholder="Confirm Password"
          />
        </div>
        <div
          className="w-full hand"
          onClick={() => {
            navigator("/welcome");
          }}
        >
          <MonkeyBtn bgcolor={"#FC6011"} title={"Sign up"} />
        </div>
        <div className="flex justify-center pt-6 gap-1">
          <div className="text-[#7C7D7E] text-sm self-center">
            Already have an Account?
          </div>
          <div>
            <button
              className="bg-transparent text-[#FC6011] self-center"
              onClick={() => handleLogin()}
            >
              <b>Log in</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
