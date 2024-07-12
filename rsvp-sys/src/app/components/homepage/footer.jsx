import Image from "next/image";
const Footer = () => {
  return (
    <div className="w-full h-[475px]  bg-stone-900 flex justify-evenly items-center overflow-x-hidden">
      <div className="flex flex-col justify-evenly items-center">
        <div className="w-full flex mb-[45px]">
          <Image
            src="/logo.svg"
            width={50}
            height={50}
            alt="logo"
            className="mr-[20px]"
          />
          <div>
            <span className="text-purple-700 text-5xl font-normal font-['Inika']">
              QuikSeat,{" "}
            </span>
            <span className="text-white text-[26px] font-normal font-['Inika']">
              © inc. 2024 Copyrighted
            </span>
            <span className="text-purple-700 text-5xl font-normal font-['Inika']"></span>
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
const Submission = () => {
  return (
    <div className="w-[683px] h-[147px] bg-neutral-800 rounded-[14px] border-2 border-neutral-700 flex flex-col justify-evenly items-center">
      <div className="w-[90%]">
        <div className="text-white text-[32px] font-normal font-['Inika']">
          Give Us Feature Ideas
        </div>
      </div>
      <div className="flex justify-evenly items-center w-full">
        <input className="w-[480px] h-12 bg-zinc-800 rounded-[14px] border-2 border-neutral-700" />
        <div className="w-[137px] h-12 bg-indigo-900 rounded-2xl flex justify-center items-center">
          <div className="text-white text-[22px] font-normal font-['Inika']">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
