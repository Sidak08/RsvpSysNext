"use client";
import Navbar from "./components/navbar/navbar";
import React, { Children, Suspense, useEffect, useRef, useState } from "react";
import "./draw.css";
import Instructions from "./components/instructions/ins";
import BottomBar from "./components/bottomBar/bottomBar";
import EditLayout from "./components/editLayout/editLayot";
import InfoBox from "./components/infoBox/infoBox";
import HomeReserve from "./reserve/main/homeReserve";
import InfoBoxLines from "./components/infoBoxLines/infoBoxLines";
import axios from "axios";
import Loading from "./loading";

const inActiveDot = "/inActiveDot.svg";
const activeDot = "/activeDot.svg";
const roundTable = "/roundTable.svg";
const squareTable = "/squareTable.svg";
const rectangleTable = "/rectangleTable.svg";
const chair = "/chair.svg";
const highChair = "/highChair.svg";
const sofa = "/sofa.svg";

class CustomImage {
  constructor() {
    if (typeof window !== "undefined") {
      return new Image();
    } else {
      return {
        src: "",
        onload: null,
        onerror: null,
        width: 0,
        height: 0,
        alt: "",
        complete: false,
        naturalWidth: 0,
        naturalHeight: 0,
        addEventListener: function () {},
        removeEventListener: function () {},
        setAttribute: function () {},
        getAttribute: function () {},
        removeAttribute: function () {},
        dispatchEvent: function () {},
      };
    }
  }
}

