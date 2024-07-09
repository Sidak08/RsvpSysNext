import Image from "next/image";
import Navbar from "./components/navbar";
import Header from "./components/homepage/header_images";
import Review from "./components/homepage/review";

export default function Home() {
  return (
    <main className="flex flex-col flex-space justify-between items-center">
      <Navbar />
      <Header />
      <Review />
    </main>
  );
}
