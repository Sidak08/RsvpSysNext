import styles from "./desktop.module.css";
import Image from "next/image";

const PricingDiv = () => {
  const freeInfo = {
    emails: 30,
    sms: false,
    onlineRsvp: true,
    waitlistMange: false,
    tableMange: true,
    bookingWidget: false,
    deposit: false,
    discription: "A free plan to you get you started on your business journey",
  };
  const premiumInfo = {
    emails: true,
    sms: true,
    onlineRsvp: true,
    waitlistMange: true,
    tableMange: true,
    bookingWidget: true,
    deposit: true,
    discription:
      "The best require the best. So you should have access to anything and everything",
  };
  const essentialInfo = {
    emails: true,
    sms: true,
    onlineRsvp: true,
    waitlistMange: true,
    tableMange: true,
    bookingWidget: false,
    deposit: false,
    discription:
      "All the tools you will need to start you journey packed in one sweet deal.",
  };
  return (
    <div className="w-full flex flex-col justify-evenly items-center">
      <div className={styles.priceHeader}>A Perfect Price For You</div>
      <div className={"flex justify-evenly items-start w-full mt-[70px]"}>
        <div className={"flex flex-col justify-between h-[750px] items-center"}>
          <div className="w-[236px] h-[70px] bg-stone-900 rounded-[14px] border-2 border-indigo-700 flex justify-evenly items-center">
            <div className="text-white text-[38px] font-black font-['Inter'] text-center">
              Monthly
            </div>
          </div>
          <PriceBox
            title={"Free"}
            price={false}
            discription={freeInfo.discription}
            info={freeInfo}
          />
        </div>
        <PriceBox
          title={"Premium"}
          price={29.99}
          discription={premiumInfo.discription}
          info={premiumInfo}
        />
        <div className={"flex flex-col justify-between h-[750px] items-center"}>
          <div className="w-[236px] h-[70px] bg-stone-900 rounded-[14px] border-2 border-indigo-700 flex justify-evenly items-center">
            <div className="text-white text-[38px] font-black font-['Inter'] text-center">
              Yearly
            </div>
          </div>
          <PriceBox
            title={"Essential"}
            price={22.99}
            discription={essentialInfo.discription}
            info={essentialInfo}
          />
        </div>
      </div>
    </div>
  );
};
const PriceBox = ({ title, price, discription, info }) => {
  return (
    <div className="max-w-[331px] w-[90%] h-[635px] flex flex-col justify-evenly items-center bg-stone-900 rounded-[14px] shadow border-2 border-neutral-700">
      <div className="w-full h-[50px] flex flex-col justify-evenly items-center">
        <div className="w-full">
          <span className="text-white text-[32px] font-bold font-['Inter'] ml-[40px]">
            {title}{" "}
          </span>
          <span className="text-white text-[32px] font-normal font-['Inter']">
            {price ? `-$${price}` : ""}
          </span>
        </div>
        <div className="w-[90%] h-0.5 bg-neutral-700 rounded-[20px]" />
      </div>
      <div className="w-[90%] text-white text-[22px] font-normal font-['Inter']">
        {discription}
      </div>
      <div className="w-full h-[400px] flex flex-col justify-evenly items-center">
        <SmallBox title={"Reminder Emails"} check={info.emails} />
        <SmallBox title={"Reminder Text SMS"} check={info.sms} />
        <SmallBox title={"Online Reservations"} check={info.onlineRsvp} />
        <SmallBox title={"Waitlist Management"} check={info.waitlistMange} />
        <SmallBox title={"Table Management"} check={info.tableMange} />
        <SmallBox title={"Booking Widget"} check={info.bookingWidget} />
        <SmallBox title={"Deposit & Prepayment"} check={info.deposit} />
      </div>
    </div>
  );
};

const SmallBox = ({ title, check }) => {
  return (
    <div className="w-[90%] h-[50px] bg-stone-900 flex flex-col justify-evenly items-center">
      <div className="flex w-full justify-between items-center pl-4 pr-4">
        <div className="text-white text-lg font-light font-['Inter']">
          {title}
        </div>
        {typeof check === "number" ? (
          <div className="text-[#29F1E3] text-lg font-medium font-['Inter']">
            {check}
          </div>
        ) : check ? (
          <Image
            src={"/checked.svg"}
            height={24}
            width={24}
            alt="checked box"
          />
        ) : (
          <Image
            src={"/unChecked.svg"}
            height={24}
            width={24}
            alt="unchecked box"
          />
        )}
      </div>
      <div className="w-[90%] h-0.5 bg-neutral-700 rounded-[20px]" />
    </div>
  );
};
export default PricingDiv;
