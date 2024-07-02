"use client";
import { useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {};

  return (
    <div>
      <div style={styles.headingDiv}>
        <h1 id={styles.title}> login </h1>
        <div id={styles.line}> </div>
      </div>
      <div id={styles.inputBoxs}></div>
      <button id={styles.submitButton} onClick={onSubmit}>
        submit
      </button>
      <h5 className={styles.secondaryLink}>
        Do Not Have An Account
        <Link href="/auth/signup" className="underLine">
          Sign Up
        </Link>
      </h5>
    </div>
  );
}
