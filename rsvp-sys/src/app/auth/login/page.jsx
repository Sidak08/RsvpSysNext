"use client";
import axios from "axios";

export default function Page() {
  const sendInfo = async () => {
    const res = await axios.post("/api/auth/login", {
      email: "sidakSingh318@gmail.com",
      password: "Pass@123",
    });
    console.log("resData", res.data);
  };
  return (
    <div>
      <button onClick={sendInfo}>Click me</button>
    </div>
  );
}
