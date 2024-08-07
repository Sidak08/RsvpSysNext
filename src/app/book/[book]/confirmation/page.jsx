"use client";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function Page({ params }) {
  const searchParams = useSearchParams();
  const tableId = decodeURIComponent(searchParams.get("tableId"));
  const rsvpId = decodeURIComponent(searchParams.get("rsvpId"));

  const [info, setInfo] = useState({
    time: "loading",
    date: "loading",
    name: "loading",
    phone: "loading",
    email: "loading",
  });
  useEffect(() => {
    axios
      .post(`/api/get_data/book/info`, {
        url: params.book,
        tableId: tableId,
        rsvpId: rsvpId,
      })
      .then((res) => {
        setInfo(res.data.info);
      });
  }, []);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="bg-[#1b1a1a] md:w-[90%] lg:max-w-[600px] min-h-[400px] rounded-xl m-5 flex flex-col items-center justify-evenly">
        <div className="md:w-[70%] lg:w-[425px] flex items-center  md:justify-evenly">
          <div className="flex items-center justify-center p-3 bg-[#212121] rounded-3xl mr-3 ">
            <Image src={"/greenCheck.svg"} height={60} width={60} alt="check" />{" "}
          </div>
          <div className="flex flex-col text-4xl lg:flex-row lg:space-x-2 text-white font-['Inika'] font-bold leading-[normal]">
            <span>Booking</span>
            <span>Confirmed</span>
          </div>
        </div>
        <div className="w-[90%] min-h-[15rem] rounded-[0.8125rem] border-[3px] border-[#464444] bg-[#212121] flex flex-col items-start justify-evenly pl-2">
          <div className="text-white font-['Inika'] text-[1.375rem] font-bold leading-[normal] ml-3 mt-3">
            Your Booking is confirmed for{" "}
          </div>
          <div className="ml-10">
            <div className="text-white font-['Inika'] text-xl font-medium leading-[normal] my-3">
              Time: {info.time}
            </div>
            <div className="text-white font-['Inika'] text-xl font-medium leading-[normal] my-3">
              Date: {info.date}
            </div>
            <div className="text-white font-['Inika'] text-xl font-medium leading-[normal] my-3">
              Name: {info.name}
            </div>
            <div className="text-white font-['Inika'] text-xl font-medium leading-[normal] my-3">
              Phone: {info.phone}
            </div>
            <div className="text-white font-['Inika'] text-xl font-medium leading-[normal] my-3">
              Email: {info.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
