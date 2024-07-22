"use client";
import { useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
import Link from "next/link";
import clsx from "clsx";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Page() {
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
    <>
      <div id={styles.headingDiv}>
        <h1 id={styles.title}> Sign Up </h1>
        <div id={styles.line}> </div>
      </div>
      <div id={styles.inputBoxs}>
        <div className={styles.inputBox}>
          <h2> Full Name </h2>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type In Your First And Last Name Ex. John Doe"
          />
        </div>

        <div className={styles.inputBox}>
          <h2> Phone Number </h2>
          <input
            type="tel"
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Type In Your Phone Number"
          />
        </div>

        <div className={styles.inputBox}>
          <h2> Email </h2>
          <input
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase().trim())}
            placeholder="Type In Your Email Address"
          />
        </div>

        <div className={styles.inputBox}>
          <h2>Password</h2>
          <input
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type In Your Password"
          />
        </div>
      </div>

      <button id={styles.submitBtn} onClick={sendInfo}>
        Sign Up
      </button>

      <div id={styles.btmText}>
        <h5 className={styles.secondaryLink}>
          Have An Account{" "}
          <Link href="/auth/login" className={styles.underline}>
            Login
          </Link>
        </h5>
      </div>

      <div id={styles.errorBox}>
        <h2
          className={clsx({
            [styles.error]: error.success === false,
            [styles.hidden]: error.success === true,
          })}
        >
          *{error.errors}
        </h2>
      </div>
    </>
  );
}
