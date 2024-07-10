"use client";
import { useState } from "react";

const Features = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const textBox = [
    {
      title: "Charge A Fee - Refundable",
      text: "Have you guest charged a small fees when they a reservers online. This fee is automatically refunded once your guest shows up or cancels in the correct time period. ",
    },
  ];
  return (
    <div className="w-[90%] h-[448px] bg-stone-900 rounded-[14px] border-2 border-neutral-700 flex justify-evenly items-center">
      <div className="w-[68%] h-[422px] flex flex-col justify-evenly items-center">
        <div className="w-full">
          <div className="text-white text-[28px] font-bold font-['Inter'] ml-4">
            Make Sure Everything <br />
            Is On Schedule{" "}
          </div>
        </div>
        <TextBox />
      </div>
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
  return (
    <div className="w-full h-[320px]">
      <div className=" bg-neutral-800 rounded-[14px] border-2 border-neutral-700 p-5"></div>
    </div>
  );
};

export default Features;
