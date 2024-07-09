import styles from "./desktop.module.css";
const EcoFreindly = () => {
  return (
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
  );
};
export default EcoFreindly;
