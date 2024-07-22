import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Seat",
  description: "Find the best seat in the house",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
