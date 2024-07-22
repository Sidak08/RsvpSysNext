import Image from "next/image";
const Header = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="mt-5 flex flex-col justify-center items-center md:hidden">
        <div className="flex flex-col justify-between items-start">
          <div className=" text-white text-[64px] font-normal font-['Inika']">
            Best Quality
          </div>
          <div className=" text-white text-[64px] font-normal font-['Inika'] ">
            Needs
          </div>
          <div className=" text-indigo-700 text-[76px] font-bold font-['Inika'] underline">
            Best Tools
          </div>
        </div>
      </div>
      <div className="mt-24 hidden md:flex w-full pl-[47px] flex-row justify-between items-center">
        <div className="flex flex-col justify-between items-start">
          <div
            className="text-white font-normal font-['Inika']"
            style={{ fontSize: "clamp(2rem, 8vw, 84px)" }}
          >
            Best Quality
          </div>
          <div
            className="left-[5px text-white font-normal font-['Inika']"
            style={{ fontSize: "clamp(2rem, 8vw, 84px)" }}
          >
            Needs
          </div>
          <div
            className="text-indigo-700 font-bold font-['Inika'] underline"
            style={{ fontSize: "clamp(3rem, 10vw, 108px)" }}
          >
            Best Tools
          </div>
        </div>

        <div className="flex flex-row justify-between items-center ">
          <div className="rounded-[14px] border-8 border-zinc-800 flex justify-center items-center">
            <Image
              src="/images/info.png"
              width={243}
              height={377}
              alt="dashboard-info-pic"
            />
          </div>
          <div className="ml-5 rounded-tl-[14px] rounded-bl-[14px] shadow border-l-8 border-t-8 border-b-8 border-zinc-800 flex justify-center items-center h-[377px] w-[377px] overflow-hidden">
            <Image
              src="/images/dashboard.png"
              alt="dashboard-info-pic"
              width={420}
              height={377.35}
              className="h-full w-full object-cover object-left-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
