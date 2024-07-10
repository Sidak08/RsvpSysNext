import Image from "next/image";
import EcoFreindly from "./eco_freindly";
import styles from "./desktop.module.css";
import Chat from "./chat";

const Desk_right_side = () => {
  return (
    <div className="flex flex-col justify-start items-start w-[40%]">
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

      <EcoFreindly />
      <Chat />
    </div>
  );
};

export default Desk_right_side;
