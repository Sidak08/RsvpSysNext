"use client";
import styles from "./desktop.module.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import React from "react";
import "./global.css";
import { useRouter } from "next/navigation"; // For Next.js 13+ App Router
import axios from "axios";
import Cookies from "js-cookie";

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

  const premiumRef = useRef(null);
  const essentialRef = useRef(null);
  const freeRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <section
      className="w-full flex flex-col justify-evenly items-center"
      id="pricing"
    >
      <div className={styles.priceHeaderMob}>A Perfect Price For You</div>
      <SubTimeBox
        changeYearly={changeYearly}
        changeMonthly={changeMonthly}
        rate={rate}
      />
      <PlanBox
        scrollToRef={scrollToRef}
        premiumRef={premiumRef}
        essentialRef={essentialRef}
        freeRef={freeRef}
      />
      <div
        className={
          "flex justify-evenly items-start w-full mt-[20px] overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
        }
      >
        <PriceBox
          ref={freeRef}
          title={"Free"}
          price={false}
          discription={freeInfo.discription}
          info={freeInfo}
          plan={rate}
        />
        <PriceBox
          ref={essentialRef}
          title={"Essential"}
          price={price.essential}
          discription={essentialInfo.discription}
          info={essentialInfo}
          plan={rate}
        />
        <PriceBox
          ref={premiumRef}
          title={"Premium"}
          price={price.premium}
          discription={premiumInfo.discription}
          info={premiumInfo}
          plan={rate}
        />
      </div>
      <CustomPlan />
    </section>
  );
};

// eslint-disable-next-line react/display-name
const PriceBox = React.forwardRef(
  ({ title, price, discription, info, plan }, ref) => {
    const router = useRouter();

    const handleClick = async () => {
      const cookieStore = Cookies;
      let cookieValue = cookieStore.get("loginInfo") || false;
      let userLoggedIn = false;

      console.log(cookieValue);
      if (cookieValue) {
        cookieValue = JSON.parse(cookieValue);
        console.log(cookieValue, 2);
        const absoluteUrl = `/api/auth/login`;
        // Use the absolute URL
        try {
          const res = await axios.post(absoluteUrl, cookieValue);
          userLoggedIn = res.data.success;
        } catch (error) {
          console.error("Error in axios call:", error);
        }
      }
      if (userLoggedIn) {
        if (title === "Free") {
          router.push("/dashboard");
        } else if (title === "Essential") {
          if (plan === "monthly") {
            router.push("https://buy.stripe.com/9AQ8zM7atgK69AQ3ce");
          } else if (plan === "yearly") {
            router.push("https://buy.stripe.com/6oEcQ22UdbpMbIY4gh");
          }
        } else if (title === "Premium") {
          if (plan === "monthly") {
            router.push("https://buy.stripe.com/aEUdU67atbpM8wM4gk");
          } else if (plan === "yearly") {
            router.push("https://buy.stripe.com/eVabLY3Yh8dA8wMeUZ");
          }
        }
      } else {
        router.push("/auth/login");
      }
    };

    return (
      <div
        ref={ref}
        className="snap-center min-w-[90%] h-[690px] flex flex-col justify-evenly items-center bg-stone-900 rounded-[14px] shadow border-2 border-neutral-700 mx-[5%]"
      >
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
        <button
          className="w-[90%] h-[68px] bg-indigo-700 rounded-[14px] flex justify-center items-center text-center"
          onClick={handleClick}
        >
          <div className="w-[145.20px] text-white text-2xl font-semibold font-['Inter'] text-center">
            Get Started
          </div>
        </button>
      </div>
    );
  },
);

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

