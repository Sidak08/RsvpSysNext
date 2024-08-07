import "./navbar.css";
import { Draw, Edit, Home, Setting, Back, Booking } from ".././images/svg.jsx";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = ({
  active,
  setActive,
  linesArray,
  setLinesArray,
  lastClick,
  setLastClick,
  color,
  setColor,
}) => {
  return (
    <div id="backGroundDiv">
      <div id="upperDiv">
        <Link href={"/dashboard/home"}>
          <button
            onClick={() => {
              setColor({
                home: { backgroundColor: "white", color: "#3B3939" },
                edit: { backgroundColor: "#3B3939", color: "white" },
                draw: { backgroundColor: "#3B3939", color: "white" },
                booking: { backgroundColor: "#3B3939", color: "white" },
                setting: { backgroundColor: "#3B3939", color: "white" },
                back: { backgroundColor: "#3B3939", color: "white" },
              });
              setActive("home");
              setLastClick({ x: false, y: false });
              if (
                linesArray[linesArray.length - 1][
                  linesArray[linesArray.length - 1].length - 1
                ].x != false
              ) {
                linesArray.push([{ x: false, y: false }]);
              }
            }}
          >
            <Home
              backgroundColor={color.home.backgroundColor}
              color={color.home.color}
            />
          </button>
        </Link>

        <Link href={"/dashboard/edit"}>
          <button
            onClick={() => {
              setColor({
                home: { backgroundColor: "#3B3939", color: "white" },
                edit: { backgroundColor: "white", color: "#3B3939" },
                draw: { backgroundColor: "#3B3939", color: "white" },
                booking: { backgroundColor: "#3B3939", color: "white" },
                setting: { backgroundColor: "#3B3939", color: "white" },
                back: { backgroundColor: "#3B3939", color: "white" },
              });
              setActive("edit");
              setLastClick({ x: false, y: false });
              if (
                linesArray[linesArray.length - 1][
                  linesArray[linesArray.length - 1].length - 1
                ].x != false
              ) {
                linesArray.push([{ x: false, y: false }]);
              }
            }}
          >
            <Edit
              backgroundColor={color.edit.backgroundColor}
              color={color.edit.color}
            />
          </button>
        </Link>

        <Link href={"/dashboard/draw"}>
          <button
            onClick={() => {
              setActive("draw");
              setColor({
                home: { backgroundColor: "#3B3939", color: "white" },
                edit: { backgroundColor: "#3B3939", color: "white" },
                draw: { backgroundColor: "white", color: "#3B3939" },
                booking: { backgroundColor: "#3B3939", color: "white" },
                setting: { backgroundColor: "#3B3939", color: "white" },
                back: { backgroundColor: "#3B3939", color: "white" },
              });
            }}
          >
            <Draw
              backgroundColor={color.draw.backgroundColor}
              color={color.draw.color}
            />
          </button>
        </Link>

        <Link href={"/dashboard/booking"}>
          <button
            onClick={() => {
              setActive("Booking");
              setColor({
                home: { backgroundColor: "#3B3939", color: "white" },
                edit: { backgroundColor: "#3B3939", color: "white" },
                draw: { backgroundColor: "#3B3939", color: "white" },
                booking: { backgroundColor: "white", color: "#3B3939" },
                setting: { backgroundColor: "#3B3939", color: "white" },
                back: { backgroundColor: "#3B3939", color: "white" },
              });
            }}
          >
            <Booking
              backgroundColor={color.booking.backgroundColor}
              color={color.booking.color}
            />
          </button>
        </Link>
      </div>

      <div id="lowerDiv">
        <Link href={"/"}>
          <button
            className="mb-4"
            onClick={() => {
              setColor({
                home: { backgroundColor: "#3B3939", color: "white" },
                edit: { backgroundColor: "#3B3939", color: "white" },
                draw: { backgroundColor: "#3B3939", color: "white" },
                booking: { backgroundColor: "#3B3939", color: "white" },
                setting: { backgroundColor: "#3B3939", color: "white" },
                back: { backgroundColor: "white", color: "#3B3939" },
              });
              setActive("back");
              setLastClick({ x: false, y: false });
              if (
                linesArray[linesArray.length - 1][
                  linesArray[linesArray.length - 1].length - 1
                ].x != false
              ) {
                linesArray.push([{ x: false, y: false }]);
              }
            }}
          >
            <Back
              backgroundColor={color.back.backgroundColor}
              color={color.back.color}
            />
          </button>
        </Link>

        <Link href={"/dashboard/setting"}>
          <button
            onClick={() => {
              setColor({
                home: { backgroundColor: "#3B3939", color: "white" },
                edit: { backgroundColor: "#3B3939", color: "white" },
                draw: { backgroundColor: "#3B3939", color: "white" },
                booking: { backgroundColor: "#3B3939", color: "white" },
                setting: { backgroundColor: "white", color: "#3B3939" },
                back: { backgroundColor: "#3B3939", color: "white" },
              });
              setActive("setting");
              setLastClick({ x: false, y: false });
              if (
                linesArray[linesArray.length - 1][
                  linesArray[linesArray.length - 1].length - 1
                ].x != false
              ) {
                linesArray.push([{ x: false, y: false }]);
              }
            }}
          >
            <Setting
              backgroundColor={color.setting.backgroundColor}
              color={color.setting.color}
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
