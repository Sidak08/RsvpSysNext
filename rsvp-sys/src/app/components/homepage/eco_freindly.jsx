import styles from "./desktop.module.css";
import Image from "next/image";

const EcoFreindly = () => {
  return (
    <div className="w-[497px] h-[344px] bg-stone-900 rounded-[14px] border-8 border-emerald-500 mt-3 flex flex-col items-center justify-between">
      <Image
        src={"/images/banner.png"}
        width={497}
        height={344}
        alt="Eco freindly banner"
        className="w-[484px] h-[167px] rounded-tl-lg rounded-tr-lg"
      />
      <div className="w-full  flex flex-row justify-evenly items-center">
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
    </div>
  );
};
export default EcoFreindly;
