"use client";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Navbar from "./components/navbar";
import Header from "./components/homepage/header_images";
import Desk_left_side from "./components/homepage/desktop_left_side";
import Desk_right_side from "./components/homepage/desktop_right_side";
import PricingDiv from "./components/homepage/pricing";
import Footer from "./components/homepage/footer";
import MobFeatures from "./components/homepage/mob_features";
import Review from "./components/homepage/review";

export default function Home() {
  // Define a media query to check if the viewport width is less than or equal to 767 pixels
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <main className="flex flex-col justify-between items-center">
      <Navbar />
      <Header />
      {isMobile ? <MobFeatures /> : <></>}
      {isMobile ? <Review /> : <></>}
      <div className="w-full flex flex-row justify-between items-start">
        {!isMobile ? <Desk_left_side /> : <></>}
        {!isMobile ? <Desk_right_side /> : <></>}
      </div>
      {!isMobile ? <PricingDiv /> : <></>}
      <Footer />
    </main>
  );
}
