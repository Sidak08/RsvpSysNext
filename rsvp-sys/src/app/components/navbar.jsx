import Link from "next/link";
import Image from "next/image";
import LogoSvg from "./svg.jsx";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row justify-between items-center">
        {/* logo and titel */}
        <LogoSvg />
      </div>
      <div>
        <Link href="/chat">
          <a>chat</a>
        </Link>
        <Link href="/dashboard">
          <a>dashboard</a>
        </Link>
        <Link href="/pricing">
          <a>pricing</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
