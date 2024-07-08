import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col flex-space justify-between items-center">
      <Navbar />
      <div className=""></div>
    </main>
  );
}
