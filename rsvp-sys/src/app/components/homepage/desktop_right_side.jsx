import Image from "next/image";

const Desk_right_side = () => {
  return (
    <div className="h-full flex flex-col justify-evenly items-center">
      <div className="flex flex-row justify-evenly items-center ">
        <Image
          src={"/images/tableBookingInfo.png"}
          height={306}
          width={388}
          alt="tableBookingInfo"
          className="w-[306px] h-[387.91px] rounded-[14px] border-8 border-zinc-800"
        />
        <Image
          src={"/images/flipped-dashboard.png"}
          height={354}
          width={190}
          alt="dashboard-flipped"
          className="w-[190px] h-[354px]"
        />
      </div>
    </div>
  );
};

export default Desk_right_side;
