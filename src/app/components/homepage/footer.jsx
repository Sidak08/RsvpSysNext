import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-[475px] bg-stone-900 flex justify-evenly items-center overflow-x-hidden">
      <div className="flex flex-col justify-evenly items-center">
        <div className="w-full flex mb-12">
          <Image
            src="/logo.svg"
            width={50}
            height={50}
            alt="logo"
            className="mr-5"
          />
          <div>
            <span className="text-purple-700 text-5xl font-normal font-['Inika']">
              QuikSeat,{" "}
            </span>
            <span className="text-white text-2xl font-normal font-['Inika']">
              © inc. 2024 Copyrighted
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center h-[325px]">
          <Submission />
          <Submission />
        </div>
      </div>
      <Image
        src="/footerLogo.svg"
        width={350}
        height={350}
        alt="footer logo image"
      />
    </div>
  );
};

import { useState } from "react";

const Submission = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/submit_idea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea: inputValue }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit idea");
      }

      const data = await response.json();
      console.log("Submission successful:", data);
      setInputValue(""); 
    } catch (error) {
      console.error("Error submitting idea:", error);
      setError("Failed to submit idea");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[683px] h-[147px] bg-neutral-800 rounded-lg border-2 border-neutral-700 flex flex-col justify-evenly items-center p-4">
      <div className="w-[90%]">
        <div className="text-white text-2xl font-normal font-['Inika']">
          Give Us Feature Ideas
        </div>
      </div>
      <div className="flex justify-evenly items-center w-full">
        <input
          className="w-[480px] h-12 bg-zinc-800 rounded-lg border-2 border-neutral-700 p-2"
          aria-label="Feature ideas input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="w-[137px] h-12 bg-indigo-900 rounded-2xl flex justify-center items-center ml-4"
          aria-label="Submit feature ideas"
          onClick={handleSubmit}
          disabled={loading}
        >
          <div className="text-white text-lg font-normal font-['Inika']">
            {loading ? "Submitting..." : "Submit"}
          </div>
        </button>
      </div>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default Footer;