import { useState } from "react";
import Times from "./imgs/times.svg";
const AddCreditModal = ({ setIsOpen, Plus }) => {
	const [cardDelete, setCardDelete] = useState(false);

	return (
		<>
			<div className="w-full fixed h-full bg-[#0000002d] ">
				<div className="bg-[#ffffff] bottom-0 fixed rounded-t-3xl w-[100%] flex flex-row justify-center">
					<div className="  w-[88%] bg-[#FFFFFF] ">
						<div className="flex mt-3 flex-row justify-end">
							<img src={Times} onClick={() => setIsOpen(false)} />
						</div>
						<div className="flex flex-row mt-3 mb-6 border-b-[1px] border-[#7070700a]">
							<p className="text-[14px] font-bold">Add Credit/Debit Card</p>
						</div>
						<div className="my-4">
							<input
								type="text"
								placeholder="Card Number"
								value=""
								className="h-14 w-full bg-[#F2F2F2] text-[14px] rounded-full indent-10"></input>
						</div>
						<div className=" flex flex-row gap-[10%] items-center justify-between">
							<div className="flex flex-row justify-start">
								<p className="">Expiry</p>
							</div>

							<input
								type="text"
								placeholder="MM"
								className="rounded-full h-14 w-[28%] text-center bg-[#F2F2F2]"></input>

							<input
								type="text"
								placeholder="YY"
								className="rounded-full h-14 w-[28%] text-center bg-[#F2F2F2]"></input>
						</div>
						<div className="mt-7">
							<input
								type="text"
								placeholder="Security Code"
								value=""
								className="h-14 w-full bg-[#F2F2F2] text-[14px] rounded-full indent-10"></input>
						</div>
						<div className="mt-2">
							<input
								type="text"
								placeholder="First Name"
								value=""
								className="h-14 w-full bg-[#F2F2F2] text-[14px] rounded-full indent-10"></input>
						</div>
						<div className="mt-5">
							<input
								type="text"
								placeholder="Last Name Name"
								value=""
								className="h-14 w-full bg-[#F2F2F2] text-[14px] rounded-full indent-10"></input>
						</div>
						<div className=" my-9 flex flex-row items-center">
							<div className="flex-1 flex flex-row justify-start w-2/4">
								<p className=" h-[35px] text-[14px] line-clamp-1 truncate">
									You can remove this card at anytime
								</p>
							</div>
							<div className="flex flex-row justify-end items-center">
								<label className="switch relative inline-block w-9 h-4">
									<input
										type="checkbox"
										checked={cardDelete}
										onChange={() => {
											setCardDelete(!cardDelete);
										}}
										className="  marker:border-green-600"></input>
									<span className="slider bg-[#FC6011] round"></span>
								</label>
							</div>
						</div>

						<div className="mt-[38px] mb-7">
							<button className="flex flex-row gap-3 items-center justify-center h-14 w-[100%] px-3 text-[1rem] font-semibold rounded-full bg-[#FC6011]  text-[white]">
								<img alt="Noimg" className="max-w-none" src={Plus} />
								<p>Add Another Credit/Debit Card</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AddCreditModal;
