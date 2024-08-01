"use client";
import { useState } from "react";

export default function Page({ params }) {
  {
    params.book;
  }

  const [bookTimeSlot, setBookTimeSlot] = useState({
    firstTime: "17:00 - 21:00",
    secondTime: "17:00 - 21:00",
    thirdTime: "17:00 - 21:00",
  });

  const [selectedTime, setSelectedTime] = useState("17:00 - 21:00");

  return (
    <div className="flex items-center justify-center w-full h-[100vh]">
      <div className="w-[90%] max-w-[750px] h-[500px] bg-[#1b1a1a] rounded-[13px] flex justify-evenly items-center flex-col md-h-[738px]">
        <div className="flex flex-col justify-evenly items-start w-[90%] ml-[1.5%]">
          <div className="text-white text-[46px] font-medium font-['Inter']">
            Book A Table
          </div>
          <div className="w-full h-[3px] bg-[#d9d9d9] rounded-[13px]" />
        </div>

        <div className="flex flex-col justify-evenly items-center w-full">
          <div className="text-white text-2xl font-bold font-['Inika']">
            Closet Time Slots
          </div>
          <div className="flex md:flex-row flex-col justify-evenly items-center w-full">
            <BookTime
              time={bookTimeSlot.firstTime}
              setBookTime={setSelectedTime}
            />
            <BookTime
              time={bookTimeSlot.firstTime}
              setBookTime={setSelectedTime}
            />
            <BookTime
              time={bookTimeSlot.firstTime}
              setBookTime={setSelectedTime}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const BookTime = ({ time, setBookTime }) => {
  return <div className="w-[90%] h-[88px] bg-[#313131] rounded-[10px]"> </div>;
};