const Draw = ({ children }) => {
  const [elementsArray, setElementsArray] = useState([]);
  const [linesArray, setLinesArray] = useState([[{ x: false, y: false }]]);
  const [upComingReservation, setUpComingReservation] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(0);
  const [activeNav, setActiveNav] = useState("home");
  const [lastClick, setLastClick] = useState({ x: false, y: false });
  const [selectedElement, setSelectedElement] = useState(false);
  const [activeElement, setActiveElement] = useState(false);
  const [keyPress, setKeyPress] = useState({ value: false });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [resizingObject, setResizingObject] = useState(false);
  const [color, setColor] = useState({
    home: { backgroundColor: "white", color: "#3B3939" },
    edit: { backgroundColor: "#3B3939", color: "white" },
    draw: { backgroundColor: "#3B3939", color: "white" },
    booking: { backgroundColor: "#3B3939", color: "white" },
    setting: { backgroundColor: "#3B3939", color: "white" },
    back: { backgroundColor: "#3B3939", color: "white" },
  });
  const [movingLinesArrayPoint, setMovingLinesArrayPoint] = useState(false);

  const fixElementsArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const image = new CustomImage();
      switch (arr[i].title) {
        case "Round Table":
          image.src = roundTable;
          break;
        case "Square Table":
          image.src = squareTable;
          break;
        case "Rectangle Table":
          image.src = rectangleTable;
          break;
        case "Chair":
          image.src = chair;
          break;
        case "High Chair":
          image.src = highChair;
          break;
        case "Sofa":
          image.src = sofa;
          break;
      }
      arr[i].image = image;
    }
    return arr;
  };

  const fetchData = () => {
    axios.post("/api/get_data/dashboard", {}).then((res) => {
      if (res.data.success) {
        setElementsArray(fixElementsArray(res.data.elementsArray));
        setLinesArray(res.data.linesArray);
        setUpComingReservation(res.data.upComingReservations);
      }

      setTimeout(() => {
        setForceUpdate((prev) => {
          prev + 1;
        });
      }, 1000);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar
        active={activeNav}
        setActive={setActiveNav}
        linesArray={linesArray}
        setLinesArray={setLinesArray}
        lastClick={lastClick}
        setLastClick={setLastClick}
        color={color}
        setColor={setColor}
      />
      <CanvasComponent
        active={activeNav}
        setActive={setActiveNav}
        linesArray={linesArray}
        setLinesArray={setLinesArray}
        lastClick={lastClick}
        setLastClick={setLastClick}
        keyPress={keyPress}
        setKeyPress={setKeyPress}
        color={color}
        setColor={setColor}
        selectedElement={selectedElement}
        setSelectedElement={setSelectedElement}
        elementsArray={elementsArray}
        setElementsArray={setElementsArray}
        activeElement={activeElement}
        setActiveElement={setActiveElement}
        mousePosition={mousePosition}
        setMousePosition={setMousePosition}
        resizingObject={resizingObject}
        setResizingObject={setResizingObject}
        movingLinesArrayPoint={movingLinesArrayPoint}
        setMovingLinesArrayPoint={setMovingLinesArrayPoint}
        upComingReservation={upComingReservation}
        forceUpdate={forceUpdate}
        children={children}
      />
      <Instructions active={activeNav} />
      <BottomBar />
      <EditLayout
        active={activeNav}
        selectedElement={selectedElement}
        setSelectedElement={setSelectedElement}
      />
      <InfoBox
        activeNav={activeNav}
        activeElement={activeElement}
        setActiveElement={setActiveElement}
        elementsArray={elementsArray}
        resizingObject={resizingObject}
        upComingReservations={upComingReservation}
      />
      <HomeReserve
        activeElement={activeElement}
        activeNav={activeNav}
        elementsArray={elementsArray}
        upComingReservations={upComingReservation}
        setElementsArray={setElementsArray}
        setUpComingReservations={setUpComingReservation}
      />
      <InfoBoxLines
        activeNav={activeNav}
        linesArray={linesArray}
        movingLinesArrayPoint={movingLinesArrayPoint}
        setMovingLinesArrayPoint={setMovingLinesArrayPoint}
      />
    </div>
  );
};

const CanvasComponent = ({
  active,
  setActive,
  linesArray,
  setLinesArray,
  lastClick,
  setLastClick,
  setKeyPress,
  keyPress,
  setColor,
  color,
  setSelectedElement,
  selectedElement,
  elementsArray,
  setElementsArray,
  activeElement,
  setActiveElement,
  mousePosition,
  setMousePosition,
  resizingObject,
  setResizingObject,
  movingLinesArrayPoint,
  setMovingLinesArrayPoint,
  upComingReservation,
  forceUpdate,
  children,
}) => {
  const activeDotImage = new CustomImage();
  const inActiveDotImage = new CustomImage();
  const HoverEditImage = new CustomImage();
  activeDotImage.src = activeDot;
  inActiveDotImage.src = inActiveDot;

  const canvasRef = useRef(null);
  const [panning, setPanning] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [initialization, setInitialization] = useState(false);

  const hoverImage = { height: 0, width: 0 };
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [cursorStyle, setCursorStyle] = useState("grab");

  const [movingObject, setMovingObject] = useState(false);
  const [checkUpdate, setCheckUpdate] = useState(0);

  const genrateId = (ary) => {
    const randomNum = Math.floor(Math.random() * 1000000);
    for (let i = 0; i < ary.length; i++) {
      if (randomNum === ary[i].id) {
        genrateId(ary);
      }
    }
    return randomNum;
  };

  const drawCanvas = (context) => {
    context.fillStyle = "#0D0D0D";
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (let j = 0; j < linesArray.length; j++) {
      for (let i = 1; i < linesArray[j].length - 1; i++) {
        context.strokeStyle = "white";
        context.lineWidth = 1.5;
        context.beginPath();
        context.moveTo(
          linesArray[j][i].x + offset.x,
          linesArray[j][i].y + offset.y,
        );
        context.lineTo(
          linesArray[j][i + 1].x + offset.x,
          linesArray[j][i + 1].y + offset.y,
        );
        context.stroke();
        context.drawImage(
          inActiveDotImage,
          linesArray[j][i].x + offset.x - 7,
          linesArray[j][i].y + offset.y - 7,
          14,
          14,
        );
        if (linesArray[j].length === i + 2) {
          context.drawImage(
            inActiveDotImage,
            linesArray[j][i + 1].x + offset.x - 7,
            linesArray[j][i + 1].y + offset.y - 7,
            14,
            14,
          );
        }
      }
    }
    for (let i = 0; i < elementsArray.length; i++) {
      context.drawImage(
        elementsArray[i].image,
        elementsArray[i].x + offset.x,
        elementsArray[i].y + offset.y,
        elementsArray[i].width,
        elementsArray[i].height,
      );
    }
  };

  const handleMouseMove = (e) => {
    if (panning) {
      const dx = e.clientX - mousePosition.x;
      const dy = e.clientY - mousePosition.y;
      setOffset((prevOffset) => ({
        x: prevOffset.x + dx / 1.5,
        y: prevOffset.y + dy / 1.5,
      }));
    }
    if (
      panning == false &&
      active == "edit" &&
      isMouseDown &&
      activeElement !== false &&
      movingObject
    ) {
      elementsArray[activeElement].x =
        e.clientX - offset.x - elementsArray[activeElement].width / 2;
      elementsArray[activeElement].y =
        e.clientY - offset.y - elementsArray[activeElement].height / 2;
    }
    if (resizingObject !== false && isMouseDown && active == "edit") {
      handleResizing(e);
    }
    if (movingLinesArrayPoint !== false && isMouseDown && active == "edit") {
      linesArray[movingLinesArrayPoint.i][movingLinesArrayPoint.j].x =
        e.clientX - offset.x;
      linesArray[movingLinesArrayPoint.i][movingLinesArrayPoint.j].y =
        e.clientY - offset.y;
    }
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleResizing = (e) => {
    if (elementsArray[resizingObject].reSize === "n") {
      const ogBottom =
        elementsArray[resizingObject].y +
        elementsArray[resizingObject].height;
      const newHeight = ogBottom - e.clientY + offset.y;
      elementsArray[resizingObject].y = e.clientY - offset.y;
      elementsArray[resizingObject].height = Math.abs(newHeight);
    } else if (elementsArray[resizingObject].reSize === "ne") {
      const ogBottom =
        elementsArray[resizingObject].y +
        elementsArray[resizingObject].height;
      const newHeight = ogBottom - e.clientY + offset.y;
      elementsArray[resizingObject].y = e.clientY - offset.y;
      elementsArray[resizingObject].height = Math.abs(newHeight);
      elementsArray[resizingObject].width = Math.abs(
        e.clientX - elementsArray[resizingObject].x - offset.x,
      );
    } else if (elementsArray[resizingObject].reSize === "e") {
      elementsArray[resizingObject].width = Math.abs(
        e.clientX - elementsArray[resizingObject].x - offset.x,
      );
    } else if (elementsArray[resizingObject].reSize === "se") {
      elementsArray[resizingObject].width = Math.abs(
        e.clientX - elementsArray[resizingObject].x - offset.x,
      );
      elementsArray[resizingObject].height = Math.abs(
        e.clientY - elementsArray[resizingObject].y - offset.y,
      );
    } else if (elementsArray[resizingObject].reSize === "s") {
      elementsArray[resizingObject].height = Math.abs(
        e.clientY - elementsArray[resizingObject].y - offset.y,
      );
    } else if (elementsArray[resizingObject].reSize === "sw") {
      elementsArray[resizingObject].height = Math.abs(
        e.clientY - elementsArray[resizingObject].y - offset.y,
      );
      const ogRight =
        elementsArray[resizingObject].x + elementsArray[resizingObject].width;
      const newWidth = ogRight - e.clientX + offset.x;
      elementsArray[resizingObject].x = e.clientX - offset.x;
      elementsArray[resizingObject].width = Math.abs(newWidth);
    } else if (elementsArray[resizingObject].reSize === "w") {
      const ogRight =
        elementsArray[resizingObject].x + elementsArray[resizingObject].width;
      const newWidth = ogRight - e.clientX + offset.x;
      elementsArray[resizingObject].x = e.clientX - offset.x;
      elementsArray[resizingObject].width = Math.abs(newWidth);
    } else if (elementsArray[resizingObject].reSize === "nw") {
      const ogBottom =
        elementsArray[resizingObject].y +
        elementsArray[resizingObject].height;
      const newHeight = ogBottom - e.clientY + offset.y;
      elementsArray[resizingObject].y = e.clientY - offset.y;
      elementsArray[resizingObject].height = Math.abs(newHeight);
      const ogRight =
        elementsArray[resizingObject].x + elementsArray[resizingObject].width;
      const newWidth = ogRight - e.clientX + offset.x;
      elementsArray[resizingObject].x = e.clientX - offset.x;
      elementsArray[resizingObject].width = Math.abs(newWidth);
    }
  };

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    setMousePosition({ x: clientX, y: clientY });
    if (active === "home" || active === "edit") {
      setPanning(true);
      setLastClick({ x: false, y: false });
    }

    if (active === "home") {
      handleHomeMouseDown(clientX, clientY);
    }
    if (active === "draw") {
      handleDrawMouseDown();
    }
    if (active === "edit") {
      handleEditMouseDown(clientX, clientY);
    }
  };

  const handleHomeMouseDown = (clientX, clientY) => {
    for (let i = 0; i < elementsArray.length; i++) {
      if (
        clientX >= elementsArray[i].x + offset.x &&
        clientX <= elementsArray[i].x + offset.x + elementsArray[i].width &&
        clientY >= elementsArray[i].y + offset.y &&
        clientY <= elementsArray[i].y + offset.y + elementsArray[i].height
      ) {
        elementsArray[i].selected = true;
        setActiveElement(i);
      } else {
        elementsArray[i].selected = false;
      }
    }
    const reset = (elementsArray) => {
      for (let i = 0; i < elementsArray.length; i++) {
        if (elementsArray[i].selected === true) return;
      }
      setActiveElement(false);
      return;
    };
    reset(elementsArray);
  };

  const handleDrawMouseDown = () => {
    setLastClick({
      x: mousePosition.x - offset.x,
      y: mousePosition.y - offset.y,
    });
    linesArray[linesArray.length - 1].push({
      x: mousePosition.x - offset.x,
      y: mousePosition.y - offset.y,
    });
  };

  const handleEditMouseDown = (clientX, clientY) => {
    if (selectedElement !== false) {
      elementsArray.push({
        image: HoverEditImage,
        x: clientX - offset.x - hoverImage.width / 2,
        y: clientY - offset.y - hoverImage.height / 2,
        width: hoverImage.width,
        height: hoverImage.height,
        selected: false,
        reSize: false,
        title: hoverImage.title,
        reservation: [],
        id: genrateId(elementsArray),
      });
      setSelectedElement(false);
    }
    for (let i = 0; i < elementsArray.length; i++) {
      if (
        clientX >= elementsArray[i].x + offset.x &&
        clientX <= elementsArray[i].x + offset.x + elementsArray[i].width &&
        clientY >= elementsArray[i].y + offset.y &&
        clientY <= elementsArray[i].y + offset.y + elementsArray[i].height
      ) {
        elementsArray[i].selected = true;
        setActiveElement(i);
        setMovingObject(true);
      } else {
        elementsArray[i].selected = false;
      }
    }
    for (let i = 0; i < elementsArray.length; i++) {
      if (elementsArray[i].reSize !== false) {
        setResizingObject(i);
        setPanning(false);
        setMovingObject(false);
      }
    }
    const reset = (elementsArray) => {
      for (let i = 0; i < elementsArray.length; i++) {
        if (elementsArray[i].selected === true) return;
      }
      setActiveElement(false);
      return;
    };