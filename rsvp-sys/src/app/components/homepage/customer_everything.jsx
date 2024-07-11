import styles from "./desktop.module.css";
const customer = () => {
  return (
    <div className="w-[90%] h-[349px] bg-stone-900 rounded-[14px] border-2 border-neutral-700 flex flex-col justify-evenly items-center mt-[25px]">
      <div className="w-full flex flex-col justify-evenly items-center">
        <div className={styles.customerTitle}>Customer Is Everything</div>
        <div className="w-full text-right text-white text-[40px] font-medium font-['Inter'] mr-[24px] mt-[24px]">
          So We Can Always Make It Work
        </div>
      </div>
      <div className="flex justify-evenly items-center w-full">
        <div className="flex justify-center items-center w-[50%]">
          <div className="w-[90%] h-[174px] bg-zinc-800 rounded-[14px] border-2 border-neutral-700 flex flex-col justify-evenly items-center">
            <div className="flex flex-col justify-evenly items-start">
              <div className="text-white text-2xl font-semibold font-['Inter']">
                Pricing
              </div>
              <div className="w-[300px] h-0.5 bg-neutral-700 mt-1" />
            </div>
            <div className="w-[280px] text-white text-lg font-normal font-['Inter']">
              Talk to one our sales rep and we will make sure that we can create
              you a plan that matches your budget and requirement.
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[50%]">
          <div className="w-[90%] h-[174px] bg-zinc-800 rounded-[14px] border-2 border-neutral-700 flex flex-col justify-evenly items-center">
            <div className="flex flex-col justify-evenly items-start">
              <div className="text-white text-2xl font-semibold font-['Inter']">
                Features
              </div>
              <div className="w-[300px] h-0.5 bg-neutral-700 mt-1" />
            </div>
            <div className="w-[280px] text-white text-lg font-normal font-['Inter']">
              Missing a feature you think is important talk to us and will add
              it for free Guaranteed 100%.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default customer;
