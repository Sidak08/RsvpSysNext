"use client";
import { useState, Suspense } from "react";
import styles from "./style.module.css";
import axios from "axios";
import Link from "next/link";
import clsx from "clsx";
import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";

function LoginPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");
  const link = searchParams.get("link");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ success: true, error: "" });
  const [succes, setSucces] = useState(false);

  const onSubmit = async () => {
    const maxRetries = 3;
    let attempts = 0;

    const attemptLogin = async () => {
      try {
        const res = await axios.post(`/api/auth/login`, { email, password });
        if (res.data.success) {
          Cookies.set("loginInfo", JSON.stringify({ email, password }), {
            expires: 30,
          });
          if (redirect && link) {
            router.push(decodeURIComponent(link));
          } else {
            setSucces(true);
            router.push("/dashboard");
          }
          setError(res.data);
          setSucces(true);
        } else {
          setError(res.data);
        }
      } catch (error) {
        console.error("Login error:", error);
        setError({ success: false, error: "An error occurred during login" });
        if (attempts < maxRetries) {
          attempts++;
          console.log(`Retrying login attempt ${attempts}...`);
          setTimeout(attemptLogin, 1000); // Retry after 1 second
        } else {
          console.error("Max retry attempts reached.");
        }
      }
    };

    attemptLogin();
  };

  return (
    <>
      <div id={styles.headingDiv}>
        <h1 id={styles.title}> Login </h1>
        <div id={styles.line}> </div>
      </div>
      <div id={styles.inputBoxs}>
        <div className={styles.inputBox}>
          <h2 className="text-white"> Email </h2>
          <input
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value.trim().toLowerCase())}
            placeholder="Type In Your Email Address"
          />
        </div>

        <div className={styles.inputBox}>
          <h2 className="text-white">Password</h2>
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

      <div id={styles.tmpTopText}>
        <h5 className={styles.secondaryLink}>
          Do Not Have An Account{" "}
          <Link href="/auth/signup" className={styles.underline}>
            Sign Up
          </Link>
        </h5>
      </div>

      <div
        id={styles.btmText}
        className={`${succes ? "" : styles.hidden}`} // Ensure to have a hidden class in your CSS to hide the element
      >
        <h5 className={styles.secondaryLink}>
          Manuel{" "}
          <Link href="/dashboard" className={styles.underline}>
            Dashboard Redirect
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

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPageContent />
    </Suspense>
  );
}

export default Page;
