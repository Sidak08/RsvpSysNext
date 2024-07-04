"use client";
import { useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
import Link from "next/link";
import clsx from "clsx";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ success: true, error: "" });

  const onSubmit = () => {
    axios.post("/api/auth/login", { email, password }).then((res) => {
      console.log(res.data);
      if (res.data.success) {
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ email, password }),
        );
        // const test = JSON.parse(window.localStorage.getItem("currentUser"));
        // console.log(test, "test");
        //window.location.href = "/dashboard";
      }
      setError(res.data);
    });
  };

  return (
    <>
      <div id={styles.headingDiv}>
        <h1 id={styles.title}> Login </h1>
        <div id={styles.line}> </div>
      </div>
      <div id={styles.inputBoxs}>
        <div className={styles.inputBox}>
          <h2> Email </h2>
          <input
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
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

        <h5 className={styles.forPass}>
          <Link
            href="/auth/forgotpassword"
            className={`${styles.secondaryLink} ${styles.underline}`}
          >
            Forgot Your Password
          </Link>
        </h5>
      </div>

      <button id={styles.submitBtn} onClick={onSubmit}>
        Login
      </button>

      <div id={styles.btmText}>
        <h5 className={styles.secondaryLink}>
          Do Not Have An Account{" "}
          <Link href="/auth/signup" className={styles.underline}>
            Sign Up
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
          *{error.error}
        </h2>
      </div>
    </>
  );
}
