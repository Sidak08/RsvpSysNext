"use client";
import styles from "./desktop.module.css";
import Image from "next/image";
import { useState } from "react";

const MobPricingDiv = () => {
  const [rate, setRate] = useState("yearly");
  const [price, setPrice] = useState({
    premium: 29.99,
    essential: 22.99,
  });
  const priceChart = {
    yearly: {
      premium: 29.99,
      essential: 22.99,
    },
    monthly: {
      premium: 39.99,
      essential: 32.99,
    },
  };
  const changeMonthly = () => {
    setPrice(priceChart.monthly);
    setRate("monthly");
  };
  const changeYearly = () => {
    setPrice(priceChart.yearly);
    setRate("yearly");
  };
  const freeInfo = {
    emails: 30,
    sms: false,
    onlineRsvp: true,
    waitlistMange: false,
    tableMange: true,
    bookingWidget: false,
    deposit: false,
    discription: "A free plan to you get you started on your business journey",
  };
  const premiumInfo = {
    emails: true,
    sms: true,
    onlineRsvp: true,
    waitlistMange: true,
    tableMange: true,
    bookingWidget: true,
    deposit: true,
    discription:
      "The best require the best. So you should have access to anything and everything",
  };
  const essentialInfo = {
    emails: true,
    sms: true,
    onlineRsvp: true,
    waitlistMange: true,
    tableMange: true,
    bookingWidget: false,
    deposit: false,
    discription:
      "All the tools you will need to start you journey packed in one sweet deal.",
  };

  // <button
  //   onClick={changeMonthly}
  //   className={`w-[236px] h-[70px] rounded-[14px] border-2 border-indigo-700 flex justify-evenly items-center ${rate === "monthly" ? "bg-indigo-700" : "bg-stone-900"}`}
  // >
  //   <div className="text-white text-[38px] font-black font-['Inter'] text-center">
  //     Monthly
  //   </div>
  // </button>
  // <button
  //   onClick={changeYearly}
  //   className={`w-[236px] h-[70px] rounded-[14px] border-2 border-indigo-700 flex justify-evenly items-center ${rate === "yearly" ? "bg-indigo-700" : "bg-stone-900"} relative`}
  // >
  //   <div className="text-white text-[38px] font-black font-['Inter'] text-center">
  //     Yearly
  //   </div>
  //   <Image
  //     src="/discount.svg"
  //     width={113}
  //     height={35}
  //     alt="discount tag"
  //     className="absolute top-[-30px] right-[-30px]"
  //   />
  // </button>
  //
  return (
    <div className="w-[310%] flex flex-col justify-evenly items-center">
      <div className={styles.priceHeader}>A Perfect Price For You</div>
      <div
        className={
          "flex justify-evenly items-start w-full mt-[70px] overflow-x-scroll"
        }
      >
        <PriceBox
          title={"Premium"}
          price={price.premium}
          discription={premiumInfo.discription}
          info={premiumInfo}
        />
        <PriceBox
          title={"Essential"}
          price={price.essential}
          discription={essentialInfo.discription}
          info={essentialInfo}
        />
        <PriceBox
          title={"Free"}
          price={false}
          discription={freeInfo.discription}
          info={freeInfo}
        />
      </div>
      {/* <CustomPlan /> */}
    </div>
  );
};
const PriceBox = ({ title, price, discription, info }) => {
  return (
    <div className="max-w-[356px] w-[90%] h-[690px] flex flex-col justify-evenly items-center bg-stone-900 rounded-[14px] shadow border-2 border-neutral-700">
      <div className="w-full h-[50px] flex flex-col justify-evenly items-center">
        <div className="w-full mr-2">
          <span className="text-white text-[32px] font-bold font-['Inter'] ml-[40px]">
            {title}{" "}
          </span>
          <span className="text-white text-[32px] font-normal font-['Inter'] text-center">
            {price ? `- $${price}` : ""}
          </span>
        </div>
        <div className="w-[90%] h-0.5 bg-neutral-700 rounded-[20px]" />
      </div>
      <div className="w-[90%] text-white text-[22px] font-normal font-['Inter']">
        {discription}
      </div>
      <div className="w-full h-[400px] flex flex-col justify-evenly items-center">
        <SmallBox title={"Reminder Emails"} check={info.emails} />
        <SmallBox title={"Reminder Text SMS"} check={info.sms} />
        <SmallBox title={"Online Reservations"} check={info.onlineRsvp} />
        <SmallBox title={"Waitlist Management"} check={info.waitlistMange} />
        <SmallBox title={"Table Management"} check={info.tableMange} />
        <SmallBox title={"Booking Widget"} check={info.bookingWidget} />
        <SmallBox title={"Deposit & Prepayment"} check={info.deposit} />
      </div>
      <button className="w-[90%] h-[68px] bg-indigo-700 rounded-[14px] flex justify-center items-center text-center">
        <div className="w-[145.20px] text-white text-2xl font-semibold font-['Inter'] text-center">
          Get Started
        </div>
      </button>
    </div>
  );
};
const SmallBox = ({ title, check }) => {
  return (
    <div className="w-[90%] h-[50px] bg-stone-900 flex flex-col justify-evenly items-center">
      <div className="flex w-full justify-between items-center pl-4 pr-4">
        <div className="text-white text-lg font-light font-['Inter']">
          {title}
        </div>
        {typeof check === "number" ? (
          <div className="text-[#29F1E3] text-lg font-medium font-['Inter']">
            {check}
          </div>
        ) : check ? (
          <Image
            src={"/checked.svg"}
            height={24}
            width={24}
            alt="checked box"
          />
        ) : (
          <Image
            src={"/unChecked.svg"}
            height={24}
            width={24}
            alt="unchecked box"
          />
        )}
      </div>
      <div className="w-[90%] h-0.5 bg-neutral-700 rounded-[20px]" />
    </div>
  );
};
// const CustomPlan = () => {
//   return (
//     <div className="w-[1147px] h-[370px] bg-stone-900 rounded-[14px] border-2 border-neutral-700 flex justify-evenly items-center mt-[70px] mb-[64px]">
//       <div className="flex justify-evenly items-center flex-col w-[700px] h-full">
//         <div>
//           <div className="text-white text-[58px] font-bold font-['Inter']">
//             Custom Plan
//           </div>
//           <div className="w-[662px] h-0.5 bg-neutral-700" />
//         </div>
//         <div className="w-[610px]">
//           <span className="text-white text-4xl font-light font-['Inter']">
//             Contact us and will find a{" "}
//           </span>
//           <span className="text-indigo-600 text-4xl font-bold font-['Inter']">
//             plan for you
//           </span>
//           <span className="text-white text-4xl font-light font-['Inter']">
//             {" "}
//             that has the all features you need at a price you want
//           </span>
//         </div>
//       </div>
//       <div className="w-[425px] h-[335px] rounded-2xl shadow relative flex justify-center items-center ">
//         <Image
//           src={"/images/tigerPrint.png"}
//           height={335}
//           width={425}
//           alt="custom plan background tiger print"
//           className="absolute top-0 left-0 rounded-2xl"
//         />
//         <div className="w-[326px] h-[100px] bg-indigo-700 rounded-[14px] shadow flex justify-center items-center  z-10">
//           <div className="text-white text-[42px] font-normal font-['Inter']">
//             Contact Now
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
export default MobPricingDiv;
