"use client";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function Page({ params }) {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="bg-[#1b1a1a] md:w-[90%] lg:w-[600px] min-h-[400px] rounded-xl m-5 flex flex-col items-center justify-evenly">
        <div className="w-[90%] flex items-center justify-between">
          <div className="flex items-center justify-center p-3">
            <Image src={"/greenCheck.svg"} height={60} width={60} alt="check" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
