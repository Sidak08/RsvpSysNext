"use client";
import { useState } from "react";
const Chat = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="w-[90%] bg-indigo-700 rounded-[14px] border-8 border-indigo-700 mt-9 ">
      <div className="w-full h-[656px] bg-stone-900 rounded-[14px] border border-zinc-800 flex flex-col justify-evenly items-center">
        <div className="w-[90%]">
          <div className="text-white text-4xl font-normal font-['Inter']">
            {"Let's Have A Chat :)"}
          </div>
          <div className="w-full h-0.5 bg-neutral-700 rounded-[32px] border border-zinc-800 mt-[15px]" />
        </div>
        <div className="w-[90%] h-[226px] bg-neutral-800 rounded-[14px] shadow border border-zinc-800">
          <div>
            <div className="text-white text-[28px] font-normal font-['Inter']">
              Some Details About Yourself!
            </div>
            <div className="w-full h-0.5 bg-neutral-700 rounded-[32px] border border-[#464444] mt-[15px]" />
          </div>
          <div>
            <InputDiv
              placeHolder={"Your First Name"}
              useState={firstName}
              setUseState={setFirstName}
            />
          </div>
        </div>
        <div className="w-[90%] h-[226px] bg-neutral-800 rounded-[14px] shadow border border-zinc-800">
          {" "}
        </div>
        <button className="w-[90%] h-[54px] bg-indigo-700 rounded-[14px]"></button>
      </div>
    </div>
  );
};

const InputDiv = ({ setUseState, useState, placeHolder }) => {
  return (
    <input
      placeholder={placeHolder}
      onChange={setUseState}
      value={useState}
      className="w-[90%] h-11 bg-[#212121] rounded-md border border-[#302F2F] pl-4"
    />
  );
};

export default Chat;
