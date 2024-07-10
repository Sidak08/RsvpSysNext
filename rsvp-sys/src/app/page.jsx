import Image from "next/image";
import Navbar from "./components/navbar";
import Header from "./components/homepage/header_images";
import Review from "./components/homepage/review";
import Desk_left_side from "./components/homepage/desktop_left_side";
import Desk_right_side from "./components/homepage/desktop_right_side";

export default function Home() {
  return (
    <main className="flex flex-col flex-space justify-between items-center overflow-x-clip">
      <Navbar />
      <Header />
      <div className="w-full flex flex-row justify-between items-start">
        <Desk_left_side />
        <Desk_right_side />
      </div>
    </main>
  );
}
