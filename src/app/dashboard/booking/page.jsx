import styles from "./module.booking.css";

export default function Booking() {
  return (
    <div
      className={`absolute ${styles.customWidth} h-full top-0 ml-[80px] flex items-center justify-center`}
    >
      <div className="w-[90%] h-[90%] bg-[#212121]/90 rounded-[14px] flex flex-col items-center justify-evenly">
        {/* Your content here */}
      </div>
    </div>
  );
}
