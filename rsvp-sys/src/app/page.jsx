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
        <div className="hidden md:block w-full ml-[47px] flex flex-row justify-between items-center">
          <div className="w-[502px] h-[354px] relative">
            <div className="left-[5px] top-0 absolute text-white text-[84px] font-normal font-['Inika']">
              Best Quality
            </div>
            <div className="left-[5px] top-[122px] absolute text-white text-[84px] font-normal font-['Inika']">
              Needs
            </div>
            <div className="left-0 top-[213px] absolute text-indigo-700 text-[108px] font-bold font-['Inika'] underline">
              Best Tools
            </div>
          </div>
          <div>
            <Image
              src="/images/info.png"
              width={502}
              height={354}
              alt="dashboard-info-pic"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
