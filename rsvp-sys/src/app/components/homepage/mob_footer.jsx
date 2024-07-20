const MobFooter = () => {
  return (
    <div className="w-full h-[442px] bg-stone-900 mt-[60px] flex flex-col justify-evenly items-center">
      <div className="w-full ml-[60px]">
        <div className="flex justify-start items-center">
          <div className="w-[49px] h-[49.24px] relative">
            <div className="w-[11.38px] h-[11.38px] left-0 top-[35.93px] absolute origin-top-left rotate-[-1.23deg] bg-indigo-900 rounded-full" />
            <div className="w-[11.38px] h-[11.38px] left-[37.38px] top-[36.05px] absolute origin-top-left rotate-[-1.23deg] bg-purple-700 rounded-full" />
            <div className="w-[34.54px] h-3 left-[5.12px] top-[29.60px] absolute origin-top-left rotate-[-59deg] bg-purple-700 rounded-[23px]" />
            <div className="w-[30.72px] h-3 left-[16.20px] top-[43.05px] absolute origin-top-left rotate-[-59deg] bg-indigo-900 rounded-[23px]" />
          </div>
          <div className="ml-5 text-purple-700 text-5xl font-normal font-['Inika']">
            QuikSeat
          </div>
        </div>
      </div>
    </div>
  );
};

const InputDiv = ({ text, placeHolder }) => {
  return (
    <div className="w-[90%] h-[104px] bg-neutral-800 rounded-[14px] border-2 border-neutral-700 flex flex-col items-center justify-evenly">
      <div className="w-full pl-[20px]">
        <div className=" h-[30px] text-white text-2xl font-normal font-['Inika']">
          {text}
        </div>
      </div>
    </div>
  );
};
export default MobFooter;
