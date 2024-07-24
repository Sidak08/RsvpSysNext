import Image from "next/image";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const MobCharityBanner = () => {
  return (
    <div className="w-full h-[200px] flex items-center flex-col justify-between mt-7 -mb-4">
      <div className="w-[90%] h-[76px] bg-[#2b2727] rounded-[14px] border-2 border-[#23c484]  flex items-center justify-center">
        <Image
          src="/mobCharityEvent.svg"
          width={363}
          height={60}
          className="w-[90%]"
          alt="text Charity Event"
        />
      </div>
      <div className="w-[90%] h-[110px] bg-[#2b2727] rounded-[14px] border-2 border-[#23c484] flex items-center justify-center">
        <div className="w-[90%] text-white text-lg font-semibold font-['Inter']">
          All Products are 50% OFF and all sales made till September 30th will
          be donated to Red Cross
        </div>
      </div>
    </div>
  );
};

export default MobCharityBanner;
