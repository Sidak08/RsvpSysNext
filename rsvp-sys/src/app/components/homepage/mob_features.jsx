"use client";

import { useRef, useState, useEffect } from "react";
import React from "react";
import "./global.css";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    //console.log(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [scrollPosition, setScrollPosition];
};

const MobFeatures = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  return (
    <>
      <ButtonBox activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      <Features activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
    </>
  );
};

const ButtonBox = ({ activeBtn, setActiveBtn }) => {
  const myRef = useRef(null);
  const buttonRefs = useRef([]);
  const [scrollPosition, setScrollPosition] = useScrollPosition();

  // useEffect(() => {
  //   console.log(scrollPosition);
  //   if (scrollPosition <= 300) {
  //     const interval = setInterval(() => {
  //       setActiveBtn((prevNum) => (prevNum === 5 ? 1 : prevNum + 1));
  //     }, 3000); // 3000 milliseconds = 3 seconds
  //     return () => clearInterval(interval);
  //   }
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition <= 300) {
      const interval = setInterval(() => {
        setActiveBtn((prevNum) => (prevNum === 5 ? 1 : prevNum + 1));
      }, 3000); // 3000 milliseconds = 3 seconds

      return () => clearInterval(interval);
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (buttonRefs.current[activeBtn - 1]) {
      //console.log(scrollPosition);
      buttonRefs.current[activeBtn - 1].scrollIntoView({
        behavior: "smooth",
        block: "nearest", // Prevent vertical scrolling
        inline: "center", // Center horizontally
      });
    }
  }, [activeBtn]);

  return (
    <div
      ref={myRef}
      className="mb-[20px] w-[90%] pl-[20px] mb-[15px] h-[80px] snap-x snap-mandatory bg-[#232222] rounded-[14px] border-2 border-neutral-700 flex items-center justify-evenly overflow-x-scroll scrollbar-hide"
    >
      {[
        "Reduce No Show",
        "Build Relationships",
        "Manage Reservation",
        "Less Downtime",
        "Increase Outreach",
      ].map((text, index) => (
        <Button
          key={index}
          text={text}
          color={activeBtn === index + 1 ? "#3F12D7" : "#353232"}
          border={activeBtn === index + 1 ? "indigo-700" : "neutral-700"}
          id={index + 1}
          setActiveBtn={setActiveBtn}
          ref={(el) => (buttonRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

const Button = React.forwardRef(
  ({ text, color, border, id, setActiveBtn }, ref) => {
    const onClick = () => {
      setActiveBtn(id);
    };

    return (
      <div className="snap-start flex flex-row items-center justify-center">
        <div className="w-[10px] h-2" />
        <button
          ref={ref}
          className={` mr-[10px] min-w-[155px] w-[90%] h-[60px] bg-${
            color === "#3F12D7" ? "indigo-700" : "neutral-100"
          } rounded-[14px] shadow border-2 border-${border} flex justify-center items-center`}
          onClick={onClick}
        >
          <div className="text-white text-base font-light font-['Inter'] text-center">
            {text}
          </div>
        </button>
      </div>
    );
  },
);

const Features = ({ activeBtn, setActiveBtn }) => {
  const textBox = [
    [
      {
        title: "Charge A Fee - Refundable",
        text: "Have you guest charged a small fees when they a reservers online. This fee is automatically refunded once your guest shows up or cancels in the correct time period. ",
      },
      {
        title: "Send Reminders - Automatic",
        text: "Send automatic reminders to there email or phone number 10 minuets before there reservation starts. ",
      },
    ],
    [
      {
        title: "Guest Database",
        text: "Have a database on all of you guest and know any special notes about them. Eg Johny | johny@gmail.com| (345) 385 - 3456 | special notes: allergic to fish and dairy products",
      },
      {
        title: "Ask For Review",
        text: "Send you guest any type of pre made email. Eg a survey to find out what they enjoyed and what could be improved upon later.",
      },
    ],
    [
      {
        title: "Custom GUI Layout",
        text: "Have a custom layout of your restaurant present to manage all you table. Each individual table can be booked or reserved. Have clear insights on where most of the time is spent. Eg slower bussing could lead to a drop in sales",
      },
      {
        title: "Booking Widget",
        text: "Have a booking widget which you place anywhere even on you own site and let customer book individuals tables or seats.",
      },
    ],
    [
      {
        title: "Waitlist Management",
        text: "Have built in waitlist management which lets add incoming customers to que and automatically assign them a seat when it become available. The customer is also automatically sent and sms or email 5 minuets before there table are ready. ",
      },
      {
        title: "Let Your Customers Know",
        text: "Let your customers see how busy or Empty you restaurant might be and watch there mind change.",
      },
    ],
    [
      {
        title: "Send Review Forms",
        text: "After a nice meal you can have you customer send a custom email asking for there feedback on how there experience was.",
      },
      {
        title: "Advertise",
        text: "Have you restaurant listed with us and automatically recommended to guest.",
      },
    ],
  ];

  return (
    <div className="w-[90%] bg-stone-900 rounded-[14px] border-2 border-neutral-700 flex justify-evenly items-center pb-[20px] pt-[20px] pl-[10px]">
      <div className="w-full flex flex-col justify-evenly items-center ">
        <div className="w-full">
          <div className="text-white text-[28px] font-bold font-['Inter'] ml-4">
            Make Sure Everything <br />
            Is On Schedule{" "}
          </div>
        </div>
        <TextBox text={textBox[activeBtn - 1]} />
      </div>
    </div>
  );
};

const TextBox = ({ text }) => {
  return (
    <div className="w-full flex flex-col justify-evenly items-center">
      <InnerTextBox text={text[0]} />
      <InnerTextBox text={text[1]} />
    </div>
  );
};

const InnerTextBox = ({ text }) => {
  return (
    <div className=" bg-neutral-800 rounded-[14px] border-2 border-neutral-700 p-4 flex flex-col justify-evenly items-start w-[100%] mt-[20px]">
      <div className="text-white text-lg font-semibold font-['Inter']">
        {text.title}
      </div>
      <div className=" text-white text-base font-normal font-['Inter'] mt-2 ml-4">
        {text.text}
      </div>
    </div>
  );
};
export default MobFeatures;
