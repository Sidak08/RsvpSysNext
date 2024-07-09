import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col flex-space justify-between items-center">
      <Navbar />
      <div className="w-full">
        <div className="w-[354px] h-[249px] mt-5 relative block md:hidden">
          <div className="left-0 top-0 absolute text-white text-[64px] font-normal font-['Inika']">
            Best Quality
          </div>
          <div className="left-0 top-[83px] absolute text-white text-[64px] font-normal font-['Inika']">
            Needs
          </div>
          <div className="left-0 top-[150px] absolute text-indigo-700 text-[76px] font-bold font-['Inika'] underline">
            Best Tools
          </div>
        </div>
        <div className="hidden md:flex w-full pl-[47px] flex-row justify-between items-center">
          <div className="w-[502px] h-[354px] flex flex-col justify-between items-start">
            <div className=" text-white text-[84px] font-normal font-['Inika']">
              Best Quality
            </div>
            <div className="left-[5px text-white text-[84px] font-normal font-['Inika']">
              Needs
            </div>
            <div className=" text-indigo-700 text-[108px] font-bold font-['Inika'] underline">
              Best Tools
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-24">
            <div className="rounded-[14px] border-8 border-zinc-800">
              <Image
                src="/images/info.png"
                width={243}
                height={377}
                alt="dashboard-info-pic"
              />
            </div>
            <div className="ml-5 rounded-tl-[14px] rounded-bl-[14px] shadow border-l-8 border-t-8 border-b-8 border-zinc-800">
              <Image
                src="/images/dashboard.png"
                alt="dashboard-info-pic"
                width={420}
                height={377.35}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
