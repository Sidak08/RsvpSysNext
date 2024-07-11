import Review from "./review";
import Features from "./features";
import Image from "next/image";
import Customer from "./customer_everything";

const Desk_left_side = () => {
  return (
    <div className="flex flex-col justify-evenly items-center w-[60%]">
      <div className="flex flex-row justify-end items-center w-full">
        <Review />
        <div className="flex flex-col justify-evenly items-center ml-3 m-2 ">
          <Image
            src="/images/upComingReserve.png"
            width={308}
            height={204}
            alt="dashboard-upComingReserve"
            className="w-[308px] h-[204px] rounded-[14px] border-8 border-zinc-800 mb-2"
          />
          <Image
            src="/images/customerInfo.png"
            width={309}
            height={388.67}
            alt="dashboard-customerInfo"
            className="w-[309px] h-[388.67px] rounded-[14px] border-8 border-zinc-800 mb-2"
          />
        </div>
      </div>
      <Features />
      <Customer />
    </div>
  );
};
export default Desk_left_side;
