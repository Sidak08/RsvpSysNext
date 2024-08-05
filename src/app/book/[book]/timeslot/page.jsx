"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page({ params }) {
  const [bookTimeSlot, setBookTimeSlot] = useState({
    firstTime: "loading",
    secondTime: "loading",
    thirdTime: "loading",
  });

  const [selectedTime, setSelectedTime] = useState({
    bookingTime: "17:00 - 21:00",
    bookingDate: "2024-08-02",
    url: params.book,
  });

  useEffect(() => {
    axios.post(`/api/get_data/book/timeslot`, selectedTime).then((res) => {
      if (res.data.success) {
        setBookTimeSlot(res.data.availableBookingSpots);
      }
    });
  }, [selectedTime]);

  const findTime = () => {};

  return (
    <div className="flex items-center justify-center w-full h-[100vh]">
      <div className="w-[90%] max-w-[750px] md:h-[500px] bg-[#1b1a1a] rounded-[13px] flex justify-evenly items-center flex-col h-[738px]">
        <div className="flex flex-col justify-evenly items-start w-[90%] ml-[1.5%]">
          <div className="text-white text-[46px] font-medium font-['Inter']">
            Book A Table
          </div>
          <div className="w-full h-[3px] bg-[#d9d9d9] rounded-[13px]" />
        </div>

        <div className="w-[95%] flex flex-col justify-evenly items-center bg-[#272626] rounded-[13px] py-4 ">
          <div className="w-full pl-5">
            <div className="text-white text-3xl font-bold font-['Inika'] mb-2">
              Closet Time Slots
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-evenly items-center w-full px-2">
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

        <div className="flex md:flex-row flex-col justify-evenly items-center w-[95%] px-2">
          <div className="flex items-center justify-evenly flex-col h-[120px] md:w-[60%] w-full">
            <div className="flex items-center justify-evenly flex-col w-full">
              <div className="w-full">
                <div className="text-white text-2xl font-bold font-['Inika'] mb-2">
                  Choose Your Own Time
                </div>
              </div>
              <div className="w-[90%] h-[7px] bg-[#d9d9d9]" />
            </div>
            <input className="w-[90%] h-[38px] bg-[#313131]" type="calender" />
          </div>
          <button
            className="w-[90%] md:w-[40%] h-[50px] bg-[#3f12d7] rounded-[13px] flex items-center justify-center"
            onClick={findTime}
          >
            <div className="w-[102px] h-[30px] text-white text-xl font-bold font-['Inika']">
              Find Time
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

const BookTime = ({ time, setBookTime }) => {
  return (
    <div className="w-[90%] h-[88px] bg-[#313131] rounded-[10px] m-2 flex flex-col item-center justify-between">
      <div className="h-[50%] w-full flex items-center justify-center">
        {" "}
        <div className="text-white text-xl font-bold font-['Inika']">
          {" "}
          {time}{" "}
        </div>
      </div>
      <button
        className="h-[50%] w-full bg-[#3f12d7] rounded-[10px] flex items-center justify-center"
        onClick={() => {
          setBookTime(time);
        }}
      >
        <div className="text-white text-xl font-bold font-['Inika'] text-center">
          Book
        </div>
      </button>
    </div>
  );
};
