"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import "./navbar.css";

const Navbar = () => {
  const [renderMobileMenu, setRenderMobileMenu] = useState(false);
  const onClick = () => {
    setRenderMobileMenu(!renderMobileMenu);
    console.log(renderMobileMenu);
  };
  return (
    <div className="flex flex-row justify-between items-center w-full lg:mt-7 mt-2 relative">
      <div className="flex flex-row justify-between items-center ml-2 lg:ml-8 ">
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
        <div className="block md:hidden w-[161px] h-[38px] text-purple-700 text-[38px] font-normal font-['Inika']  ml-[11px] mb-3">
          QuikSeat
        </div>

        {/* Render this element on large screens */}
        <div className="hidden md:block w-[200px] h-[38px] text-purple-700 text-5xl font-normal font-['Inika'] ml-[38px] ">
          QuikSeat
        </div>
      </div>

      <div className="w-[350px] flex justify-between items-center mr-4 hidden md:flex">
        <Link href="#chat">
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
          <Link href="#pricing">
            <div className="text-white text-2xl font-normal font-['Inika']">
              Pricing
            </div>
          </Link>
        </div>
      </div>

      <div
        className={`w-full mr-4 mt-1 absolute md:hidden ${renderMobileMenu ? "fade-in" : "hidden"}`}
      >
        <button onClick={onClick} className="absolute top-[-19px] right-[27px]">
          <div className="w-[30px] h-[30px] relative">
            <div className="w-[36.37px] h-[6.06px] left-0 top-[25.71px] absolute origin-top-left -rotate-45 bg-zinc-300 rounded-[3px]" />
            <div className="w-[36.37px] h-[6.06px] left-[4.29px] top-0 absolute origin-top-left rotate-45 bg-zinc-300 rounded-[3px]" />
          </div>
        </button>
        <div className=" absolute w-[100%]  top-[50px] flex justify-center items-center">
          <div className="backdrop-blur-lg w-[90%] border-2 border-neutral-700 bg-neutral-800 bg-opacity-95 rounded-[14px] h-[150px] flex flex-col justify-evenly items-end">
            <div className="text-white text-[22px] font-normal font-['Inter']  mr-[14px]">
              <Link href={"#pricing"}>Pricing</Link>
            </div>
            <div className="w-[90%] h-0.5 bg-neutral-700 rounded-sm  mr-[14px]" />
            <div className="text-white text-[22px] font-normal font-['Inter']  mr-[14px]">
              <Link href={"/dashboard"}>Dashboard</Link>
            </div>
            <div className="w-[90%] h-0.5 bg-neutral-700 rounded-sm  mr-[14px]" />
            <div className="text-white text-[22px] font-normal font-['Inter']  mr-[14px]">
              <Link href={"#chat"}>Contact</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end md:hidden mr-4 w-full">
        <button
          onClick={onClick}
          className={`mr-4 ${renderMobileMenu ? "hidden" : "fade-in"}`}
        >
          <div className={`w-[30px] h-[27px] top-[5px]`}>
            <div className="w-[30px] h-[5px] right-[0px] top-0 absolute bg-zinc-300 rounded-[5px]" />
            <div className="w-[30px] h-[5px] right-[0px] top-[11px] absolute bg-zinc-300 rounded-[5px]" />
            <div className="w-[30px] h-[5px] right-[0px] top-[22px] absolute bg-zinc-300 rounded-[5px]" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
