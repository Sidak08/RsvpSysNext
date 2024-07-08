import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full mt-7">
      <div className="flex flex-row justify-between items-center ml-8 ">
        <div className="w-[74px] h-[74.36px] relative">
          <div className="w-[17.18px] h-[17.18px] left-0 top-[54.26px] absolute origin-top-left rotate-[-1.23deg] bg-indigo-900 rounded-full" />
          <div className="w-[17.18px] h-[17.18px] left-[56.46px] top-[54.45px] absolute origin-top-left rotate-[-1.23deg] bg-purple-700 rounded-full" />
          <div className="w-[52.16px] h-[18.14px] left-[7.73px] top-[44.71px] absolute origin-top-left rotate-[-59deg] bg-purple-700 rounded-[23px]" />
          <div className="w-[46.40px] h-[18.14px] left-[24.47px] top-[65.02px] absolute origin-top-left rotate-[-59deg] bg-indigo-900 rounded-[23px]" />
        </div>
        <div className="w-[200px] h-[38px] text-purple-700 text-5xl font-normal font-['Inika'] ml-8">
          QuikSeat
        </div>
      </div>
      <div className="w-[350px] flex justify-between items-center mr-4">
        <Link href="/chat">
          <div className="text-white text-[22px] font-normal font-['Inika']">
            Chat
          </div>
        </Link>
        <Link href="/dashboard">
          <div className="text-white text-[22px] font-normal font-['Inika']">
            Dashboard
          </div>
        </Link>
        <div className="w-[130px] h-[50px] bg-indigo-700 rounded-[10px] flex justify-center items-center">
          <Link href="/pricing">
            <div className="text-white text-2xl font-normal font-['Inika']">
              Pricing
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
