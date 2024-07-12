"use client";
import { useState, useEffect } from "react";

const MobFeatures = () => {
  return (
    <>
      <Features />
    </>
  );
};

const Features = () => {
  const [activeBtn, setActiveBtn] = useState(1);
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
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBtn((prevNum) => (prevNum === 5 ? 1 : prevNum + 1));
    }, 3000); // 2000 milliseconds = 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[90%] bg-stone-900 rounded-[14px] border-2 border-neutral-700 flex justify-evenly items-center">
      <div className="w-full flex flex-col justify-evenly items-center">
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

const ButtonBox = () => {
  return (
    <div className="w-[28%] h-[422px] bg-[#232222] rounded-[14px] border-2 border-neutral-700 flex flex-col items-center justify-evenly">
      <Button
        text="Reduce No Show"
        color={`${activeBtn === 1 ? "#3F12D7" : "#353232"}`}
        border={`${activeBtn === 1 ? "indigo-700" : "neutral-700"}`}
        id={1}
        setActiveBtn={setActiveBtn}
      />
      <Button
        text="Build Relationships"
        color={`${activeBtn === 2 ? "#3F12D7" : "#353232"}`}
        border={`${activeBtn === 2 ? "indigo-700" : "neutral-700"}`}
        id={2}
        setActiveBtn={setActiveBtn}
      />
      <Button
        text="Manage Reservation"
        color={`${activeBtn === 3 ? "#3F12D7" : "#353232"}`}
        border={`${activeBtn === 3 ? "indigo-700" : "neutral-700"}`}
        id={3}
        setActiveBtn={setActiveBtn}
      />
      <Button
        text="Less Downtime"
        color={`${activeBtn === 4 ? "#3F12D7" : "#353232"}`}
        border={`${activeBtn === 4 ? "indigo-700" : "neutral-700"}`}
        id={4}
        setActiveBtn={setActiveBtn}
      />
      <Button
        text="Increase Outreach"
        color={`${activeBtn === 5 ? "#3F12D7" : "#353232"}`}
        border={`${activeBtn === 5 ? "indigo-700" : "neutral-700"}`}
        id={5}
        setActiveBtn={setActiveBtn}
      />
    </div>
  );
};

const Button = ({ text, color, border, id, setActiveBtn }) => {
  if (color === "#3F12D7") {
    color = "indigo-700";
  } else if (color === "#353232") {
    color = "neutral-100";
  }
  const onClick = () => {
    setActiveBtn(id);
  };
  return (
    <button
      className={`w-[90%] h-[60px] bg-${color} rounded-[14px] shadow border-2 border-${border} flex justify-center items-center`}
      onClick={onClick}
    >
      <div className="text-white text-base font-light font-['Inter'] text-center">
        {text}
      </div>
    </button>
  );
};

const TextBox = ({ text }) => {
  console.log("text", text);
  return (
    <div className="w-full flex flex-col justify-evenly items-center">
      <InnerTextBox text={text[0]} />
      <InnerTextBox text={text[1]} />
    </div>
  );
};

const InnerTextBox = ({ text }) => {
  return (
    <div className=" bg-neutral-800 rounded-[14px] border-2 border-neutral-700 p-4 flex flex-col justify-evenly items-start w-[100%] mt-[20px] w-[93%]">
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
