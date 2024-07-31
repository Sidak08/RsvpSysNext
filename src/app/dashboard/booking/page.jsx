"use client";
import styles from "./booking.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Booking() {
  const [url, setUrl] = useState("loading");
  useEffect(() => {
    axios.post(`/api/get_data/booking`, {}).then((res) => {
      if (res.data.success) {
        setUrl(res.data.URL);
      }
    });
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div
      className={`absolute ${styles.customWidth} h-full top-0 flex items-center ml-[90px] justify-center`}
    >
      <div
        className={`w-[95%] ${styles.customHeight} bg-[#212121]/90 rounded-[14px] flex flex-col items-center justify-evenly mb-[50px]`}
      >
        <div className="w-full flex flex-col items-center">
          <div className="w-[95%]">
            <div className="text-white text-[54px] font-normal font-['Inter'] mb-2">
              Customer Booking Page
            </div>
          </div>
          <div className="w-[95%] h-1 bg-[#353535] rounded-[3px]" />
        </div>
        <div className="flex flex-col items-start justify-evenly w-[95%]">
          <div className="text-white text-[32px] font-semibold font-['Inter']">
            URL - Link For Your Customers To Book
          </div>
          <div className="flex items-center justify-evenly mt-3 w-[55%]">
            <div className="w-[90%] max-w-[550px] h-[50px] bg-[#292929] rounded-[13px] flex items-center justify-start pl-3 text-[22px] font-light font-['Inter']">
              {url}
            </div>

            <button
              className="bg-[#292929] rounded-[13px] h-[50px] w-[50px] flex items-center justify-center"
              onClick={copyToClipboard}
            >
              <Image src="/copy.svg" width={24} height={24} alt="copy button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
