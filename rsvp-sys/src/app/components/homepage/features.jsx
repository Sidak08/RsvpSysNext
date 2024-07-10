const Features = () => {
  return (
    <div className="w-[90%] h-[448px] bg-stone-900 rounded-[14px] border-2 border-neutral-700 flex justify-evenly items-center">
      <div className="w-[68%] h-[422px] " />
      <div className="w-[28%] h-[422px] bg-neutral-800 rounded-[14px] border-2 border-neutral-700">
        <Button text="Reduce No Show" color="3E14D0" border="3E14D0" />
      </div>
    </div>
  );
};

const Button = ({ text, color, border }) => {
  return (
    <div
      className={`w-[90%px] h-[45px] bg-[#${color}] rounded-[14px] shadow border-2 border-[#${border}] flex justify-center items-center`}
    >
      <div className="text-white text-base font-light font-['Inter'] text-center">
        {text}
      </div>
    </div>
  );
};

export default Features;
