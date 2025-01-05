"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page({ params }) {
  const [bookTimeSlot, setBookTimeSlot] = useState([
    { bookingTime: "loading" },
    { bookingTime: "loading" },
    { bookingTime: "loading" },
  ]);

  const { time: currTime, date: currDate } = getCurrTime();

  const [selectedTime, setSelectedTime] = useState({
    bookingTime: currTime,
    bookingDate: currDate,
    url: params.book,
  });

  useEffect(() => {
    findTime();
  }, []);

  const getCurrTime = () => {
    const now = new Date();
    const formattedTime = now.toTimeString().split(" ")[0].slice(0, 5); // HH:MM
    const formattedDate = now.toISOString().split("T")[0]; // YYYY-MM-DD
    return { time: formattedTime, date: formattedDate };
  };

  const changeDate = (date) => {
    setSelectedTime((prev) => ({
      ...prev,
      bookingDate: date,
    }));
  };

  const changeTime = (time) => {
    setSelectedTime((prev) => ({
      ...prev,
      bookingTime: time,
    }));
  };

  const findTime = async () => {
    try {
      const res = await axios.post(`/api/get_data/book/timeslot`, selectedTime);
      if (res.data.success) {
        setBookTimeSlot(res.data.availableBookingSpots);
      }
    } catch (error) {
      console.error("Error fetching time slots:", error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-[100vh] bg-[#0D0D0D]">
      <div className="w-[90%] max-w-[750px] md:h-[500px] bg-[#1b1a1a] rounded-[13px] flex justify-evenly items-center flex-col h-[738px]">
        <Header />
        <TimeSlots bookTimeSlot={bookTimeSlot} setSelectedTime={setSelectedTime} url={params.book} />
        <CustomTimeInput selectedTime={selectedTime} changeDate={changeDate} changeTime={changeTime} findTime={findTime} />
      </div>
    </div>
  );
}

const Header = () => (
  <div className="flex flex-col justify-evenly items-start w-[90%] ml-[1.5%]">
    <div className="text-white text-[46px] font-medium font-['Inter']">
      Book A Table
    </div>
    <div className="w-full h-[3px] bg-[#d9d9d9] rounded-[13px]" />
  </div>
);

const TimeSlots = ({ bookTimeSlot, setSelectedTime, url }) => (
  <div className="w-[95%] flex flex-col justify-evenly items-center bg-[#272626] rounded-[13px] py-4 ">
    <div className="w-full pl-5">
      <div className="text-white text-3xl font-bold font-['Inika'] mb-2">
        Closet Time Slots
      </div>
    </div>
    <div className="flex md:flex-row flex-col justify-evenly items-center w-full px-2">
      {bookTimeSlot.map((time, index) => (
        <BookTime key={index} time={time} setBookTime={setSelectedTime} url={url} />
      ))}
    </div>
  </div>
);

const CustomTimeInput = ({ selectedTime, changeDate, changeTime, findTime }) => (
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
      <div className="w-[90%] h-[38px] bg-[#313131]">
        <input
          type="date"
          className={`w-[50%] h-full bg-[#313131] px-3 ${styles.dateTimeInput} text-white`}
          value={selectedTime.bookingDate}
          onChange={(e) => changeDate(e.target.value)}
        />
        <input
          type="time"
          className={`w-[50%] h-full bg-[#313131] px-3 ${styles.dateTimeInput} text-white`}
          value={selectedTime.bookingTime}
          onChange={(e) => changeTime(e.target.value)}
        />
      </div>
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
);

const BookTime = ({ time, setBookTime, url }) => {
  const router = useRouter();

  return (
    <div className="w-[90%] h-[88px] bg-[#313131] rounded-[10px] m-2 flex flex-col item-center justify-between">
      <div className="h-[50%] w-full flex items-center justify-center">
        <div className="text-white text-xl font-bold font-['Inika']">
          {time.bookingTime} | {time.bookingDate}
        </div>
      </div>
      <Link
        className="h-[50%] w-full bg-[#3f12d7] rounded-[10px] flex items-center justify-center"
        href={`/book/${url}/info/?time=${encodeURIComponent(time.bookingTime)}&date=${encodeURIComponent(time.bookingDate)}&id=${encodeURIComponent(time.tableId)}`}
      >
        <div className="text-white text-xl font-bold font-['Inika'] text-center">
          Book
        </div>
      </Link>
    </div>
  );
};