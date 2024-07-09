"use client";
import { useState } from "react";

const Review = () => {
  const [num, setNum] = useState(4);
  const [title, setTitle] = useState("Haka Khazana");
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
        <div className="w-[356.80px] h-[423.70px]  bg-neutral-800 rounded-[14px] shadow border border-neutral-700 flex flex-col justify-evenly items-center">
          <div className="text-white text-2xl font-extrabold font-['Inter'] leading-[23px] w-full pl-[12px] mt-[10px]">
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
    <div className="w-[321.53px] h-[350.46px] pl-2">
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

const ReviewTwo = () => {
  return (
    <div className="w-[321.53px] h-[350.46px] pl-2">
      <span className="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        Implementing QuickSeat has revolutionized our operations. It{" "}
      </span>
      <span className="text-cyan-400 text-[17px] font-normal font-['Inter'] leading-[23px]">
        streamlines the reservation
      </span>
      <span className="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        {" "}
        process, cutting down on phone calls and manual entries. Our table
        management is
      </span>
      <span className="text-emerald-500 text-[17px] font-normal font-['Inter'] leading-[23px]">
        {" "}
        more efficient,
      </span>
      <span className="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        {" "}
        resulting in improved customer flow and{" "}
      </span>
      <span className="text-rose-500 text-[17px] font-normal font-['Inter'] leading-[23px]">
        shorter wait times
      </span>
      <span className="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        . The automatic reminder feature significantly reduces no-shows,
        optimizing our seating capacity. Additionally, the system offers{" "}
      </span>
      <span className="text-yellow-400 text-[17px] font-normal font-['Inter'] leading-[23px]">
        insightful customer data
      </span>
      <span className="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        , boosting our marketing strategies. The support from QuickSeat has been
        outstanding, ensuring a seamless transition.
      </span>
    </div>
  );
};

const ReviewThree = () => {
  return (
    <div className="w-[321.53px] h-[350.46px] pl-2">
      <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        Quick Seat is a{" "}
      </span>
      <span style="text-yellow-400 text-[17px] font-normal font-['Inter'] leading-[23px]">
        robust table management
      </span>
      <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        {" "}
        software designed to streamline restaurant operations with its intuitive
        interface that facilitates easy table reservations,{" "}
      </span>
      <span style="text-emerald-500 text-[17px] font-normal font-['Inter'] leading-[23px]">
        real-time updates
      </span>
      <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        , and efficient seating arrangements. The standout drag-and-drop
        functionality{" "}
      </span>
      <span style="text-rose-500 text-[17px] font-normal font-['Inter'] leading-[23px]">
        simplifies managing
      </span>
      <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        {" "}
        reservations and walk-ins, while detailed analytics and reporting help
        managers make data-driven decisions to{" "}
      </span>
      <span style="text-cyan-400 text-[17px] font-normal font-['Inter'] leading-[23px]">
        optimize seating strategy
      </span>
      <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        {" "}
        and improve turnover rates. Seamless integration with various POS
        systems.
        <br />
      </span>
    </div>
  );
};

const ReviewFour = () => {
  return (
    <div className="w-[321.53px] h-[350.46px] pl-2">
      <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        Quick Seat is an{" "}
      </span>
      <span style="text-cyan-400 text-[17px] font-normal font-['Inter'] leading-[23px]">
        efficient table{" "}
      </span>
      <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        management software tailored for bustling restaurants. Its{" "}
      </span>
      <span style="text-yellow-400 text-[17px] font-normal font-['Inter'] leading-[23px]">
        user-friendly{" "}
      </span>
      <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        interface simplifies the reservation process, enabling staff to manage
        bookings and{" "}
      </span>
      <span style="text-lime-500 text-[17px] font-normal font-['Inter'] leading-[23px]">
        walk-ins effortlessly
      </span>
      <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        . Additionally, Quick Seat integrates well with various POS systems,
        ensuring seamless coordination between reservations and billing. With
        excellent customer support, Quick Seat stands out as an essential tool
        for restaurants looking to enhance their table management and{" "}
      </span>
      <span style="text-rose-500 text-[17px] font-normal font-['Inter'] leading-[23px]">
        operational efficiency.
      </span>
    </div>
  );
};

const ReviewFive = () => {
  return (
    <div className="w-[321.53px] h-[350.46px] pl-2">
      <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        it easy for staff to{" "}
      </span>
      <span style="text-emerald-500 text-[17px] font-normal font-['Inter'] leading-[23px]">
        allocate tables efficiently,
      </span>
      <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        {" "}
        minimizing wait times and maximizing customer satisfaction. The software
        also{" "}
      </span>
      <span style="text-rose-500 text-[17px] font-normal font-['Inter'] leading-[23px]">
        boasts powerful analytics
      </span>
      <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        {" "}
        and reporting tools, enabling managers to gain valuable insights into
        their operations and make informed decisions. Integration with popular
        POS systems ensures a
      </span>
      <span style="text-yellow-400 text-[17px] font-normal font-['Inter'] leading-[23px]">
        {" "}
        smooth flow
      </span>
      <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        {" "}
        of information between table management and billing. With responsive
        customer support and a range of robust features, Quick Seat is an
        indispensable tool for enhancing{" "}
      </span>
      <span style="text-cyan-400 text-[17px] font-normal font-['Inter'] leading-[23px]">
        restaurant efficiency
      </span>
      <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
        {" "}
        and customer service.
      </span>
    </div>
  );
};

const ReviewSix = () => {
  <div className="w-[321.53px] h-[350.46px] pl-2">
    <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
      Quick Seat excels as a versatile table management software designed to
      streamline restaurant operations with precision and ease. Its intuitive
      interface{" "}
    </span>
    <span style="text-yellow-400 text-[17px] font-normal font-['Inter'] leading-[23px]">
      empowers staff
    </span>
    <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
      {" "}
      to efficiently handle reservations, walk-ins, and seating arrangements.{" "}
    </span>
    <span style="text-lime-500 text-[17px] font-normal font-['Inter'] leading-[23px]">
      Robust analytics
    </span>
    <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
      {" "}
      and reporting capabilities provide{" "}
    </span>
    <span style="text-cyan-400 text-[17px] font-normal font-['Inter'] leading-[23px]">
      valuable insights
    </span>
    <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
      {" "}
      into table turnover and customer preferences, aiding in strategic
      decision-making. With seamless integration options. Quick Seat proves
      indispensable in optimizing restaurant{" "}
    </span>
    <span style="text-rose-500 text-[17px] font-normal font-['Inter'] leading-[23px]">
      efficiency
    </span>
    <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
      {" "}
      and guest satisfaction.
    </span>
  </div>;
};

const ReviewSeven = () => {
  <div className="w-[321.53px] h-[350.46px] pl-2">
    <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
      Quick Seat stands out as a
    </span>
    <span style="text-rose-500 text-[17px] font-normal font-['Inter'] leading-[23px]">
      {" "}
      reliable
    </span>
    <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
      {" "}
      and efficient table management software, offering restaurants a
      streamlined solution to optimize their seating operations. Real-time
      updates, ensuring accurate table availability and minimizing wait times.
      The software's{" "}
    </span>
    <span style="text-yellow-400 text-[17px] font-normal font-['Inter'] leading-[23px]">
      drag-and-drop
    </span>
    <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
      {" "}
      functionality simplifies seating arrangements, while robust analytics
      provide valuable insights Integrated with leading{" "}
    </span>
    <span style="text-emerald-500 text-[17px] font-normal font-['Inter'] leading-[23px]">
      POS systems,
    </span>
    <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
      {" "}
      Quick Seat facilitates smooth coordination between seating and billing
      processes. Quick Seat is an{" "}
    </span>
    <span style="text-cyan-400 text-[17px] font-normal font-['Inter'] leading-[23px]">
      invaluable tool
    </span>
    <span style="text-white text-[17px] font-normal font-['Inter'] leading-[23px]">
      {" "}
      for restaurants.
    </span>
  </div>;
};
export default Review;
