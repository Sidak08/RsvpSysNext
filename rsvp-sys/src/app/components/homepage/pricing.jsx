import styles from "./desktop.module.css";
const PricingDiv = () => {
  const discription =
    "A free plan to you get you started on your business journey";
  const freeInfo = {
    emails: 30,
    sms: false,
    onlineRsvp: true,
    waitlistMange: false,
    tableMange: true,
    bookingWidget: false,
    deposit: false,
  };
  return (
    <div className="flex flex-col justify-evenly items-center">
      <div className={styles.priceHeader}>A Perfect Price For You</div>
      <PriceBox
        title={"Free"}
        price={false}
        discription={discription}
        info={freeInfo}
      />
    </div>
  );
};
const PriceBox = ({ title, price, discription, info }) => {
  return (
    <div>
      <div> </div>
    </div>
  );
};
const SmallBox = ({ title, check }) => {};
export default PricingDiv;