const SubTimeBox = ({ changeMonthly, changeYearly, rate }) => {
  return (
    <div className="w-[90%] h-[77px] bg-stone-900 rounded-[14px] border-2 border-neutral-700 mt-3 flex justify-start items-center">
      <button
        className={`mx-2 mr-4 w-[131px] h-[60px] ${rate === "yearly" ? "bg-indigo-700" : "bg-zinc-800 shadow border-2 border-neutral-700"} rounded-[14px] shadow flex justify-center items-center`}
        onClick={changeYearly}
      >
        <div className="w-[139px] text-center text-white text-xl font-light font-['Inter'] flex justify-center items-center">
          Yearly
        </div>
      </button>
      <button
        className={`w-[131px] h-[60px] ${rate === "monthly" ? "bg-indigo-700" : "bg-zinc-800 shadow border-2 border-neutral-700"} rounded-[14px] shadow flex justify-center items-center`}
        onClick={changeMonthly}
      >
        <div className="w-[139px] text-center text-white text-xl font-light font-['Inter'] flex justify-center items-center">
          Monthly
        </div>
      </button>
    </div>
  );
};

const PlanBox = ({ scrollToRef, premiumRef, essentialRef, freeRef }) => {
  const [curRef, setCurRef] = useState(freeRef);
  const setScrolltoRef = (ref) => {
    setCurRef(ref);
    scrollToRef(ref);
  };
  return (
    <div className="overflow-x-scroll scrollbar-hide snap-x snap-mandatory w-[90%] h-[77px] bg-stone-900 rounded-[14px] border-2 border-neutral-700 mt-3 flex justify-start items-center -mb-[8px]">
      <button
        className={`mx-2 snap-center w-[131px] h-[60px] ${curRef === freeRef ? "bg-indigo-700" : "bg-zinc-800 shadow border-2 border-neutral-700"} rounded-[14px] shadow flex justify-center items-center`}
        onClick={() => {
          setScrolltoRef(freeRef);
        }}
      >
        <div className="w-[139px] text-center text-white text-xl font-light font-['Inter'] flex justify-center items-center">
          Free
        </div>
      </button>
      <button
        className={`mx-2 snap-center w-[131px] h-[60px] ${curRef === essentialRef ? "bg-indigo-700" : "bg-zinc-800 shadow border-2 border-neutral-700"} rounded-[14px] shadow flex justify-center items-center`}
        onClick={() => {
          setScrolltoRef(essentialRef);
        }}
      >
        <div className="w-[139px] text-center text-white text-xl font-light font-['Inter'] flex justify-center items-center">
          Essential
        </div>
      </button>
      <button
        className={`mx-2 snap-center w-[131px] h-[60px] ${curRef === premiumRef ? "bg-indigo-700" : "bg-zinc-800 shadow border-2 border-neutral-700"} rounded-[14px] shadow flex justify-center items-center`}
        onClick={() => {
          setScrolltoRef(premiumRef);
        }}
      >
        <div className="w-[139px] text-center text-white text-xl font-light font-['Inter'] flex justify-center items-center">
          Premium
        </div>
      </button>
    </div>
  );
};

const CustomPlan = () => {
  return (
    <div className="w-[90%] h-[448px] bg-stone-900 rounded-[14px] border-2 border-neutral-700 mt-[26px] flex flex-col items-center justify-evenly">
      <div className="flex flex-col items-center justify-evenly">
        <div className="w-[307px] text-white text-[46px] font-bold font-['Inter']">
          Custom Plan
        </div>
        <div className="w-[332.11px] h-0.5 bg-neutral-700" />
      </div>
      <div className="w-[90%]">
        <span className="text-white text-2xl font-light font-['Inter']">
          Contact us and will find a{" "}
        </span>
        <span className="text-indigo-600 text-2xl font-bold font-['Inter']">
          plan for you
        </span>
        <span className="text-white text-2xl font-light font-['Inter']">
          {" "}
          that has the all features you need at a price you want
        </span>
      </div>
      <div className="relative">
        <Image
          src={"/images/tigerPrint.png"}
          height={200}
          width={318}
          alt="custom plan background tiger print"
          className="rounded-2xl h-[200px] min-w-[90%] object-cover"
        />
        <div className="flex justify-center items-center w-[244.50px] h-[57.31px] bg-indigo-700 rounded-[14px] shadow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[244px] h-[58px] text-center text-white text-[32px] font-normal font-['Inter']">
            Contact Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobPricingDiv;
