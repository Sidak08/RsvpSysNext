"use client";
import { useState } from "react";

const Review = () => {
  const [num, setNum] = useState(4);
  const [title, setTitle] = "Haka Khazana";
  const handleClick = (num) => {
    setNum(num);
  };
  return (
    <div className="w-[382px] h-[604px] bg-stone-900 rounded-[14px] border-2 border-neutral-700 flex flex-col justify-evenly items-center">
      <div className="w-[95%] flex flex-col  items-start">
        <div className="w-[249.96px] h-[49.58px] text-white text-[32px] font-normal font-['Inter']">
          Some Reviews
        </div>
        <div className="w-[356px] h-[2.25px] bg-neutral-700 rounded-[22px]" />
      </div>
      <div>
        <div className="w-[356.80px] h-[423.70px] bg-neutral-800 rounded-[14px] shadow border border-neutral-700 flex flex-col justify-between items-center">
          <div className="w-[278.02px] h-[25.70px] text-white text-2xl font-extrabold font-['Inter'] leading-[23px]">
            {title}
          </div>
          <ReviewOne />
        </div>
      </div>

      <div className="w-[243.92px] h-[40.57px] bg-neutral-800 rounded-[14px] flex justify-evenly items-center transition-all">
        <button
          onClick={() => {
            handleClick(1);
          }}
          className={`w-[25.20px] h-[28.17px] ${num === 1 ? "bg-stone-500" : "bg-neutral-700"} rounded-full`}
        />
        <button
          onClick={() => {
            handleClick(2);
          }}
          className={`w-[25.20px] h-[28.17px] ${num === 2 ? "bg-stone-500" : "bg-neutral-700"} rounded-full`}
        />
        <button
          onClick={() => {
            handleClick(3);
          }}
          className={`w-[25.20px] h-[28.17px] ${num === 3 ? "bg-stone-500" : "bg-neutral-700"} rounded-full`}
        />
        <button
          onClick={() => {
            handleClick(4);
          }}
          className={`w-[25.20px] h-[28.17px] ${num === 4 ? "bg-stone-500" : "bg-neutral-700"} rounded-full`}
        />
        <button
          onClick={() => {
            handleClick(5);
          }}
          className={`w-[25.20px] h-[28.17px] ${num === 5 ? "bg-stone-500" : "bg-neutral-700"} rounded-full`}
        />
        <button
          onClick={() => {
            handleClick(6);
          }}
          className={`w-[25.20px] h-[28.17px] ${num === 6 ? "bg-stone-500" : "bg-neutral-700"} rounded-full`}
        />
        <button
          onClick={() => {
            handleClick(7);
          }}
          className={`w-[25.20px] h-[28.17px] ${num === 7 ? "bg-stone-500" : "bg-neutral-700"} rounded-full`}
        />
      </div>
    </div>
  );
};

const ReviewOne = () => {
  return (
    <div className="w-[321.53px] h-[350.46px]">
      <span className="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        Implementing QuickSeat has been a{" "}
      </span>
      <span className="text-cyan-400 text-[17px] font-bold font-['Inter'] leading-[23px]">
        game-changer
      </span>
      <span className="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        {" "}
        for us. It simplifies reservations,{" "}
      </span>
      <span className="text-orange-500 text-[17px] font-bold font-['Inter'] leading-[23px]">
        reducing phone calls
      </span>
      <span className="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        {" "}
        and manual bookings. Table management has improved, leading to{" "}
      </span>
      <span className="text-red-600 text-[17px] font-bold font-['Inter'] leading-[23px]">
        better customer flow
      </span>
      <span className="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        {" "}
      </span>
      <span className="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        and fewer wait times. Automatic reminders minimize no-shows, maximizing
        our seating capacity. The system also provides{" "}
      </span>
      <span className="text-green-500 text-[17px] font-bold font-['Inter'] leading-[23px]">
        valuable customer insights
      </span>
      <span className="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        , enhancing our marketing efforts. Support from QuickSeat has been
        excellent, making the transition smooth. Overall, it's an{" "}
      </span>
      <span className="text-yellow-400 text-[17px] font-bold font-['Inter'] leading-[23px]">
        invaluable tool
      </span>
      <span className="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        {" "}
        for our restaurant.
      </span>
    </div>
  );
};
export default Review;
