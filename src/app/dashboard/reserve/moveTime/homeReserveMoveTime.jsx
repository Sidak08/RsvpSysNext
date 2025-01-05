"use client";
import { useEffect, useState } from "react";
import "./homeReserveMoveTime.css";
import { CloseSvg } from "../../components/images/svg.jsx";

const ChangeTime = ({
  activeNav,
  elementsArray,
  upComingReservations,
  renderChangeTime,
  setRenderChangeTime,
  setElementsArray,
  setUpComingReservations,
}) => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const time = `${String(today.getHours()).padStart(2, "0")}:${String(today.getMinutes()).padStart(2, "0")}`;

  const [spotAval, setSpotAval] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [bookDate, setBookDate] = useState(`${year}-${month}-${day}`);
  const [bookTime, setBookTime] = useState(time);

  const stayLength = 120;

  useEffect(() => {
    renderChangeTime !== false && activeNav === "home"
      ? setAnimate(true)
      : setAnimate(false);
  }, [renderChangeTime, activeNav]);

  useEffect(() => {
    const { endTime, endDate } = calculateEndTime(bookTime, bookDate, stayLength);

    if (checkAvailability(bookTime, bookDate, endTime, endDate)) {
      setSpotAval(true);
      fixTimeDate(bookTime, bookDate, endTime, endDate);
    } else {
      setSpotAval(false);
    }
  }, [bookDate, bookTime]);

  const changeDateIntoMinutes = (date) => {
    const year = parseInt(date.split("-")[0]) * 365 * 24 * 60;
    const month = parseInt(date.split("-")[1]) * 30 * 24 * 60;
    const day = parseInt(date.split("-")[2]) * 24 * 60;
    return year + month + day;
  };

  const checkAvailability = (bookTime, bookDate, bookEndTime, bookEndDate) => {
    const startTimeInMinutes = convertToMinutes(bookTime, bookDate);
    const endTimeInMinutes = convertToMinutes(bookEndTime, bookEndDate);

    const tmpRsvpList = elementsArray.find(element => element.id === renderChangeTime.tableId)?.reservation || [];

    const filteredRsvpList = tmpRsvpList.filter(rsvp => rsvp.id !== renderChangeTime.id);

    return !filteredRsvpList.some(rsvp => {
      const rsvpStartTime = convertToMinutes(rsvp.startTime, rsvp.startDate);
      const rsvpEndTime = convertToMinutes(rsvp.endTime, rsvp.endDate);
      return (startTimeInMinutes >= rsvpStartTime && startTimeInMinutes <= rsvpEndTime) ||
             (endTimeInMinutes >= rsvpStartTime && endTimeInMinutes <= rsvpEndTime);
    });
  };

  const convertToMinutes = (time, date) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes + changeDateIntoMinutes(date);
  };

  const calculateEndTime = (startTime, startDate, stayLength) => {
    const startTimeInMinutes = convertToMinutes(startTime, startDate);
    const totalMinutes = startTimeInMinutes + stayLength;

    if (totalMinutes <= 1440) {
      const hour = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
      const minute = String(totalMinutes % 60).padStart(2, "0");
      return { endTime: `${hour}:${minute}`, endDate: startDate };
    } else {
      const excessMinutes = totalMinutes - 1440;
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 1);

      const hour = String(Math.floor(excessMinutes / 60)).padStart(2, "0");
      const minute = String(excessMinutes % 60).padStart(2, "0");
      return {
        endTime: `${hour}:${minute}`,
        endDate: endDate.toISOString().slice(0, 10),
      };
    }
  };

  const handleDateChange = (e) => {
    setBookDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setBookTime(e.target.value);
  };

  const handleClose = () => {
    setRenderChangeTime(false);
  };

  const fixTimeDate = (bookTime, bookDate, endTime, endDate) => {
    setElementsArray((prevElementsArray) => {
      return prevElementsArray.map((element) => {
        if (element.id === renderChangeTime.tableId) {
          const updatedReservation = element.reservation.map((reservation) => {
            if (reservation.id === renderChangeTime.id) {
              return {
                ...reservation,
                startTime: bookTime,
                startDate: bookDate,
                endTime: endTime,
                endDate: endDate,
              };
            }
            return reservation;
          });
          return {
            ...element,
            reservation: updatedReservation,
          };
        }
        return element;
      });
    });

    setUpComingReservations((prevUpComingReservations) => {
      return prevUpComingReservations.map((reservation) => {
        if (reservation.id === renderChangeTime.id) {
          return {
            ...reservation,
            startTime: bookTime,
            startDate: bookDate,
            endTime: endTime,
            endDate: endDate,
          };
        }
        return reservation;
      });
    });
  };

  return (
    <div className={`homeReserveChangeTime ${animate ? "animate" : ""}`}>
      <div id="homeReserve_bookSpotDiv">
        <h1>Book spot</h1>
        <div className="homeReserveLine" />
        <div id="homeReserve_bookSpotTimeSlotDiv">
          <input
            type="date"
            id="homeReserve_bookSpotDivDate"
            onChange={handleDateChange}
            value={bookDate}
          />
          <input
            type="time"
            id="homeReserve_bookSpotDivTime"
            onChange={handleTimeChange}
            value={bookTime}
          />
          <div
            id="homeReserve_avalibility"
            className={spotAval ? "homeReserve_green" : "homeReserve_red"}
          />
        </div>
      </div>
      <button onClick={handleClose} className="homeReserveMoveTimeClose">
        <CloseSvg />
      </button>
    </div>
  );
};

export default ChangeTime;