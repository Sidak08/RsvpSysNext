import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const CharityBanner = ({}) => {
  return (
    <div className="flex justify-evenly items-center w-[95%] h-[280px] bg-[#1b1a1a] rounded-[14px] border-4 border-[#23c484] mt-7 -mb-10">
      <Image
        src="/charityEvent.svg"
        width={362}
        height={228}
        alt="image of text charity banner"
      />
      <div className="w-[60%] h-[234px] bg-[#2b2626] rounded-[14px] shadow-inner flex justify-between items-center">
        <div className="w-full flex item-center justify-center">
          <div className=" max-w-64 text-white text-2xl font-semibold font-['Inter']">
            All Products are 50% OFF and all sales made till September 30th will
            be donated to Red Cross
          </div>
        </div>
        <Image
          src="/charityEventBanner.png"
          width={381}
          height={228}
          alt="Background eco image"
          className="h-full w-[50%] rounded-tl-lg rounded-tr-lg"
        />
      </div>
    </div>
  );
};

export default CharityBanner;
