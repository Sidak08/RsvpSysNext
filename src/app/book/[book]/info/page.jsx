"use client";
import { useState, Suspense } from "react";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import styles from "./style.module.css";
import emailReg from "@/app/components/regex/emailreg";
import phoneReg from "@/app/components/regex/phoneReg";

export default function Page({ params }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({
    success: true,
    error: "",
  });
  const time = decodeURIComponent(searchParams.get("time"));
  const date = decodeURIComponent(searchParams.get("date"));
  const id = decodeURIComponent(searchParams.get("id"));

  console.log(time, date, id);

  const sendInfo = () => {
    let errors = [];
    let success = true;

    if (!emailReg(email.trim())) {
      errors.push("Please Enter A Valid Emai.");
      success = false;
    }

    if (!phoneReg(phone)) {
      errors.push("Please Enter A Valid Phone Number.");
      success = false;
    }

    if (name.trim().split(" ").length !== 2) {
      errors.push(
        "Please Enter Your First And Last Name Separated By A Space.",
      );
      success = false;
    }

    setError({
      success,
      errors: errors.join(" "),
    });

    if (success) {
      axios
        .post(`/api/get_data/book/info`, {
          url: params.book,
          id: id,
          firstName: name.trim().split(" ")[0],
          lastName: name.trim().split(" ")[1],
          phone: phone.trim(),
          email: email.trim().toLowerCase(),
          time: time,
          date: date,
        })
        .then((res) => {
          if (Object.keys(res.data.errors).length > 0) {
            const errorStr = Object.keys(res.data.errors)
              .map((key) => {
                return `${res.data.errors[key]}`;
              })
              .join(" ");
            setError({ success: res.data.success, errors: errorStr });
          }
          if (!success && error.success) {
            router.push(
              `confirmation/?url=${encodeURIComponent(params.book)}&tableId=${encodeURIComponent(res.data.tableId)}&rsvpId=${encodeURIComponent(res.data.rsvpId)}`,
            );
          }
        });
    }
  };

  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-[#0d0d0d] ">
      <div className="py-6 max-w-[510px] w-[90%] bg-[#1b1a1a] rounded-[15px] flex flex-col items-center justify-evenly">
        <div className="h-16 w-[90%]">
          <h1 className="text-4xl text-white mb-2">Your Info</h1>
          <div className="w-full h-[2px] bg-white"></div>
        </div>
        <div className="w-[90%] h-[395px] flex flex-col justify-between items-end mb-[10px]">
          <div className="h-[90px] w-full">
            <h2 className="text-2xl mb-2">Full Name</h2>
            <input
              type="text"
              className="h-[50px] w-full border border-[#464444] bg-[#212121] rounded-lg text-white pl-2 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type In Your First And Last Name Ex. John Doe"
            />
          </div>
          <div className="h-[90px] w-full mt-2">
            <h2 className="text-2xl mb-2">Phone Number</h2>
            <input
              type="tel"
              className="h-[50px] w-full border border-[#464444] bg-[#212121] rounded-lg text-white pl-2 focus:outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Type In Your Phone Number"
            />
          </div>
          <div className="h-[90px] w-full">
            <h2 className="text-2xl mb-2">Email</h2>
            <input
              type="email"
              className="h-[50px] w-full border border-[#464444] bg-[#212121] rounded-lg text-white pl-2 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase().trim())}
              placeholder="Type In Your Email Address"
            />
          </div>
          <div className="h-[50px] w-full mt-2 bg-[#313131] border border-[#464444] rounded-lg">
            <input
              type="date"
              className={`w-[50%] h-full bg-[#313131] px-5 text-xl font-medium ${styles.dateTimeInput} focus:outline-none`}
              value={date}
            />
            <input
              type="time"
              className={`w-[50%] h-full bg-[#313131] px-5 text-xl font-medium ${styles.dateTimeInput} focus:outline-none`}
              value={time}
            />
          </div>
        </div>
        <button
          className="h-[50px] w-[90%] bg-[#320db1] text-white text-lg rounded-lg mt-4 cursor-pointer "
          onClick={sendInfo}
        >
          Book
        </button>
        <div id={styles.errorBox} className="mt-2">
          <h2
            className={clsx({
              [styles.error]: error.success === false,
              [styles.hidden]: error.success === true,
            })}
          >
            *{error.errors}
          </h2>
        </div>
      </div>
    </div>
  );
}
