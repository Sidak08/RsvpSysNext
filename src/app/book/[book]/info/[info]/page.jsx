"use client";
import { useState, Suspense } from "react";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

export default function Page({ params }) {
  console.log(params);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({
    success: true,
    error: "",
  });

  const sendInfo = () => {
    if (name.trim().split(" ").length === 2) {
      axios
        .post(`/api/auth/signup`, {
          email: email.trim().toLowerCase(),
          password: password,
          id: Math.floor(Math.random() * 900000000) + 100000000,
          firstName: name.trim().split(" ")[0],
          lastName: name.trim().split(" ")[1],
          phone: phone.trim(),
          dashboardData: {
            elementsArray: [],
            linesArray: [
              {
                x: false,
                y: false,
              },
            ],
            upComingReservations: [],
          },
        })
        .then((res) => {
          if (res.data.success === true) {
            Cookies.set("loginInfo", JSON.stringify({ email, password }), {
              expires: 30,
            });
            router.push("/dashboard");
          }
          if (Object.keys(res.data.errors).length > 0) {
            const errorStr = Object.keys(res.data.errors)
              .map((key) => {
                return `${res.data.errors[key]}`;
              })
              .join(" ");
            setError({ success: res.data.success, errors: errorStr });
          }
        });
    } else {
      setError({
        success: false,
        errors: "Please Enter Your first and last name seprated by a space",
      });
    }
  };

  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-[#0d0d0d]">
      <div className="h-[650px] max-w-[510px] w-[90%] bg-[#1b1a1a] rounded-[15px] flex flex-col items-center justify-evenly">
        <div className="h-16 w-[90%]">
          <h1 className="text-4xl text-white">Your Info</h1>
          <div className="w-full h-[2px] bg-white"></div>
        </div>
        <div className="w-[90%] h-[395px] flex flex-col justify-between items-end mb-[60px]">
          <div className="h-[90px] w-full">
            <h2 className="text-2xl mb-2">Full Name</h2>
            <input
              type="text"
              className="h-[50px] w-full border border-[#464444] bg-[#212121] rounded-lg text-white pl-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type In Your First And Last Name Ex. John Doe"
            />
          </div>
          <div className="h-[90px] w-full mt-2">
            <h2 className="text-2xl mb-2">Phone Number</h2>
            <input
              type="tel"
              className="h-[50px] w-full border border-[#464444] bg-[#212121] rounded-lg text-white pl-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Type In Your Phone Number"
            />
          </div>
          <div className="h-[90px] w-full">
            <h2 className="text-2xl mb-2">Email</h2>
            <input
              type="email"
              className="h-[50px] w-full border border-[#464444] bg-[#212121] rounded-lg text-white pl-2"
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase().trim())}
              placeholder="Type In Your Email Address"
            />
          </div>
          <div className="h-[50px] w-full mt-2 bg-[#313131] border border-[#464444] rounded-lg"></div>
        </div>
        <button
          className="h-[50px] w-[90%] bg-[#320db1] text-white text-lg rounded-lg mt-4 cursor-pointer "
          onClick={sendInfo}
        >
          Book
        </button>
      </div>
    </div>
  );
}
