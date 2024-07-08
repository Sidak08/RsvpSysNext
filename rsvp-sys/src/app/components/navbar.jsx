import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full lg:mt-7 mt-2">
      <div className="flex flex-row justify-between items-center ml-8 ">
        <div className="hidden md:block w-[74px] h-[74.36px] relative">
          <div className="w-[17.18px] h-[17.18px] left-0 top-[54.26px] absolute origin-top-left rotate-[-1.23deg] bg-indigo-900 rounded-full" />
          <div className="w-[17.18px] h-[17.18px] left-[56.46px] top-[54.45px] absolute origin-top-left rotate-[-1.23deg] bg-purple-700 rounded-full" />
          <div className="w-[52.16px] h-[18.14px] left-[7.73px] top-[44.71px] absolute origin-top-left rotate-[-59deg] bg-purple-700 rounded-[23px]" />
          <div className="w-[46.40px] h-[18.14px] left-[24.47px] top-[65.02px] absolute origin-top-left rotate-[-59deg] bg-indigo-900 rounded-[23px]" />
        </div>

        <div className="block md:hidden w-[47px] h-[47.23px] relative">
          <div className="w-[10.91px] h-[10.91px] left-[-0px] top-[34.47px] absolute origin-top-left rotate-[-1.23deg] bg-indigo-900 rounded-full" />
          <div className="w-[10.91px] h-[10.91px] left-[35.86px] top-[34.58px] absolute origin-top-left rotate-[-1.23deg] bg-purple-700 rounded-full" />
          <div className="w-[33.13px] h-[11.52px] left-[4.91px] top-[28.40px] absolute origin-top-left rotate-[-59deg] bg-purple-700 rounded-[23px]" />
          <div className="w-[29.47px] h-[11.52px] left-[15.54px] top-[41.30px] absolute origin-top-left rotate-[-59deg] bg-indigo-900 rounded-[23px]" />
        </div>
        {/* Render this element on small screens */}
        <div className="block md:hidden w-[161px] h-[38px] text-purple-700 text-[38px] font-normal font-['Inika']  ml-[11px]">
          QuikSeat
        </div>

        {/* Render this element on large screens */}
        <div className="hidden md:block w-[200px] h-[38px] text-purple-700 text-5xl font-normal font-['Inika'] ml-[38px] ">
          QuikSeat
        </div>
      </div>

      <div className="w-[350px] flex justify-between items-center mr-4 hidden md:flex">
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

      <div className="block sm:hidden"> mobile </div>
    </div>
  );
};

export default Navbar;
