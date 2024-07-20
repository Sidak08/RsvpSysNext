"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "./components/navbar";
import Header from "./components/homepage/header_images";
import Desk_left_side from "./components/homepage/desktop_left_side";
import Desk_right_side from "./components/homepage/desktop_right_side";
import PricingDiv from "./components/homepage/pricing";
import Footer from "./components/homepage/footer";
import MobFeatures from "./components/homepage/mob_features";
import Review from "./components/homepage/review";
import EcoFreindly from "./components/homepage/eco_freindly";
import Customer from "./components/homepage/mob_customer_everything";
import Chat from "./components/homepage/chat.jsx";
import MobPricingDiv from "./components/homepage/mob_pricing";
import MobFooter from "./components/homepage/mob_footer";

export default function Home() {
  // State to track whether the component has been mounted
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true when the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Define a media query to check if the viewport width is less than or equal to 767 pixels
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Render content only if the component has been mounted
  return (
    <main className="flex flex-col justify-between items-center">
      <Navbar />
      <Header />
      {isMounted && isMobile ? <MobFeatures /> : <></>}
      {isMounted && isMobile ? <Review /> : <></>}
      {isMounted && isMobile ? <EcoFreindly /> : <></>}
      {isMounted && isMobile ? <Customer /> : <></>}
      {isMounted && isMobile ? <Chat /> : <></>}
      {isMounted && isMobile ? <MobPricingDiv /> : <></>}
      {isMounted && isMobile ? <MobFooter /> : <></>}
      <div className="w-full flex flex-row justify-between items-start">
        {isMounted && !isMobile ? <Desk_left_side /> : <></>}
        {isMounted && !isMobile ? <Desk_right_side /> : <></>}
      </div>
      {isMounted && !isMobile ? <PricingDiv /> : <></>}
      {isMounted && !isMobile ? <Footer /> : <></>}
    </main>
  );
}
