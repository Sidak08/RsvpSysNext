import Image from "next/image";
import EcoFreindly from "./eco_freindly";
import styles from "./desktop.module.css";

const Desk_right_side = () => {
  return (
    <div className="h-full flex flex-col justify-start items-start w-[40%]">
      <div className="flex flex-row justify-start items-center w-full">
        <Image
          src={"/images/tableBookingInfo.png"}
          height={306}
          width={388}
          alt="tableBookingInfo"
          className="w-[306px] h-[387.91px] rounded-[14px] border-8 border-zinc-800 mr-3"
        />
        <Image
          src={"/images/dashboard.png"}
          height={378}
          width={420}
          alt="dashboard-flipped"
          className="rounded-[14px] border-8 border-zinc-800 mr-3 h-full w-full transform rotate-180"
        />
      </div>
      <div className="w-[497px] h-[344px] bg-stone-900 rounded-[14px] border-8 border-emerald-500 mt-3 flex flex-col items-center justify-between">
        <Image
          src={"/images/banner.png"}
          width={497}
          height={344}
          alt="Eco freindly banner"
          className="w-[484px] h-[167px] rounded-tl-lg rounded-tr-lg"
        />
        <EcoFreindly />
      </div>
    </div>
  );
};

export default Desk_right_side;
