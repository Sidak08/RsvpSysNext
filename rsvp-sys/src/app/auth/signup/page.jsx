"use client";
import axios from "axios";

export default function Page() {
  const sendInfo = () => {
    axios.post("/api/auth/signup", { howYouDoing: "how are you doing" });
  };
  return (
    <div>
      <button onClick={sendInfo}>Click me</button>
    </div>
  );
}
