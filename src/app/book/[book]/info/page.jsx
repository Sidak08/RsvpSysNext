"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import styles from "./style.module.css";
import emailReg from "@/app/components/regex/emailReg";
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

  const sendInfo = async () => {
    const errors = validateInputs();
    if (errors.length > 0) {
      setError({
        success: false,
        errors: errors.join(" "),
      });
      return;
    }

    try {
      const res = await axios.post(`/api/get_data/book/info`, {
        url: params.book,
        id: id,
        firstName: name.trim().split(" ")[0],
        lastName: name.trim().split(" ")[1],
        phone: phone.trim(),
        email: email.trim().toLowerCase(),
        time: time,
        date: date,
      });

      if (Object.keys(res.data.errors).length > 0) {
        const errorStr = Object.keys(res.data.errors)
          .map((key) => res.data.errors[key])
          .join(" ");
        setError({ success: res.data.success, errors: errorStr });
      } else {
        router.push(
          `confirmation/?url=${encodeURIComponent(params.book)}&tableId=${encodeURIComponent(res.data.tableId)}&rsvpId=${encodeURIComponent(res.data.rsvpId)}`
        );
      }
    } catch (error) {
      console.error("Error sending info:", error);
      setError({
        success: false,
        errors: "An error occurred while sending your information. Please try again.",
      });
    }
  };

  const validateInputs = () => {
    const errors = [];
    if (!emailReg(email.trim())) {
      errors.push("Please Enter A Valid Email.");
    }
    if (!phoneReg(phone)) {
      errors.push("Please Enter A Valid Phone Number.");
    }
    if (name.trim().split(" ").length !== 2) {
      errors.push("Please Enter Your First And Last Name Separated By A Space.");
    }
    return errors;
  };

  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-[#0d0d0d] ">
      <div className="py-6 max-w-[510px] w-[90%] bg-[#1b1a1a] rounded-[15px] flex flex-col items-center justify-evenly">
        <Header />
        <Form
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          date={date}
          time={time}
        />
        <button
          className="h-[50px] w-[90%] bg-[#320db1] text-white text-lg rounded-lg mt-4 cursor-pointer "
          onClick={sendInfo}
        >
          Book
        </button>
        <ErrorBox error={error} />
      </div>
    </div>
  );
}

const Header = () => (
  <div className="h-16 w-[90%]">
    <h1 className="text-4xl text-white mb-2">Your Info</h1>
    <div className="w-full h-[2px] bg-white"></div>
  </div>
);

const Form = ({ name, setName, phone, setPhone, email, setEmail, date, time }) => (
  <div className="w-[90%] h-[395px] flex flex-col justify-between items-end mb-[10px]">
    <InputField
      label="Full Name"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Type In Your First And Last Name Ex. John Doe"
    />
    <InputField
      label="Phone Number"
      type="tel"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      placeholder="Type In Your Phone Number"
    />
    <InputField
      label="Email"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value.toLowerCase().trim())}
      placeholder="Type In Your Email Address"
    />
    <div className="h-[50px] w-full mt-2 bg-[#313131] border border-[#464444] rounded-lg">
      <input
        type="date"
        className={`text-white w-[50%] h-full bg-[#313131] px-5 text-xl font-medium ${styles.dateTimeInput} focus:outline-none`}
        value={date}
      />
      <input
        type="time"
        className={`text-white w-[50%] h-full bg-[#313131] px-5 text-xl font-medium ${styles.dateTimeInput} focus:outline-none`}
        value={time}
      />
    </div>
  </div>
);

const InputField = ({ label, type, value, onChange, placeholder }) => (
  <div className="h-[90px] w-full">
    <h2 className="text-2xl mb-2 text-white">{label}</h2>
    <input
      type={type}
      className="h-[50px] w-full border border-[#464444] bg-[#212121] rounded-lg text-white pl-2 focus:outline-none"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

const ErrorBox = ({ error }) => (
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
);