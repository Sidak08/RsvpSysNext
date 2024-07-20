import React, { useState } from "react";

const MobFooter = () => {
  const [newsLetterEmail, setNewsLetterEmail] = useState("");
  const [ideas, setIdeas] = useState("");

  return (
    <div className="w-full h-[442px] bg-stone-900 mt-[60px] flex flex-col justify-evenly items-center">
      <div className="w-full ml-[60px]">
        <div className="flex justify-start items-center">
          <div className="w-[49px] h-[49.24px] relative">
            <div className="w-[11.38px] h-[11.38px] left-0 top-[35.93px] absolute origin-top-left rotate-[-1.23deg] bg-indigo-900 rounded-full" />
            <div className="w-[11.38px] h-[11.38px] left-[37.38px] top-[36.05px] absolute origin-top-left rotate-[-1.23deg] bg-purple-700 rounded-full" />
            <div className="w-[34.54px] h-3 left-[5.12px] top-[29.60px] absolute origin-top-left rotate-[-59deg] bg-purple-700 rounded-[23px]" />
            <div className="w-[30.72px] h-3 left-[16.20px] top-[43.05px] absolute origin-top-left rotate-[-59deg] bg-indigo-900 rounded-[23px]" />
          </div>
          <div className="ml-5 text-purple-700 text-5xl font-normal font-['Inika']">
            QuikSeat
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between items-center h-[235px]">
        <InputDiv
          text="Sign Up For The News Letter"
          placeHolder="Enter your email"
          value={newsLetterEmail}
          setValue={setNewsLetterEmail}
        />
        <InputDiv
          text="Give us some ideas"
          placeHolder="Your ideas here"
          value={ideas}
          setValue={setIdeas}
        />
      </div>
      <div className="flex justify-evenly items-center w-full">
        <div className="w-[49px] h-[49.24px] relative">
          <div className="w-[11.38px] h-[11.38px] left-0 top-[35.93px] absolute origin-top-left rotate-[-1.23deg] bg-indigo-900 rounded-full" />
          <div className="w-[11.38px] h-[11.38px] left-[37.38px] top-[36.05px] absolute origin-top-left rotate-[-1.23deg] bg-purple-700 rounded-full" />
          <div className="w-[34.54px] h-3 left-[5.12px] top-[29.60px] absolute origin-top-left rotate-[-59deg] bg-purple-700 rounded-[23px]" />
          <div className="w-[30.72px] h-3 left-[16.20px] top-[43.05px] absolute origin-top-left rotate-[-59deg] bg-indigo-900 rounded-[23px]" />
        </div>
        <div className="text-white text-lg font-normal font-['Inika']">
          ©  QuikSeat, inc. 2024 Copyrighted{" "}
        </div>
      </div>
    </div>
  );
};

const InputDiv = ({ text, placeHolder, value, setValue, postUrl }) => {
  return (
    <div className="w-[90%] h-[104px] bg-neutral-800 rounded-[14px] border-2 border-neutral-700 flex flex-col items-center justify-evenly">
      <div className="w-full pl-[20px]">
        <div className=" h-[30px] text-white text-2xl font-normal font-['Inika']">
          {text}
        </div>
      </div>
      <div className="flex justify-evenly items-center w-[95%]">
        <input
          className="min-w-[65%] h-[38px] bg-zinc-800 rounded-[14px] border-2 border-neutral-700 focus:outline-none pl-[10px] text-white text-lg font-normal font-['Inika']"
          placeholder={placeHolder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div className="min-w-[30%] h-[33.94px] bg-indigo-900 rounded-lg flex justify-center items-center">
          <div className="w-full text-center text-white text-lg font-normal font-['Inika'] ">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobFooter;
