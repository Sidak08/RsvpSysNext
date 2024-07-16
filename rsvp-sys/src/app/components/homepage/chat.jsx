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
      <div className="w-full p-3 bg-stone-900 rounded-[14px] border border-zinc-800 flex flex-col justify-evenly items-center">
        <div className="w-[95%]">
          <div className="text-white text-4xl font-normal font-['Inter']">
            {"Let's Have A Chat :)"}
          </div>
          <div className="w-full h-0.5 bg-neutral-700 rounded-[32px] border border-zinc-800 mt-[15px]" />
        </div>
        <div className="w-[95%] h-[300px] min-h-[226px] p-2 bg-neutral-800 rounded-[14px] shadow border border-zinc-800 flex flex-col justify-evenly items-center mb-5 mt-3">
          <div className=" w-[90%] flex flex-col justify-evenly items-start ">
            <div className="text-white  text-[28px] font-normal font-['Inter']">
              Some Details About Yourself!
            </div>
            <div className="w-full h-0.5 bg-neutral-700 rounded-[32px] border border-[#464444] mt-[15px]" />
          </div>
          <div className="flex justify-between items-start w-full">
            <div className="w-[50%] flex justify-center items-center ">
              <InputDiv
                placeHolder={"First Name"}
                useState={firstName}
                setUseState={setFirstName}
                width={"90%"}
              />
            </div>
            <div className="w-[50%] flex justify-center items-center">
              <InputDiv
                placeHolder={"Last Name"}
                useState={lastName}
                setUseState={setLastName}
                width={"90%"}
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <InputDiv
              setUseState={setEmail}
              useState={email}
              placeHolder={"Your Email"}
              width={"95%"}
              type="email"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <InputDiv
              setUseState={setPhoneNumber}
              useState={phoneNumber}
              placeHolder={"Your Phone Number"}
              width={"95%"}
              type="tel"
            />
          </div>
        </div>

        <div className="w-[95%] h-[226px] bg-neutral-800 rounded-[14px] shadow border border-zinc-800 flex flex-col justify-evenly items-center mb-4">
          <div className=" w-[90%] flex flex-col justify-evenly items-start">
            <div className="text-white text-[28px] font-normal font-['Inter']">
              Your Restaurant
            </div>
            <div className="w-full h-0.5 bg-neutral-700 rounded-[32px] border border-[#464444] mt-[15px]" />
          </div>
          <div className="flex justify-between items-start w-full">
            <div className="w-[50%] flex justify-center items-center ">
              <InputDiv
                placeHolder={"Street Name"}
                useState={streetName}
                setUseState={setStreetName}
                width={"90%"}
              />
            </div>
            <div className="w-[50%] flex justify-center items-center">
              <InputDiv
                placeHolder={"City"}
                useState={setCity}
                setUseState={city}
                width={"90%"}
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <InputDiv
              setUseState={setState}
              useState={state}
              placeHolder={"State"}
              width={"95%"}
            />
          </div>
          <div className="flex justify-between items-start w-full">
            <div className="w-[50%] flex justify-center items-center ">
              <InputDiv
                placeHolder={"Country"}
                useState={country}
                setUseState={setCountry}
                width={"90%"}
              />
            </div>
            <div className="w-[50%] flex justify-center items-center">
              <InputDiv
                placeHolder={"Postal Code"}
                useState={setCountry}
                setUseState={country}
                width={"90%"}
              />
            </div>
          </div>
        </div>
        <button className="w-[95%] h-[54px] bg-indigo-700 rounded-[14px] flex justify-center items-center">
          <div className="w-[219px] text-white text-2xl font-normal font-['Inter'] flex justify-center items-center text-center">
            Schedule Your Talk
          </div>
        </button>
      </div>
    </div>
  );
};

const InputDiv = ({
  setUseState,
  useState,
  placeHolder,
  width,
  type = "text",
}) => {
  console.log("useState", useState);
  return (
    <input
      placeholder={placeHolder}
      onChange={(e) => {
        setUseState(e.target.value);
      }}
      value={useState}
      type={type}
      className={`w-[${width}] h-11 bg-[#212121] rounded-md border border-[#302F2F] pl-4 focus:outline-none`}
    />
  );
};

export default Chat;
