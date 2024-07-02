"use client";
import axios from "axios";

export default function Page() {
  const sendInfo = () => {
    axios.post("/api/auth/signup", {
      email: "sidakSingh318@gmail.com",
      password: "Pass@123",
      id: Math.floor(Math.random() * 900000000) + 100000000,
      firstName: "Sidak",
      lastName: "Singh",
      phone: "+1234567890",
    });
  };
  return (
    <div>
      <button onClick={sendInfo}>Click me</button>
      <h1> signUp </h1>;
    </div>
  );
}
