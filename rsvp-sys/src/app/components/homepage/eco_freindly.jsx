"use client";
import styles from "./desktop.module.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const EcoFreindly = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="md:-mt-10 w-[90%] h-[350px] bg-stone-900 rounded-[14px] border-8 border-emerald-500 lg:mt-3 flex flex-col items-center justify-between">
      <Image
        src={"/images/banner.png"}
        width={495}
        height={167}
        alt="Eco freindly banner"
        className="w-[full] h-[167px] rounded-tl-lg rounded-tr-lg"
      />
      <div className="w-[90%] flex md:flex-col lg:flex-row justify-evenly items-center">
        {isMobile ? <Mobile /> : <></>}
        {!isMobile ? <Desktop /> : <></>}
      </div>
    </div>
  );
};

const Desktop = () => {
  return (
    <div className="w-[90%] flex flex-row justify-evenly items-center">
      <div className={`${styles.bannerText} mb-9`}>Eco Friendly </div>
      <div className="w-[209px]">
        <span className="text-white text-base font-normal font-['Inter']">
          We are completely carbon neutral company Planting
        </span>
        <span className="text-emerald-500 text-base font-normal font-['Inter']">
          {" "}
        </span>
        <span className="text-emerald-500 text-base font-semibold font-['Inter']">
          One Tree
        </span>
        <span className="text-white text-base font-semibold font-['Inter']">
          {" "}
        </span>
        <span className="text-emerald-500 text-base font-semibold font-['Inter']">
          per{" "}
        </span>
        <span className="text-white text-base font-semibold font-['Inter']">
          paying
        </span>
        <span className="text-emerald-500 text-base font-semibold font-['Inter']">
          {" "}
          costumer
        </span>
        <span className="text-white text-base font-normal font-['Inter']">
          {" "}
          we get. You can have tree planted too :)
        </span>
      </div>
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="w-[90%] flex flex-col justify-evenly items-center mt-5">
      <div className=" text-center text-lime-500 text-5xl font-semibold font-['Inter']  ml-[-20px]">
        Eco Friendly{" "}
      </div>
      <div className="mt-3 ml-[40px] w-[295px] h-[110px]">
        <span className="text-white text-base font-normal font-['Inter']">
          We are completely carbon neutral company Planting
        </span>
        <span className="text-emerald-500 text-base font-normal font-['Inter']">
          {" "}
        </span>
        <span className="text-emerald-500 text-base font-semibold font-['Inter']">
          One Tree
        </span>
        <span className="text-white text-base font-semibold font-['Inter']">
          {" "}
        </span>
        <span className="text-emerald-500 text-base font-semibold font-['Inter']">
          per{" "}
        </span>
        <span className="text-white text-base font-semibold font-['Inter']">
          paying
        </span>
        <span className="text-emerald-500 text-base font-semibold font-['Inter']">
          {" "}
          costumer
        </span>
        <span className="text-white text-base font-normal font-['Inter']">
          {" "}
          we get. You can have tree planted too :)
        </span>
      </div>
    </div>
  );
};

export default EcoFreindly;
